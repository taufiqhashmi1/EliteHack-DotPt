// app/destinations/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Amalfi Coast",
    region: "Italy",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2938&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    name: "Kyoto",
    region: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2832&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    name: "Courchevel",
    region: "French Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7785a0ce5652?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    name: "Santorini",
    region: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Header Section */}
        <header className="flex flex-col gap-6 max-w-3xl">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Global Portfolio
          </span>
          <StaggeredText 
            text="Curated Destinations" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-xl"
          >
            From secluded alpine chalets to private Mediterranean peninsulas, explore the world's most exclusive coordinates reserved for the discerning few.
          </motion.p>
        </header>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.7, 0, 0.3, 1] }}
              className={`group relative overflow-hidden h-[400px] md:h-[600px] cursor-magnetic bg-stone-900 ${dest.colSpan}`}
            >
              {/* Background Image with Zoom on Hover */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent transition-opacity duration-700 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="overflow-hidden mb-2">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="block text-amber-500 tracking-[0.2em] uppercase text-xs font-semibold"
                  >
                    {dest.region}
                  </motion.span>
                </div>
                <div className="flex justify-between items-end">
                  <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    {dest.name}
                  </h2>
                  <Link href={`/destinations/${dest.name.toLowerCase().replace(" ", "-")}`} className="w-12 h-12 rounded-full border border-stone-100/30 flex items-center justify-center text-stone-100 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-amber-600 hover:border-amber-600 hover:text-stone-950">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}