// app/careers/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const positions = [
  {
    id: 1,
    title: "Senior Aviation Charter Broker",
    location: "London, UK",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Private Client Director",
    location: "New York, USA",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Luxury Itinerary Architect",
    location: "Remote / Global",
    type: "Contract",
  },
  {
    id: 4,
    title: "Estate Procurement Specialist",
    location: "Paris, France",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Join The Maison
          </span>
          <StaggeredText 
            text="Architects of the Extraordinary" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Lumière seeks visionaries, perfectionists, and global connoisseurs. We operate at the apex of luxury travel, where average is completely unacceptable.
          </motion.p>
        </header>

        {/* Culture Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-y border-stone-800 py-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-serif text-4xl text-stone-100 font-light">Our Philosophy</h2>
            <div className="space-y-6 text-stone-400 font-light leading-relaxed">
              <p>
                To work at Lumière is to possess an uncompromising eye for detail. We do not sell travel; we curate time, ensuring our clientele experience the absolute pinnacle of global luxury without friction.
              </p>
              <p>
                We hire for discretion, taste, and relentless operational excellence. In return, we offer a culture that demands the best, compensates accordingly, and provides unparalleled access to the world's finest experiences.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="aspect-[4/3] w-full relative overflow-hidden bg-stone-900 border border-stone-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2940&auto=format&fit=crop" 
              alt="Lumiere Team Excellence" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </section>

        {/* Open Positions */}
        <section className="flex flex-col gap-16 max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="font-serif text-3xl text-stone-100 font-light">Current Opportunities</h3>
            <p className="text-stone-500 font-light text-sm tracking-wide">For those who accept nothing less than perfection.</p>
          </div>

          <div className="flex flex-col border-t border-stone-800">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link 
                  href={`mailto:careers@lumiere.com?subject=Application: ${position.title}`}
                  className="cursor-magnetic group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-10 border-b border-stone-800 hover:bg-stone-900/50 transition-colors px-6 -mx-6"
                >
                  <div className="flex flex-col gap-3">
                    <h4 className="font-serif text-2xl text-stone-200 group-hover:text-amber-500 transition-colors duration-300">
                      {position.title}
                    </h4>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                      <span>{position.location}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-700" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                      Apply Now
                    </span>
                    <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 group-hover:border-amber-500 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-all duration-300 shrink-0">
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-stone-500 text-sm font-light italic">
              Don't see a precise fit? We continually seek exceptional talent. Forward your dossier to <a href="mailto:careers@lumiere.com" className="cursor-magnetic text-amber-500 hover:text-amber-400 not-italic transition-colors">careers@lumiere.com</a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}