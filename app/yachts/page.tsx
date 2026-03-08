// app/yachts/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight, Anchor, Compass } from "lucide-react";
import Link from "next/link";

const yachts = [
  {
    id: 1,
    name: "Axioma",
    type: "Motor Yacht",
    length: "72m / 236ft",
    guests: 12,
    crew: 20,
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Maltese Falcon",
    type: "Sailing Yacht",
    length: "88m / 289ft",
    guests: 12,
    crew: 19,
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2831&auto=format&fit=crop",
  },
];

export default function YachtsPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold flex items-center gap-3">
            <Anchor size={14} /> The Ocean Fleet <Compass size={14} />
          </span>
          <StaggeredText 
            text="Yacht Charters" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Access the most exclusive vessels navigating the Mediterranean, Caribbean, and beyond. Total freedom, uncompromised luxury, absolute privacy.
          </motion.p>
        </header>

        {/* Yacht Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {yachts.map((yacht, index) => (
            <motion.div
              key={yacht.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.7, 0, 0.3, 1] }}
              className="group cursor-magnetic flex flex-col gap-6"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900 border border-stone-800 transition-colors duration-500 group-hover:border-amber-600/30">
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url(${yacht.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <span className="text-amber-500 tracking-[0.2em] uppercase text-[10px] font-semibold">
                      {yacht.type}
                    </span>
                    <h2 className="font-serif text-3xl font-light text-stone-100 drop-shadow-lg">
                      {yacht.name}
                    </h2>
                  </div>
                  <Link 
                    href="/auth/sign-up"
                    className="w-10 h-10 rounded-full border border-stone-100/30 flex items-center justify-center text-stone-100 bg-stone-950/30 backdrop-blur-sm group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-stone-950 transition-all duration-500"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-stone-800 text-stone-400 text-xs tracking-[0.15em] uppercase px-2">
                <span>{yacht.length}</span>
                <span className="w-1 h-1 rounded-full bg-stone-700" />
                <span>{yacht.guests} Guests</span>
                <span className="w-1 h-1 rounded-full bg-stone-700" />
                <span>{yacht.crew} Crew</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/auth/sign-up" 
            className="cursor-magnetic px-10 py-4 border border-stone-800 text-stone-300 hover:border-amber-600 hover:text-amber-500 transition-all duration-500 text-xs uppercase tracking-[0.2em]"
          >
            Consult a Charter Broker
          </Link>
        </motion.div>

      </div>
    </div>
  );
}