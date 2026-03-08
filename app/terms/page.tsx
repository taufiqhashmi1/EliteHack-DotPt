// app/terms/page.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
          Terms of Service
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-500 mb-16">
          Last Updated: March 2026
        </p>

        <div className="space-y-12 text-stone-400 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Lumière platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our bespoke travel planning services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">2. Description of Service</h2>
            <p>
              Lumière provides an exclusive digital concierge and itinerary management platform for luxury travel. We assist in curating destinations, accommodations, and experiences based on your submitted preferences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">3. User Accounts and Credentials</h2>
            <p>
              To access our private portal, you must register using a valid email address. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">4. Intellectual Property</h2>
            <p>
              All content, design, branding, and underlying architecture of the Lumière platform are the exclusive property of Lumière Travel and are protected by international copyright and trademark laws. Unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">5. Limitation of Liability</h2>
            <p>
              While Lumière meticulously curates itineraries, the actual delivery of travel services (flights, accommodations, tours) is executed by third-party vendors. Lumière is not liable for disruptions, cancellations, injuries, or damages resulting from the actions of these independent entities.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-200 mb-4">6. Modifications to Service</h2>
            <p>
              We reserve the right to withdraw or amend our service, and any service or material we provide on the platform, in our sole discretion without notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}