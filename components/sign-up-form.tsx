// components/sign-up-form.tsx
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      setError("You must accept the terms and conditions.");
      return;
    }

    if (!captchaToken) {
      setError("Please complete the security check.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 12 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
          captchaToken,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-md mx-auto", className)} {...props}>
      <Card className="bg-stone-900 border-stone-800 rounded-none shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-700 hover:border-amber-600/30">
        <CardHeader className="space-y-4 pb-8 border-b border-stone-800/50 mb-6">
          <CardTitle className="font-serif text-3xl font-light text-stone-100 tracking-wide text-center">
            Join Lumière
          </CardTitle>
          <CardDescription className="text-stone-400 text-center font-light">
            Register for exclusive travel curation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-950 border-stone-800 text-stone-100 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-300 placeholder:text-stone-700"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-stone-950 border-stone-800 text-stone-100 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-300"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="repeat-password" className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Confirm Password</Label>
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="bg-stone-950 border-stone-800 text-stone-100 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-300"
                />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded-none border-stone-800 bg-stone-950 text-amber-600 focus:ring-amber-500 focus:ring-offset-stone-900 cursor-magnetic transition-colors"
                />
                <Label htmlFor="terms" className="text-xs text-stone-400 font-light leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <Link href="/terms" className="text-amber-500 hover:text-amber-400 transition-colors underline-offset-4 hover:underline">
                    Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-amber-500 hover:text-amber-400 transition-colors underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>.
                </Label>
              </div>

              <div className="flex justify-center my-2">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setCaptchaToken(token)}
                  options={{ theme: "dark" }}
                />
              </div>

              {error && <p className="text-xs text-red-400 tracking-wide text-center bg-red-950/30 py-2 border border-red-900/50">{error}</p>}
              
              <Button 
                type="submit" 
                className="w-full h-14 rounded-none bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium tracking-[0.15em] uppercase text-xs transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] mt-2" 
                disabled={isLoading || !captchaToken || !acceptedTerms}
              >
                {isLoading ? "Registering..." : "Submit Registration"}
              </Button>
            </div>
            <div className="mt-8 text-center text-xs tracking-wide text-stone-500">
              Already a member?{" "}
              <Link href="/auth/login" className="text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest border-b border-amber-500/30 hover:border-amber-400 pb-1 ml-2">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}