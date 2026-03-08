// app/journal/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Renaissance of Slow Travel in the Swiss Alps",
    category: "Editorial",
    date: "March 2026",
    excerpt: "Trading the helicopter drop for the Glacier Express. Why the most discerning travelers are rediscovering the luxury of time.",
    image: "https://images.unsplash.com/photo-1531366936337-7785a0ce5652?q=80&w=2940&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Omakase Hidden in Plain Sight: Tokyo's Best Kept Secrets",
    category: "Culinary",
    date: "February 2026",
    excerpt: "Behind unmarked doors in Ginza lie culinary experiences reserved only for those with the right introduction.",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=2787&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "The Architecture of the Modern Superyacht",
    category: "Design",
    date: "January 2026",
    excerpt: "How naval architects are erasing the boundary between the ocean and the interior living space.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2944&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Conservation & Luxury: The New Safari Paradigm",
    category: "Editorial",
    date: "December 2025",
    excerpt: "Exclusive camps in Botswana are proving that zero-footprint travel can coexist with uncompromising elegance.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2938&auto=format&fit=crop",
    featured: false,
  },
];

export default function JournalPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            The Journal
          </span>
          <StaggeredText 
            text="Dispatches from the Extraordinary" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Curated insights, editorial narratives, and deep dives into the culture, design, and philosophy of high-end global travel.
          </motion.p>
        </header>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.article 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
            className="group cursor-magnetic relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-stone-900 border border-stone-800"
          >
            <motion.div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-2500 ease-luxury group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col gap-6 max-w-4xl">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                <span className="text-amber-500">{featuredArticle.category}</span>
                <span className="w-4 h-px bg-stone-600" />
                <span className="text-stone-400">{featuredArticle.date}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-stone-100 font-light leading-tight drop-shadow-xl group-hover:text-amber-50 transition-colors duration-500">
                {featuredArticle.title}
              </h2>
              <p className="text-stone-300 text-sm md:text-base font-light max-w-2xl leading-relaxed drop-shadow-md">
                {featuredArticle.excerpt}
              </p>
              <Link 
                href="/auth/sign-up" 
                className="mt-4 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-amber-500 hover:text-amber-400 w-max"
              >
                Read the Feature <ArrowRight size={14} />
              </Link>
            </div>
          </motion.article>
        )}

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {regularArticles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.7, 0, 0.3, 1] }}
              className="group cursor-magnetic flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-900 border border-stone-800 transition-colors duration-500 group-hover:border-amber-600/30">
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-2000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]">
                  <span className="text-amber-500">{article.category}</span>
                  <span className="text-stone-500">{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-stone-100 font-light leading-snug group-hover:text-amber-500 transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}