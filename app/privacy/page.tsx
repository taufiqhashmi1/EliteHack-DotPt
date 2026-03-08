// app/privacy/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans selection:bg-amber-700 selection:text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="cursor-magnetic inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-500 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Return to Maison
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-100 mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-16">
          Last Updated: March 2026
        </p>

        <div className="space-y-12 text-stone-400 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">1. Information We Collect</h2>
            <p>
              Lumière operates on a principle of digital minimalism and strict privacy. We only collect the data absolutely necessary to curate your bespoke experiences:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-stone-400">
              <li><strong>Authentication Data:</strong> Your email address, used exclusively for account creation and secure login.</li>
              <li><strong>Curation Data:</strong> Travel preferences, desired destinations, and itinerary notes you explicitly provide to our platform or concierge.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">2. How We Use Your Information</h2>
            <p>
              Your data is utilized strictly for the provision and enhancement of our services:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-stone-400">
              <li>To maintain your secure access to the private portal.</li>
              <li>To algorithmically and manually curate luxury itineraries tailored to your specific tastes.</li>
              <li>To communicate critical updates regarding your account or impending travel arrangements.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">3. Data Sharing and Disclosure</h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information.</strong> Your data is only shared with trusted infrastructure partners strictly necessary for the platform's operation (e.g., Supabase for secure authentication, Cloudflare for bot protection). When a trip is finalized, relevant preferences are securely communicated to our verified hospitality partners solely for the purpose of fulfilling your booking.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">4. Security Measures</h2>
            <p>
              We implement enterprise-grade security protocols, including end-to-end encryption for authentication and secure database structuring, to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">5. Your Data Rights</h2>
            <p>
              You maintain full sovereignty over your data. You may access, modify, or request the complete deletion of your account and associated travel preferences at any time through your dashboard settings or by contacting our concierge directly at <a href="mailto:privacy@lumiere.com" className="text-amber-500 hover:text-amber-400 transition-colors">privacy@lumiere.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}