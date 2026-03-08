// app/itineraries/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight, Clock, Map, Compass } from "lucide-react";
import Link from "next/link";

const signatureJourneys = [
  {
    id: 1,
    title: "The Alpine Sabbatical",
    region: "Swiss Alps & Northern Italy",
    duration: "14 Days",
    focus: "Skiing, Gastronomy, Wellness",
    description:
      "A seamless transition from the private slopes of St. Moritz to the secluded thermal baths of Lake Como. Includes helicopter transfers, a dedicated Michelin-trained private chef, and exclusive after-hours access to historic chalets.",
    image:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mediterranean Odyssey",
    region: "French Riviera & Amalfi Coast",
    duration: "21 Days",
    focus: "Yachting, Culture, Wine",
    description:
      "Navigate the azure waters aboard a 72m superyacht. Drop anchor in hidden coves, attend private vineyard tastings in Provence, and conclude with a week in a cliffside Amalfi villa fully staffed by our concierge team.",
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Kyoto Ascendancy",
    region: "Kyoto & Japanese Alps",
    duration: "10 Days",
    focus: "Heritage, Zen, Culinary",
    description:
      "An immersive exploration of traditional Japan without the crowds. Features private tea ceremonies with grandmasters, stays in exclusive ryokans unavailable to the public, and a personal historian as your guide.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2832&auto=format&fit=crop",
  },
];

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold flex items-center gap-3">
            <Compass size={14} /> Signature Journeys
          </span>
          <StaggeredText
            text="Masterpieces of Travel"
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Explore our portfolio of pre-architected experiences. These
            itineraries serve as a canvas, ready to be aggressively tailored to
            your exact specifications.
          </motion.p>
        </header>

        {/* Journeys List */}
        <div className="flex flex-col gap-32 relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-800 -translate-x-1/2" />

          {signatureJourneys.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative"
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-stone-950 border border-amber-500 z-10 items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>

              {/* Image Block */}
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden bg-stone-900 border border-stone-800 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2.5s] hover:scale-105"
                  style={{ backgroundImage: `url(${journey.image})` }}
                />
              </div>

              {/* Text Block */}
              <div
                className={`flex flex-col gap-8 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-amber-500 tracking-[0.2em] uppercase text-xs font-semibold">
                    {journey.region}
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-stone-100 font-light leading-tight">
                    {journey.title}
                  </h2>
                </div>

                <div
                  className={`flex gap-6 border-y border-stone-800 py-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-stone-500" />
                    <span className="text-stone-300 text-xs tracking-[0.15em] uppercase">
                      {journey.duration}
                    </span>
                  </div>
                  <div className="w-px h-auto bg-stone-800" />
                  <div className="flex items-center gap-2">
                    <Map size={16} className="text-stone-500" />
                    <span className="text-stone-300 text-xs tracking-[0.15em] uppercase">
                      {journey.focus}
                    </span>
                  </div>
                </div>

                <p className="text-stone-400 font-light leading-relaxed">
                  {journey.description}
                </p>

                <div className={`pt-4 ${index % 2 === 1 ? "lg:self-end" : ""}`}>
                  <Link
                    href="/auth/sign-up"
                    className="cursor-magnetic group flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-amber-500 transition-colors w-max"
                  >
                    <span
                      className={`hidden lg:block w-8 h-px bg-stone-700 group-hover:bg-amber-500 group-hover:w-12 transition-all duration-500 ${index % 2 === 1 ? "order-2" : ""}`}
                    />
                    Customize This Journey
                    <ArrowRight
                      size={16}
                      className={`text-stone-600 group-hover:text-amber-500 transition-transform ${
                        index % 2 === 1
                          ? "order-1 rotate-180 group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
