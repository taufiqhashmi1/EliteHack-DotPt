// components/profile-dropdown.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, LayoutDashboard, KeyRound } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./logout-button";

export function ProfileDropdown({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const name = email?.split("@")[0] || "Guest";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-magnetic flex items-center gap-2 text-stone-400 hover:text-amber-500 transition-colors duration-300 group focus:outline-none"
      >
        <UserCircle
          size={20}
          strokeWidth={1.5}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <span className="text-[10px] tracking-[0.2em] uppercase hidden sm:inline-block transition-colors">
          <span className="text-amber-500">{name}</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 10, rotateX: -15 }}
            transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
            className="absolute right-0 mt-6 w-60 origin-top bg-stone-950 border border-stone-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-[100] flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-stone-800/50 bg-stone-900/30">
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 mb-1">Authenticated As</p>
              <p className="text-xs text-stone-300 truncate font-light tracking-wide">{email}</p>
            </div>
            
            <div className="flex flex-col py-2">
              <Link
                href="/protected"
                onClick={() => setIsOpen(false)}
                className="cursor-magnetic flex items-center gap-4 px-5 py-3 text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-amber-500 hover:bg-stone-900 transition-all duration-300"
              >
                <LayoutDashboard size={14} strokeWidth={1.5} />
                Dashboard
              </Link>
              <Link
                href="/auth/update-password"
                onClick={() => setIsOpen(false)}
                className="cursor-magnetic flex items-center gap-4 px-5 py-3 text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-amber-500 hover:bg-stone-900 transition-all duration-300"
              >
                <KeyRound size={14} strokeWidth={1.5} />
                Credentials
              </Link>
            </div>
            
            <div className="border-t border-stone-800/50 p-2">
              <div className="cursor-magnetic w-full [&_button]:w-full [&_button]:flex [&_button]:items-center [&_button]:justify-start [&_button]:gap-4 [&_button]:px-3 [&_button]:py-3 [&_button]:text-xs [&_button]:tracking-[0.1em] [&_button]:uppercase [&_button]:text-red-900 [&_button]:hover:text-red-500 [&_button]:hover:bg-red-950/20 [&_button]:transition-all [&_button]:duration-300 [&_button]:rounded-none [&_button]:border-none [&_button]:shadow-none [&_button]:bg-transparent">
                <LogoutButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}