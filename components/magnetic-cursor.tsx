// components/magnetic-cursor.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring physics for the "heavy" luxury feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // offset by half the width/height (32px / 2)
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractable = Boolean(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-magnetic')
      );

      setIsHovering(isInteractable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(217,119,6,0.1)" : "transparent",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div 
        className="w-1 h-1 bg-amber-500 rounded-full"
        animate={{ opacity: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}