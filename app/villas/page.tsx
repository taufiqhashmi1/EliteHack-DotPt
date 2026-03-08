// app/villas/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight, Bed, Bath, Maximize } from "lucide-react";
import Link from "next/link";

const estates = [
  {
    id: 1,
    name: "Villa d'Este",
    location: "Lake Como, Italy",
    guests: 12,
    beds: 6,
    sqft: "14,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Casa Del Sol",
    location: "Ibiza, Spain",
    guests: 16,
    beds: 8,
    sqft: "22,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "The Glass Pavilion",
    location: "Montecito, California",
    guests: 10,
    beds: 5,
    sqft: "11,200",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop",
  },
];

export default function VillasPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Exclusive Residences
          </span>
          <StaggeredText 
            text="Private Estates" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            A meticulously vetted collection of the world's most exceptional private homes. Fully staffed, architecturally significant, and entirely yours.
          </motion.p>
        </header>

        {/* Estates List */}
        <div className="flex flex-col gap-32">
          {estates.map((estate, index) => (
            <motion.div 
              key={estate.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image Block */}
              <div className={`lg:col-span-8 relative aspect-[16/9] w-full overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center cursor-magnetic transition-transform duration-2000 hover:scale-105"
                  style={{ backgroundImage: `url(${estate.image})` }}
                />
              </div>

              {/* Text Block */}
              <div className={`lg:col-span-4 flex flex-col gap-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-col gap-2">
                  <span className="text-stone-500 tracking-[0.2em] uppercase text-xs">
                    {estate.location}
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-stone-100 font-light">
                    {estate.name}
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-stone-800 py-6">
                  <div className="flex flex-col gap-2 items-center text-center">
                    <Bed className="text-amber-500" size={20} strokeWidth={1.5} />
                    <span className="text-stone-400 text-xs tracking-wider uppercase">{estate.beds} Beds</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-center border-x border-stone-800">
                    <Bath className="text-amber-500" size={20} strokeWidth={1.5} />
                    <span className="text-stone-400 text-xs tracking-wider uppercase">Up to {estate.guests}</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-center">
                    <Maximize className="text-amber-500" size={20} strokeWidth={1.5} />
                    <span className="text-stone-400 text-xs tracking-wider uppercase">{estate.sqft} ft²</span>
                  </div>
                </div>

                <Link 
                  href="/auth/sign-up" 
                  className="cursor-magnetic flex items-center justify-between group border border-stone-800 p-4 hover:border-amber-600/50 hover:bg-stone-900 transition-all duration-500"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-300 group-hover:text-amber-500 transition-colors">
                    Inquire Availability
                  </span>
                  <ArrowRight size={16} className="text-stone-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}