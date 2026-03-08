// app/protected/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { FoldingItineraryCard } from "@/components/folding-itinerary-card";
import { PathTracingMap } from "@/components/path-tracing-map";
import { GlassmorphismCard } from "@/components/glassmorphism-card";

async function UserGreeting() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  const email = data.claims.email || "Distinguished Guest";
  const name = email.split("@")[0];

  return (
    <h1 className="font-serif text-4xl font-light">
      Welcome back, <span className="italic capitalize">{name}</span>
    </h1>
  );
}

export default function ProtectedPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans selection:bg-amber-700 selection:text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Dashboard Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-8 gap-6 transition-all duration-700 opacity-100 translate-y-0">
          
          <div>
            <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-semibold mb-2 block">
              Private Dashboard
            </span>
            <Suspense
              fallback={
                <div className="h-10 w-64 bg-stone-900 animate-pulse rounded"></div>
              }
            >
              <UserGreeting />
            </Suspense>
          </div>
          <button className="cursor-magnetic flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-stone-950 transition-all duration-500 uppercase tracking-[0.15em] text-xs font-medium group">
            <Plus
              size={16}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
            New Itinerary
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area (Spans 2 columns) */}
          <section className="lg:col-span-2 flex flex-col gap-12">
            
            {/* Active Journey Map */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-stone-300">
                Active Journey
              </h2>
              <PathTracingMap />
            </div>

            {/* Upcoming Itineraries */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-stone-300">
                Upcoming Journeys
              </h2>
              <div className="flex flex-col gap-4">
                <FoldingItineraryCard />
                {/* You can add more cards here as they map over data */}
              </div>
            </div>

          </section>

          {/* Sidebar Area (Spans 1 column) */}
          <aside className="flex flex-col gap-12">
            
            {/* Stats / Glassmorphism Cards */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-stone-300">
                Your Portfolio
              </h2>
              <div className="flex flex-col gap-4">
                <GlassmorphismCard 
                  title="Total Journeys" 
                  value="12" 
                  subtitle="Since 2024" 
                />
                <GlassmorphismCard 
                  title="Saved Destinations" 
                  value="8" 
                  subtitle="Awaiting curation" 
                />
              </div>
            </div>

            {/* Concierge Block */}
            <div className="bg-stone-900 border border-stone-800 p-8 flex flex-col transition-all duration-500 hover:border-stone-700">
              <h4 className="text-stone-200 font-serif mb-2 text-lg">
                Dedicated Concierge
              </h4>
              <p className="text-stone-500 text-sm font-light mb-6">
                Need assistance curating your next exclusive experience? Our advisors are available 24/7.
              </p>
              <a
                href="mailto:concierge@lumiere.com"
                className="cursor-magnetic self-start inline-block text-amber-500 text-xs uppercase tracking-[0.2em] hover:text-amber-400 transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-1"
              >
                Contact Advisor
              </a>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}