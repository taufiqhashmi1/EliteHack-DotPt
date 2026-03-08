// app/page.tsx
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { SignatureReveal } from "@/components/signature-reveal";
import { HeroParallax } from "@/components/hero-parallax";
import { PublicNavbar } from "@/components/public-navbar";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-950 text-stone-50 selection:bg-amber-700 selection:text-white">
      <SignatureReveal />
      <PublicNavbar />      
      <HeroParallax />
    </main>
  );
}