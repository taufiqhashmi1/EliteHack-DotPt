"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

export function DashboardNavbar({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="w-full flex justify-center fixed top-0 z-50 bg-stone-950 border-b border-stone-800 transition-all duration-500">
      <nav className="w-full max-w-7xl flex justify-between items-center px-6 py-4 text-sm">
        <div className="flex items-baseline gap-4">
          <a
            href="/"
            onClick={handleLogoClick}
            className="cursor-magnetic font-serif text-xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
          >
            Lumière
          </a>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hidden sm:block">
            Private Portal
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Suspense fallback={<div className="h-8 w-20 bg-stone-900 animate-pulse rounded"></div>}>
            {children}
          </Suspense>
        </div>
      </nav>
    </header>
  );
}