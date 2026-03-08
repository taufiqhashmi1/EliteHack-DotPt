// components/trip-architect.tsx
"use client";

import { useState, useEffect } from "react";
import { MapPin, Calendar, Users, Wallet, Loader2, Sparkles, Map } from "lucide-react";
import { cn } from "@/lib/utils";

interface TripPlan {
  plan_type: string;
  hotel_id: string;
  xai_reasoning: string;
  itinerary: {
    day: number;
    morning: { activity: string; destination_id: string };
    afternoon: { activity: string; destination_id: string };
    evening: { activity: string; destination_id: string };
  }[];
}

const loadingMessages = [
  "Capturing travel intent...",
  "Running spatial database sieve...",
  "Vetting hotels within budget...",
  "Injecting ground truth to Gati-Agent...",
  "Structuring deterministic itinerary...",
];

export function TripArchitect() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [plans, setPlans] = useState<TripPlan[] | null>(null);

  const [formData, setFormData] = useState({
    source_city: "Mumbai",
    destination_city: "Jaipur",
    start_date: "2026-04-10",
    end_date: "2026-04-14",
    travelers: 2,
    total_max: 40000,
    hotel_max_per_night: 5000,
    transport_mode: "FLIGHT",
    preferences: ["historical", "cultural", "food"],
  });

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPlans(null);
    setLoadingIndex(0);

    const payload = {
      source_city: formData.source_city,
      destination_city: formData.destination_city,
      start_date: formData.start_date,
      end_date: formData.end_date,
      travelers: Number(formData.travelers),
      budget: {
        total_max: Number(formData.total_max),
        hotel_max_per_night: Number(formData.hotel_max_per_night),
      },
      preferences: formData.preferences,
      transport_mode: formData.transport_mode,
    };

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to generate plan. Check constraints.");
      }

      setPlans(data.data.generated_plans);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-stone-900 p-8 border border-stone-800">
        <h2 className="font-serif text-2xl text-stone-300 border-b border-stone-800 pb-4 mb-2">Trip Architect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><MapPin size={12}/> Source</label>
            <input type="text" value={formData.source_city} onChange={e => setFormData({...formData, source_city: e.target.value})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><MapPin size={12}/> Destination</label>
            <input type="text" value={formData.destination_city} onChange={e => setFormData({...formData, destination_city: e.target.value})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><Calendar size={12}/> Start Date</label>
            <input type="date" value={formData.start_date} onChange={e => setFormData({...formData, start_date: e.target.value})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200 [color-scheme:dark]" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><Calendar size={12}/> End Date</label>
            <input type="date" value={formData.end_date} onChange={e => setFormData({...formData, end_date: e.target.value})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200 [color-scheme:dark]" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><Wallet size={12}/> Max Hotel/Night (₹)</label>
            <input type="number" value={formData.hotel_max_per_night} onChange={e => setFormData({...formData, hotel_max_per_night: Number(e.target.value)})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-500 flex items-center gap-2"><Users size={12}/> Travelers</label>
            <input type="number" value={formData.travelers} onChange={e => setFormData({...formData, travelers: Number(e.target.value)})} className="bg-stone-950 border border-stone-800 p-3 text-sm focus:border-amber-500 outline-none text-stone-200" required />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="mt-4 bg-amber-600 hover:bg-amber-500 text-stone-950 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors disabled:opacity-50 flex justify-center items-center gap-2 cursor-magnetic"
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          Initialize Agentic Curation
        </button>
        {error && <p className="text-red-400 text-xs mt-2 p-3 bg-red-950/30 border border-red-900/50">{error}</p>}
      </form>

      {/* Output & Loader */}
      <div className="flex flex-col gap-6">
        {isLoading && (
          <div className="h-64 flex flex-col items-center justify-center border border-stone-800 bg-stone-900/50 relative overflow-hidden">
            <Loader2 size={48} className="text-amber-500 animate-spin mb-8 opacity-80" />
            <div className="h-6 overflow-hidden relative w-full max-w-sm text-center">
              {loadingMessages.map((msg, idx) => (
                <p 
                  key={idx} 
                  className={cn(
                    "absolute w-full transition-all duration-500 text-sm tracking-wide",
                    idx === loadingIndex ? "opacity-100 translate-y-0 text-amber-500" : "opacity-0 translate-y-4"
                  )}
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>
        )}

        {!isLoading && !plans && (
          <div className="h-64 flex flex-col items-center justify-center border border-stone-800 border-dashed text-stone-600 bg-stone-900/20">
            <Map size={48} strokeWidth={1} className="mb-4 opacity-50" />
            <p className="tracking-widest uppercase text-[10px]">Awaiting Agent Parameters</p>
          </div>
        )}

        {!isLoading && plans && plans.map((plan, idx) => (
          <div key={idx} className="bg-stone-900 border border-stone-800 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-start border-b border-stone-800 pb-6">
              <div>
                <span className="text-amber-500 tracking-[0.2em] uppercase text-[10px] font-semibold block mb-2">
                  {plan.plan_type} PLAN
                </span>
                <h3 className="font-serif text-2xl text-stone-100">Curated Architecture</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block mb-1">Hotel Identity Ref</span>
                <span className="text-stone-300 font-mono text-xs bg-stone-950 border border-stone-800 px-3 py-1.5">{plan.hotel_id || "Awaiting Sieve Data"}</span>
              </div>
            </div>
            
            <div className="bg-stone-950 border-l-2 border-amber-600 p-5">
              <p className="text-sm text-stone-400 leading-relaxed italic">
                <strong className="text-amber-500/80 not-italic mr-2 uppercase tracking-widest text-[10px]">Agent Reasoning:</strong> 
                {plan.xai_reasoning}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {plan.itinerary.map((day, dIdx) => (
                <div key={dIdx} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 border border-stone-800 bg-stone-950/50 hover:border-amber-600/30 transition-colors">
                  <div className="md:col-span-1 border-r border-stone-800 pr-4 flex items-center">
                    <span className="text-stone-500 text-xs tracking-[0.2em] uppercase font-semibold">Day {day.day}</span>
                  </div>
                  <div className="md:col-span-3 flex flex-col gap-3 text-sm text-stone-300">
                    <p className="flex gap-4"><span className="text-amber-500 w-8 inline-block font-mono text-xs">AM</span> {day.morning.activity}</p>
                    <div className="h-px w-full bg-stone-800/50" />
                    <p className="flex gap-4"><span className="text-amber-500 w-8 inline-block font-mono text-xs">PM</span> {day.afternoon.activity}</p>
                    <div className="h-px w-full bg-stone-800/50" />
                    <p className="flex gap-4"><span className="text-amber-500 w-8 inline-block font-mono text-xs">EVE</span> {day.evening.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}