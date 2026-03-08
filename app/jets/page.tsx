// app/jets/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight, Plane, Wind, Users } from "lucide-react";
import Link from "next/link";

const jets = [
  {
    id: 1,
    category: "Heavy Jets",
    models: "Gulfstream G650 / Global 7500",
    range: "7,000+ nm",
    capacity: "Up to 14 Passengers",
    description: "The pinnacle of intercontinental travel. Uncompromising space, dedicated sleeping quarters, and uninterrupted global reach.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Super Midsize",
    models: "Challenger 350 / Citation Longitude",
    range: "3,500 nm",
    capacity: "Up to 9 Passengers",
    description: "Optimal for cross-country and transcontinental routes. Exceptional cabin comfort with standing headroom and premium catering.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Light Jets",
    models: "Phenom 300 / Citation CJ4",
    range: "2,000 nm",
    capacity: "Up to 7 Passengers",
    description: "Agile and efficient for regional hops. Access remote runways and bypass major hubs with speed and absolute privacy.",
    image: "https://www.jetaviva.com/wp-content/uploads/2025/04/IADA-Controller-Image-V2-1-2048x1366.jpg",
  },
];

export default function JetsPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold flex items-center gap-3">
            <Plane size={14} /> Private Aviation
          </span>
          <StaggeredText 
            text="Ascend Beyond" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Command your schedule. Bypass commercial constraints with our curated fleet of private aircraft, ready at a moment's notice for global deployment.
          </motion.p>
        </header>

        {/* Fleet List */}
        <div className="flex flex-col gap-32">
          {jets.map((jet, index) => (
            <motion.div 
              key={jet.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image Block */}
              <div className={`lg:col-span-7 relative aspect-[16/9] w-full overflow-hidden bg-stone-900 border border-stone-800 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
                  style={{ backgroundImage: `url(${jet.image})` }}
                />
              </div>

              {/* Text Block */}
              <div className={`lg:col-span-5 flex flex-col gap-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-col gap-2">
                  <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-semibold">
                    {jet.category}
                  </span>
                  <h2 className="font-serif text-4xl text-stone-100 font-light">
                    {jet.models}
                  </h2>
                  <p className="text-stone-400 font-light leading-relaxed mt-4">
                    {jet.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-stone-800 py-6">
                  <div className="flex flex-col gap-2 items-start">
                    <Wind className="text-stone-500" size={18} strokeWidth={1.5} />
                    <span className="text-stone-300 text-xs tracking-[0.15em] uppercase">Range</span>
                    <span className="text-amber-500 font-serif text-xl">{jet.range}</span>
                  </div>
                  <div className="flex flex-col gap-2 items-start border-l border-stone-800 pl-4">
                    <Users className="text-stone-500" size={18} strokeWidth={1.5} />
                    <span className="text-stone-300 text-xs tracking-[0.15em] uppercase">Capacity</span>
                    <span className="text-amber-500 font-serif text-xl">{jet.capacity}</span>
                  </div>
                </div>

                <Link 
                  href="/auth/sign-up" 
                  className="cursor-magnetic group flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-amber-500 transition-colors w-max"
                >
                  Request Flight
                  <span className="w-8 h-px bg-stone-700 group-hover:bg-amber-500 group-hover:w-12 transition-all duration-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}