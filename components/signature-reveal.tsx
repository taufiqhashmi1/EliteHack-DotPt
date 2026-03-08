// components/signature-reveal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SignatureReveal() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("lumiere_intro_played");

    if (hasPlayed) {
      setShowAnimation(false);
      setIsChecking(false);
    } else {
      setShowAnimation(true);
      setIsChecking(false);
      sessionStorage.setItem("lumiere_intro_played", "true");

      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Do not render anything if the check is complete and animation shouldn't play
  if (!showAnimation && !isChecking) return null;

  return (
    <AnimatePresence>
      {(showAnimation || isChecking) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 text-amber-500 pointer-events-none"
        >
          {/* Only play animations after the check is complete to avoid jank */}
          {!isChecking && (
            <>
              {/* Luxury Emblem / Compass Star */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-32 h-32 mb-8 drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]"
              >
                <motion.path
                  d="M50 5 L53 47 L95 50 L53 53 L50 95 L47 53 L5 50 L47 47 Z"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                />
                {/* Inner Diamond */}
                <motion.path
                  d="M50 25 L60 50 L50 75 L40 50 Z"
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.2, 0.8] }}
                  transition={{
                    delay: 2,
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                />
              </motion.svg>

              {/* Typography Reveal */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.2,
                    ease: [0.7, 0, 0.3, 1],
                  }}
                  className="font-serif text-5xl tracking-[0.3em] uppercase text-stone-100 relative"
                >
                  Lumière
                  {/* Shimmer Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      delay: 2.5,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mix-blend-overlay"
                  />
                </motion.h1>
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="mt-6 text-[10px] uppercase tracking-[0.4em] text-stone-500 font-light"
              >
                Curating Excellence
              </motion.span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}