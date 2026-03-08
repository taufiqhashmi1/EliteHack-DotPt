// app/page.tsx
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-950 text-stone-50 selection:bg-amber-700 selection:text-white">
      {/* Navigation */}
      <nav className="w-full flex justify-center fixed top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 transition-all duration-500">
        <div className="w-full max-w-7xl flex justify-between items-center p-6 text-sm">
          <Link
            href={"/"}
            className="font-serif text-2xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
          >
            Lumière
          </Link>
          <div className="flex items-center gap-6">
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 w-full flex flex-col justify-center items-center relative pt-32 pb-20 px-5 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-900/80 to-stone-950 z-10" />
          <div
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-105"
            style={{ transition: "transform 10s ease-out" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center text-center gap-8 translate-y-0 opacity-100 transition-all duration-1000 ease-out">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Bespoke Travel Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight">
            Curate Your <br />{" "}
            <span className="italic text-amber-500">Luxurious</span> Journey
          </h1>
          <p className="text-stone-300 max-w-2xl text-lg font-light leading-relaxed">
            Elevate your travels with meticulously crafted itineraries, exclusive
            access, and uncompromising elegance.
          </p>

          <Link
            href="/protected"
            className="mt-8 px-10 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium tracking-wide uppercase text-sm transition-all duration-500 ease-out hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
          >
            Begin Planning
          </Link>
        </div>
      </div>
    </main>
  );
}