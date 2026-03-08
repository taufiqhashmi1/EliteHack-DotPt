// app/press/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const quotes = [
  {
    id: 1,
    publication: "Condé Nast Traveler",
    text: "Lumière has effectively rendered the traditional travel agent obsolete, replacing them with a digital architecture that anticipates your every whim.",
  },
  {
    id: 2,
    publication: "Financial Times",
    text: "The absolute zenith of bespoke itinerary planning. They do not book trips; they architect flawless escapes for the time-poor and aesthetically driven.",
  },
  {
    id: 3,
    publication: "Vogue",
    text: "An indispensable blackbook of global access, packaged within an interface of striking minimalism.",
  },
];

const pressReleases = [
  {
    id: 1,
    date: "February 12, 2026",
    title: "Lumière Expands Private Aviation Fleet Access to Sub-Saharan Africa",
  },
  {
    id: 2,
    date: "November 04, 2025",
    title: "The Launch of The 'Invisible Concierge' App for HNW Individuals",
  },
  {
    id: 3,
    date: "September 18, 2025",
    title: "Lumière Acquires Exclusive Booking Rights for Five Historic Tuscan Estates",
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Media & Accolades
          </span>
          <StaggeredText 
            text="The Industry Standard" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
        </header>

        {/* Quotes Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.7, 0, 0.3, 1] }}
              className="flex flex-col gap-8 p-10 bg-stone-900 border border-stone-800 hover:border-amber-600/30 transition-colors duration-500"
            >
              <Quote className="text-stone-700" size={32} strokeWidth={1} />
              <p className="font-serif text-xl md:text-2xl text-stone-200 font-light leading-relaxed">
                "{quote.text}"
              </p>
              <div className="mt-auto pt-8 border-t border-stone-800">
                <span className="text-amber-500 uppercase tracking-[0.2em] text-[10px] font-semibold">
                  {quote.publication}
                </span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Press Releases */}
        <section className="max-w-4xl mx-auto w-full flex flex-col gap-12">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl text-stone-100 border-b border-stone-800 pb-4"
          >
            Press Releases
          </motion.h3>
          
          <div className="flex flex-col">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link 
                  href="#"
                  className="cursor-magnetic group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-stone-800 hover:bg-stone-900/50 transition-colors px-4 -mx-4"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-stone-500 text-[10px] uppercase tracking-[0.2em]">
                      {release.date}
                    </span>
                    <h4 className="font-serif text-xl md:text-2xl text-stone-200 group-hover:text-amber-500 transition-colors duration-300">
                      {release.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-300 shrink-0">
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Press Contact */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center py-16 border-t border-stone-800 gap-6"
        >
          <span className="text-stone-400 text-sm font-light">For media inquiries and press kit requests:</span>
          <a 
            href="mailto:press@lumiere.com"
            className="cursor-magnetic text-amber-500 text-xl font-serif italic hover:text-amber-400 transition-colors"
          >
            press@lumiere.com
          </a>
        </motion.section>

      </div>
    </div>
  );
}