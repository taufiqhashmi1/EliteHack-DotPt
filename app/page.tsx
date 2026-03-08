// app/page.tsx
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { SignatureReveal } from "@/components/signature-reveal";
import { HeroParallax } from "@/components/hero-parallax";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-950 text-stone-50 selection:bg-amber-700 selection:text-white">
      <SignatureReveal />
      {/* Navigation */}
      <nav className="w-full flex justify-center fixed top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 transition-all duration-500">
        <div className="w-full max-w-7xl flex justify-between items-center p-6 text-sm">
          <Link
            href={"/"}
            className="cursor-magnetic font-serif text-2xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
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

      <HeroParallax />
    </main>
  );
}