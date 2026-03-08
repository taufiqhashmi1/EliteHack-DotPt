import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Lumière | Bespoke Luxury Travel & Itinerary Planner",
    template: "%s | Lumière Travel",
  },
  description:
    "Curate your luxurious journey with Lumière. Exclusive access, meticulously tailored itineraries, and uncompromising elegance for the discerning global traveler.",
  keywords: [
    "luxury travel",
    "trip planner",
    "bespoke itineraries",
    "exclusive travel",
    "vacation planner",
    "private concierge",
    "luxury vacations",
  ],
  authors: [{ name: "Lumière Concierge" }],
  creator: "Lumière Travel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Lumière | Bespoke Luxury Travel Planning",
    description:
      "Curate your luxurious journey with Lumière. Exclusive access, tailored itineraries, and uncompromising elegance.",
    siteName: "Lumière Travel",
    images: [
      {
        url: "/og-image.jpg", // Ensure you add an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: "Lumière Luxury Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière | Bespoke Luxury Travel Planning",
    description:
      "Curate your luxurious journey with Lumière. Exclusive access, tailored itineraries, and uncompromising elegance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-stone-950 text-stone-50 antialiased selection:bg-amber-700 selection:text-white min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Global Elegant Navbar */}
          <header className="w-full flex justify-center sticky top-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 transition-all duration-500">
            <nav className="w-full max-w-7xl flex justify-between items-center px-6 py-5 text-sm">
              <Link
                href="/"
                className="font-serif text-2xl tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors duration-500 uppercase"
              >
                Lumière
              </Link>
              
              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6">
                  <Link href="/destinations" className="uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
                    Destinations
                  </Link>
                  <Link href="/itineraries" className="uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
                    Itineraries
                  </Link>
                  <Link href="/concierge" className="uppercase tracking-[0.15em] text-xs text-stone-300 hover:text-amber-500 transition-colors duration-300">
                    Concierge
                  </Link>
                </div>

                <div className="h-4 w-px bg-stone-800 hidden md:block"></div>

                {!hasEnvVars ? (
                  <EnvVarWarning />
                ) : (
                  <Suspense fallback={<div className="h-8 w-20 bg-stone-900 animate-pulse rounded"></div>}>
                    <AuthButton />
                  </Suspense>
                )}
              </div>
            </nav>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>

          {/* Global Luxurious Footer */}
          <footer className="w-full border-t border-stone-800 bg-stone-950 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-start gap-16">
              
              <div className="flex flex-col gap-6 max-w-md">
                <Link href="/" className="font-serif text-3xl tracking-[0.2em] text-amber-500 uppercase">
                  Lumière
                </Link>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  Redefining the art of travel. We curate bespoke journeys, providing exclusive access and uncompromising elegance for the discerning explorer.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm w-full lg:w-auto">
                <div className="flex flex-col gap-5">
                  <span className="uppercase tracking-[0.2em] text-xs text-stone-100 font-semibold mb-1">Portfolio</span>
                  <Link href="/destinations" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Global Destinations</Link>
                  <Link href="/villas" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Private Estates</Link>
                  <Link href="/yachts" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Yacht Charters</Link>
                  <Link href="/jets" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Aviation</Link>
                </div>
                
                <div className="flex flex-col gap-5">
                  <span className="uppercase tracking-[0.2em] text-xs text-stone-100 font-semibold mb-1">Maison</span>
                  <Link href="/about" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Our Heritage</Link>
                  <Link href="/journal" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">The Journal</Link>
                  <Link href="/press" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Press</Link>
                  <Link href="/careers" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Careers</Link>
                </div>

                <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                  <span className="uppercase tracking-[0.2em] text-xs text-stone-100 font-semibold mb-1">Connect</span>
                  <Link href="/contact" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">Contact Concierge</Link>
                  <a href="mailto:inquiries@lumiere.com" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">inquiries@lumiere.com</a>
                  <p className="text-stone-400 mt-2 font-serif italic">+1 (800) 555-LUXE</p>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-stone-900 py-8 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto text-stone-500 text-xs tracking-[0.1em] uppercase">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p>© 2026 Lumière Travel.</p>
                <div className="flex gap-4">
                  <Link href="/privacy" className="hover:text-amber-500 transition-colors duration-300">Privacy</Link>
                  <Link href="/terms" className="hover:text-amber-500 transition-colors duration-300">Terms</Link>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <ThemeSwitcher />
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}