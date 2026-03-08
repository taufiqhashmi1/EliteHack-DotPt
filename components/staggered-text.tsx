"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function StaggeredText({ text, className, delay = 0 }: StaggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap", className)}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="mr-3 overflow-hidden flex">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}