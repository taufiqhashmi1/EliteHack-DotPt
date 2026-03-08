// app/concierge/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import Link from "next/link";

export default function ConciergePage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 text-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto mt-12">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            At Your Service
          </span>
          <StaggeredText 
            text="The Luxury of Absolute Certainty" 
            className="font-serif text-5xl md:text-7xl font-light leading-tight justify-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-stone-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Our dedicated advisors anticipate your needs before they arise, orchestrating every detail of your journey with uncompromising precision and absolute discretion.
          </motion.p>
        </section>

        {/* Feature 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="aspect-[4/5] w-full relative overflow-hidden bg-stone-900"
          >
            <img 
              src="https://www.southernliving.com/thmb/tuK6JmhQQ71v6rjWQtm4YGCn8ys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1448294355-d35782531f054fe89ead4d8b992e79e8.jpg" 
              alt="Concierge Desk" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>
          <div className="flex flex-col gap-6">
            <span className="text-stone-500 font-serif text-6xl opacity-20">01</span>
            <h2 className="font-serif text-4xl text-stone-100 font-light">Bespoke Itinerary Design</h2>
            <p className="text-stone-400 font-light leading-relaxed">
              We do not rely on templates. Every minute of your journey is crafted from scratch based on a deep understanding of your personal aesthetic, culinary preferences, and desired pace.
            </p>
            <div className="h-px w-full bg-stone-800 my-4" />
            <ul className="flex flex-col gap-4 text-sm tracking-wide text-stone-300">
              <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Private access to closed landmarks</li>
              <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Michelin-starred reservations</li>
              <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full" /> Specialized local guides and historians</li>
            </ul>
          </div>
        </section>

        {/* Feature 2 (Reversed) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="text-stone-500 font-serif text-6xl opacity-20">02</span>
            <h2 className="font-serif text-4xl text-stone-100 font-light">24/7 Global Support</h2>
            <p className="text-stone-400 font-light leading-relaxed">
              When you travel with Lumière, a dedicated liaison monitors your journey in real-time. Whether adjusting a flight due to weather or securing a last-minute yacht charter, our network is at your disposal globally, at any hour.
            </p>
            <div className="mt-8">
              <Link 
                href="/auth/sign-up" 
                className="cursor-magnetic inline-block border-b border-amber-600 text-amber-500 pb-1 text-xs uppercase tracking-[0.2em] hover:text-amber-400 transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="aspect-[4/5] w-full relative overflow-hidden bg-stone-900 order-1 md:order-2"
          >
            <img 
              src="https://www.burckhardtcompression.com/fileadmin/_processed_/e/3/csm_employee-phone-24-7-support-mm-2021_1a2cb18135.jpg" 
              alt="Luxury Travel Support" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </section>

      </div>
    </div>
  );
}