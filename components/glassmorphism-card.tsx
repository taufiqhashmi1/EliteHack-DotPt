// components/glassmorphism-card.tsx
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface GlassmorphismCardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

export function GlassmorphismCard({ title, value, subtitle }: GlassmorphismCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="cursor-magnetic group relative w-full overflow-hidden bg-stone-900 border border-stone-800 p-8 transition-colors hover:border-stone-700"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(217, 119, 6, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col gap-2">
        <span className="text-stone-400 tracking-wide text-sm">{title}</span>
        <span className="font-serif text-4xl text-amber-500 font-light">{value}</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 mt-2">{subtitle}</span>
      </div>
    </div>
  );
}