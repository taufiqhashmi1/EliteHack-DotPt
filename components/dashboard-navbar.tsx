import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";

export function DashboardNavbar() {
  return (
    <header className="w-full flex justify-center fixed top-0 z-50 bg-stone-950 border-b border-stone-800 transition-all duration-500">
      <nav className="w-full max-w-7xl flex justify-between items-center px-6 py-4 text-sm">
        <div className="flex items-baseline gap-4">
          <Link
            href="/"
            className="cursor-magnetic font-serif text-xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
          >
            Lumière
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hidden sm:block">
            Private Portal
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Suspense fallback={<div className="h-8 w-20 bg-stone-900 animate-pulse rounded"></div>}>
            {/* AuthButton automatically renders Logout when the user is signed in */}
            <AuthButton /> 
          </Suspense>
        </div>
      </nav>
    </header>
  );
}