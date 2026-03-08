// app/protected/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Compass, Calendar, Plus } from "lucide-react";
import { Suspense } from "react";

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
          <button className="flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-stone-950 transition-all duration-500 uppercase tracking-[0.15em] text-xs font-medium group">
            <Plus
              size={16}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
            New Itinerary
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Trips Section */}
          <section className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="font-serif text-2xl text-stone-300">
              Upcoming Journeys
            </h2>

            {/* Empty State / Interactive Card */}
            <div className="group relative overflow-hidden bg-stone-900 border border-stone-800 p-8 cursor-pointer transition-all duration-700 hover:border-amber-600/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-stone-400 text-sm tracking-wide">
                    <Calendar size={16} className="text-amber-500" />
                    <span>Not Scheduled</span>
                  </div>
                  <h3 className="font-serif text-3xl font-light group-hover:text-amber-500 transition-colors duration-500">
                    Awaiting Your Next Destination
                  </h3>
                  <p className="text-stone-400 font-light max-w-md">
                    Your itinerary canvas is blank. Begin selecting your luxury
                    accommodations and bespoke experiences.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <Compass
                    size={64}
                    className="text-stone-800 group-hover:text-amber-600/20 transition-all duration-1000 group-hover:rotate-180"
                    strokeWidth={0.5}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Concierge / Stats Sidebar */}
          <aside className="flex flex-col gap-6">
            <h2 className="font-serif text-2xl text-stone-300">
              Your Portfolio
            </h2>

            <div className="bg-stone-900 border border-stone-800 p-8 flex flex-col gap-6 transition-all duration-500 hover:border-stone-700">
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400 tracking-wide text-sm">
                  Total Journeys
                </span>
                <span className="font-serif text-2xl text-amber-500">0</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span className="text-stone-400 tracking-wide text-sm">
                  Saved Destinations
                </span>
                <span className="font-serif text-2xl text-amber-500">0</span>
              </div>

              <div className="pt-4">
                <h4 className="text-stone-200 font-serif mb-2 text-lg">
                  Dedicated Concierge
                </h4>
                <p className="text-stone-500 text-sm font-light mb-6">
                  Need assistance curating your next exclusive experience?
                </p>
                <a
                  href="mailto:concierge@example.com"
                  className="inline-block text-amber-500 text-xs uppercase tracking-[0.2em] hover:text-amber-400 transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-1"
                >
                  Contact Advisor
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}