import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MailCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-stone-950 p-6 md:p-10 selection:bg-amber-700 selection:text-white">
      <div className="w-full max-w-md">
        <Card className="bg-stone-900 border-stone-800 rounded-none shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          <CardHeader className="flex flex-col items-center gap-4 pb-8 border-b border-stone-800/50 mb-6 pt-10">
            <div className="w-16 h-16 rounded-full border border-amber-600/30 flex items-center justify-center text-amber-500 bg-amber-500/5 mb-2">
              <MailCheck strokeWidth={1} size={32} />
            </div>
            <div className="space-y-2 text-center">
              <span className="text-amber-500 tracking-[0.3em] uppercase text-[10px] font-semibold block">
                Verification Required
              </span>
              <CardTitle className="font-serif text-3xl font-light text-stone-100 tracking-wide">
                Request Received
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-8 pb-10 px-8">
            <p className="text-sm text-stone-400 font-light leading-relaxed text-center">
              Your registration for the Lumière portal has been initiated. We have dispatched a secure verification link to your email. Kindly verify your credentials to finalize your access.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/auth/login" 
                className="cursor-magnetic px-8 py-4 border border-stone-800 text-stone-300 hover:border-amber-600 hover:text-amber-500 transition-all duration-500 text-[10px] uppercase tracking-[0.2em]"
              >
                Return to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}