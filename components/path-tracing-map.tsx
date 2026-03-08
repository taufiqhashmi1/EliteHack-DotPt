// components/path-tracing-map.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PathTracingMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="relative w-full h-48 bg-stone-950 border border-stone-800 overflow-hidden flex items-center justify-center p-8 cursor-magnetic">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-500 via-stone-900 to-stone-950" />
      
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid meet">
        {/* Background Track */}
        <path
          d="M 20 50 Q 100 10, 200 50 T 380 50"
          fill="transparent"
          stroke="#292524"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        
        {/* Animated Flight Path */}
        <motion.path
          d="M 20 50 Q 100 10, 200 50 T 380 50"
          fill="transparent"
          stroke="#d97706" /* amber-600 */
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Origin Node */}
        <circle cx="20" cy="50" r="4" fill="#d97706" />
        
        {/* Destination Beacon */}
        <motion.circle
          cx="380"
          cy="50"
          r="4"
          fill="#d97706"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 3.5 }}
        />
        <motion.circle
          cx="380"
          cy="50"
          r="12"
          fill="none"
          stroke="#d97706"
          strokeWidth="1"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 2, opacity: 0 } : { scale: 0.5, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 2, delay: 3.5 }}
        />
      </svg>
      
      <div className="absolute bottom-4 left-6 text-[10px] uppercase tracking-[0.2em] text-stone-500">Departure: JFK</div>
      <div className="absolute bottom-4 right-6 text-[10px] uppercase tracking-[0.2em] text-amber-500">Arrival: LHR</div>
    </div>
  );
}