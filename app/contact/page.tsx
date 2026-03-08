// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { StaggeredText } from "@/components/staggered-text";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "One World Trade Center, Suite 8500",
    phone: "+1 (212) 555-0198",
  },
  {
    city: "Paris",
    address: "Avenue des Champs-Élysées, 75008",
    phone: "+33 1 40 55 50 12",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex, Level 15",
    phone: "+91 22 6600 5555",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-950 pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-xs font-semibold">
            Private Inquiries
          </span>
          <StaggeredText 
            text="Connect with a Curator" 
            className="font-serif text-5xl md:text-7xl font-light text-stone-100 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-stone-400 text-lg font-light leading-relaxed max-w-2xl"
          >
            Whether you require an immediate aviation charter or wish to begin architecting a sabbatical, our advisors are at your disposal globally.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="bg-stone-900 border border-stone-800 p-8 md:p-12"
          >
            <h3 className="font-serif text-3xl text-stone-100 mb-8 font-light">Direct Correspondence</h3>
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 border-b border-stone-800 focus-within:border-amber-500 transition-colors duration-500">
                  <label htmlFor="firstName" className="text-[9px] uppercase tracking-[0.2em] text-stone-500">First Name</label>
                  <input type="text" id="firstName" className="cursor-magnetic bg-transparent border-none outline-none text-stone-200 py-2 focus:ring-0 font-light placeholder:text-stone-700" placeholder="e.g. James" />
                </div>
                <div className="flex flex-col gap-2 border-b border-stone-800 focus-within:border-amber-500 transition-colors duration-500">
                  <label htmlFor="lastName" className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Last Name</label>
                  <input type="text" id="lastName" className="cursor-magnetic bg-transparent border-none outline-none text-stone-200 py-2 focus:ring-0 font-light placeholder:text-stone-700" placeholder="e.g. Bond" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 border-b border-stone-800 focus-within:border-amber-500 transition-colors duration-500">
                <label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Email Address</label>
                <input type="email" id="email" className="cursor-magnetic bg-transparent border-none outline-none text-stone-200 py-2 focus:ring-0 font-light placeholder:text-stone-700" placeholder="james@example.com" />
              </div>

              <div className="flex flex-col gap-2 border-b border-stone-800 focus-within:border-amber-500 transition-colors duration-500">
                <label htmlFor="inquiryType" className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Subject of Inquiry</label>
                <select id="inquiryType" className="cursor-magnetic bg-transparent border-none outline-none text-stone-200 py-2 focus:ring-0 font-light appearance-none">
                  <option className="bg-stone-900 text-stone-300">Bespoke Itinerary Planning</option>
                  <option className="bg-stone-900 text-stone-300">Aviation or Yacht Charter</option>
                  <option className="bg-stone-900 text-stone-300">Villa Procurement</option>
                  <option className="bg-stone-900 text-stone-300">General Concierge Services</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 border-b border-stone-800 focus-within:border-amber-500 transition-colors duration-500">
                <label htmlFor="message" className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Message</label>
                <textarea id="message" rows={4} className="cursor-magnetic bg-transparent border-none outline-none text-stone-200 py-2 focus:ring-0 font-light resize-none placeholder:text-stone-700" placeholder="Detail your requirements here..."></textarea>
              </div>

              <button type="button" className="cursor-magnetic mt-4 flex items-center justify-center gap-4 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] group">
                Transmit Request
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Global Offices */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-3xl text-stone-100 font-light">Global Headquarters</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                Our global footprint ensures that no matter your timezone, a dedicated advisor is available to execute your requests with absolute precision.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {offices.map((office, index) => (
                <div key={index} className="flex gap-6 border-l border-stone-800 pl-6 hover:border-amber-600 transition-colors duration-500">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-2xl text-stone-200 tracking-wide">{office.city}</h4>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="cursor-magnetic flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                        <MapPin size={16} className="text-stone-600" />
                        <span className="font-light">{office.address}</span>
                      </a>
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="cursor-magnetic flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                        <Phone size={16} className="text-stone-600" />
                        <span className="font-light">{office.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-6 border-l border-stone-800 pl-6 hover:border-amber-600 transition-colors duration-500 mt-4">
                <div className="flex flex-col gap-4">
                  <h4 className="font-serif text-xl text-stone-200 tracking-wide">Digital Concierge</h4>
                  <a href="mailto:concierge@lumiere.com" className="cursor-magnetic flex items-center gap-3 text-stone-400 text-sm hover:text-amber-500 transition-colors">
                    <Mail size={16} className="text-stone-600" />
                    <span className="font-light italic">concierge@lumiere.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}