// components/hero-parallax.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Layer 1: Background moves the slowest (creating deep distance)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  // Layer 2: Middle decorative element moves at medium speed
  const middleY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Layer 3: Foreground text fades and moves slightly up
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 w-full h-[120%]" // 120% height prevents bottom gap during parallax
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/60 to-stone-950 z-10" />
        <div
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-50"
        />
      </motion.div>

      {/* Middle Decorative Layer */}
      <motion.div
        style={{ y: middleY }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-serif text-[15vw] leading-none text-stone-100/[0.03] tracking-tighter whitespace-nowrap">
          VOYAGE
        </span>
      </motion.div>

      {/* Foreground Content Layer */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-4xl flex flex-col items-center text-center gap-8 px-5 mt-16"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.7, 0, 0.3, 1] }}
          className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold"
        >
          Bespoke Travel Experiences
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.7, 0, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl font-light leading-tight text-stone-100 drop-shadow-2xl"
        >
          Curate Your <br />{" "}
          <span className="italic text-amber-500">Luxurious</span> Journey
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.7, 0, 0.3, 1] }}
          className="text-stone-300 max-w-2xl text-lg font-light leading-relaxed drop-shadow-md"
        >
          Elevate your travels with meticulously crafted itineraries, exclusive
          access, and uncompromising elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.7, 0, 0.3, 1] }}
        >
          <Link
            href="/protected"
            className="mt-8 px-10 py-4 inline-block bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium tracking-[0.15em] uppercase text-xs transition-all duration-500 ease-out shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
          >
            Begin Planning
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Bottom fade out to blend into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-20 pointer-events-none" />
    </div>
  );
}