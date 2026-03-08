import { NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@/lib/supabase/server';

const TripRequestSchema = z.object({
  source_city: z.string(),
  destination_city: z.string(),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  travelers: z.number().positive(),
  budget: z.object({
    total_max: z.number(),
    hotel_max_per_night: z.number(),
  }),
  preferences: z.array(z.string()),
  transport_mode: z.enum(['FLIGHT', 'BUS', 'TRAIN', 'ANY']),
}).refine((data) => new Date(data.start_date) <= new Date(data.end_date), {
  message: "end_date cannot be before start_date",
  path: ["end_date"],
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate payload
    const parsed = TripRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, errors: parsed.error.issues }, { status: 400 });
    }
    
    const validatedData = parsed.data;
    const supabase = await createClient();

    // 2. Backend Database Sieve
    const { data: city } = await supabase
      .from('cities')
      .select('id, name, center_lat, center_lon')
      .ilike('name', `%${validatedData.destination_city}%`)
      .single();

    let localHotels: any[] = [];
    let localPlaces: any[] = [];

    if (city) {
      const [hotelsRes, destinationsRes] = await Promise.all([
        supabase.rpc('get_nearby_hotels', {
          target_lat: city.center_lat, 
          target_lng: city.center_lon,
          radius_meters: 15000, 
          max_price_per_night: validatedData.budget.hotel_max_per_night
        }),
        supabase.rpc('get_nearby_destinations', {
          hotel_lat: city.center_lat, 
          hotel_lng: city.center_lon, 
          radius_meters: 30000
        })
      ]);
      localHotels = hotelsRes.data || [];
      localPlaces = destinationsRes.data || [];
    }

    // 3. LLM Knowledge Injection
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
      You are the Gati-Agent deterministic reasoning layer. Plan a trip to ${validatedData.destination_city}.
      
      TRIP DETAILS:
      - Dates: ${validatedData.start_date} to ${validatedData.end_date}
      - Party: ${validatedData.travelers} people
      - Budget: ${validatedData.budget.hotel_max_per_night} per night for hotels.
      - Preferences: ${validatedData.preferences.join(', ')}

      GROUND TRUTH DATABASE CONTEXT:
      - Hotels: ${JSON.stringify(localHotels)}
      - Attractions: ${JSON.stringify(localPlaces)}

      INSTRUCTIONS:
      1. Create a logical daily itinerary (Morning, Afternoon, Evening).
      2. You MUST prioritize using the EXACT IDs and names provided in the GROUND TRUTH DATABASE CONTEXT.
      3. Return ONLY valid JSON matching this exact structure:
      {
        "generated_plans": [
          {
            "plan_type": "BALANCED",
            "hotel_id": "Insert Database Hotel ID here, or null if none fit",
            "xai_reasoning": "Explain why this specific hotel and route was chosen based on budget and proximity.",
            "itinerary": [
              {
                "day": 1,
                "morning": {"activity": "Description", "destination_id": "Insert DB ID or null"},
                "afternoon": {"activity": "Description", "destination_id": "Insert DB ID or null"},
                "evening": {"activity": "Description", "destination_id": "Insert DB ID or null"}
              }
            ]
          }
        ]
      }
    `;

    const aiResponse = await model.generateContent(prompt);
    const result = JSON.parse(aiResponse.response.text());

    return NextResponse.json({ success: true, data: result });

  } catch (error: any) {
    console.error("DEBUG:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}