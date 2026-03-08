// app/page.tsx
import { SignatureReveal } from "@/components/signature-reveal";
import { HeroParallax } from "@/components/hero-parallax";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-950 text-stone-50 selection:bg-amber-700 selection:text-white">
      <SignatureReveal />     
      <HeroParallax />
    </main>
  );
}