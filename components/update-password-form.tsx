// components/update-password-form.tsx
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please complete the security check.");
      return;
    }

    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // Note: Supabase updateUser does not strictly require the captcha token payload by default 
      // but the widget ensures bot mitigation at the UI layer.
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      router.push("/protected");
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
            Update Credentials
          </CardTitle>
          <CardDescription className="text-stone-400 text-center font-light">
            Secure your account with a new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdatePassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] text-stone-500">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-stone-950 border-stone-800 text-stone-100 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition-all duration-300 placeholder:text-stone-700"
                />
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
                disabled={isLoading || !captchaToken}
              >
                {isLoading ? "Saving..." : "Confirm Update"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}