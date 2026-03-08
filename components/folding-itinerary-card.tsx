// components/folding-itinerary-card.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plane, Building, ChevronDown } from "lucide-react";

export function FoldingItineraryCard() {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full perspective-[2000px]">
      <motion.div
        className="cursor-magnetic bg-stone-900 border border-stone-800 p-6 flex flex-col cursor-pointer transition-colors hover:border-amber-600/50 relative z-10 shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        layout
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500">Upcoming</span>
            <h3 className="font-serif text-2xl text-stone-100">Kyoto, Japan</h3>
            <span className="text-xs text-stone-400 tracking-wider">Oct 12 - Oct 20, 2026</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
          >
            <ChevronDown className="text-stone-500" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ rotateX: -90, opacity: 0, height: 0 }}
            animate={{ rotateX: 0, opacity: 1, height: "auto" }}
            exit={{ rotateX: -90, opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
            className="origin-top overflow-hidden bg-stone-950 border-x border-b border-stone-800/50 shadow-[inset_0_10px_20px_rgba(0,0,0,0.4)]"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              className="p-6 flex flex-col gap-6"
            >
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Plane className="text-amber-500 mt-1" size={18} />
                <div>
                  <p className="text-sm text-stone-200">Flight JL 001 • First Class</p>
                  <p className="text-xs text-stone-500 mt-1">Departs JFK 08:00 AM</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Building className="text-amber-500 mt-1" size={18} />
                <div>
                  <p className="text-sm text-stone-200">Aman Kyoto • Pavillion Suite</p>
                  <p className="text-xs text-stone-500 mt-1">Check-in guaranteed at 14:00</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <MapPin className="text-amber-500 mt-1" size={18} />
                <div>
                  <p className="text-sm text-stone-200">Private Tea Ceremony</p>
                  <p className="text-xs text-stone-500 mt-1">Concierge note: Dietary preferences noted.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}