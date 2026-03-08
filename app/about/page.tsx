// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Hero */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            The Maison
          </span>
          <StaggeredText 
            text="Our Heritage & Philosophy" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Lumière was founded on a singular premise: true luxury is the absence of friction. We orchestrate travel not as a transaction, but as an art form.
          </motion.p>
        </header>

        {/* Feature Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="aspect-[4/5] w-full relative overflow-hidden bg-stone-900 border border-stone-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" 
              alt="Luxury Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-4xl text-stone-100 font-light">The Architecture of Escapism</h2>
            <div className="space-y-6 text-stone-400 font-light leading-relaxed">
              <p>
                To travel with Lumière is to surrender the burden of logistics. We believe that the modern explorer's most precious commodity is time, and our entire infrastructure is designed to fiercely protect it.
              </p>
              <p>
                We do not aggregate bookings; we design holistic experiences. From the thread count of your linens in a remote Patagonian lodge to the vintage of champagne waiting on the tarmac, every detail is premeditated.
              </p>
            </div>
            <div className="pt-8 border-t border-stone-800 flex flex-col gap-2">
              <span className="text-amber-500 font-serif text-2xl italic">"Excellence is not an act, but a habit."</span>
              <span className="text-stone-500 text-xs tracking-[0.2em] uppercase">— The Curators</span>
            </div>
          </div>
        </section>

        {/* Parallax Quote Break */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative py-32 flex items-center justify-center overflow-hidden border-y border-stone-800"
        >
          <div className="absolute inset-0 bg-stone-900/50" />
          <div 
            className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898460-3e5711681d1b?q=80&w=2938&auto=format&fit=crop')" }}
          />
          <h3 className="relative z-10 font-serif text-4xl md:text-5xl text-stone-200 text-center font-light max-w-4xl px-6 leading-tight">
            Curating the <span className="italic text-amber-500">invisible details</span> so you can experience the extraordinary.
          </h3>
        </motion.section>

        {/* The Network */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-stone-600 font-serif text-5xl opacity-30">01.</span>
            <h4 className="text-stone-200 uppercase tracking-[0.15em] text-xs font-semibold">Global Blackbook</h4>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              We possess a fiercely guarded network of the world's finest hoteliers, private chefs, estate managers, and aviation operators. We open doors that remain closed to the public.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-stone-600 font-serif text-5xl opacity-30">02.</span>
            <h4 className="text-stone-200 uppercase tracking-[0.15em] text-xs font-semibold">Total Discretion</h4>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              Privacy is our cornerstone. We operate with absolute discretion, ensuring that the movements and preferences of our high-profile clientele remain strictly confidential.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-stone-600 font-serif text-5xl opacity-30">03.</span>
            <h4 className="text-stone-200 uppercase tracking-[0.15em] text-xs font-semibold">Algorithmic Precision</h4>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              While our touch is human, our backend is powered by secure, advanced data structuring to remember your exact preferences across every timezone and continent.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}