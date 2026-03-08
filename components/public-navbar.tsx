// components/public-navbar.tsx
"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";

export function PublicNavbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname.startsWith("/protected")) {
    return null;
  }
  
  return (
    <header className="w-full flex justify-center fixed top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 transition-all duration-500">
      <nav className="w-full max-w-7xl flex justify-between items-center px-6 py-5 text-sm">
        <Link
          href="/"
          className="cursor-magnetic font-serif text-2xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
        >
          Lumière
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/destinations" className="cursor-magnetic uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
              Destinations
            </Link>
            <Link href="/itineraries" className="cursor-magnetic uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
              Itineraries
            </Link>
            <Link href="/concierge" className="cursor-magnetic uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
              Concierge
            </Link>
          </div>

          <div className="h-4 w-px bg-stone-800 hidden md:block"></div>

          <div className="relative flex items-center">
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense fallback={<div className="h-8 w-20 bg-stone-900 animate-pulse rounded"></div>}>
                {children}
              </Suspense>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}