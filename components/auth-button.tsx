// components/auth-button.tsx
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ProfileDropdown } from "./profile-dropdown";

export async function AuthButton() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return user ? (
    <div className="relative flex items-center">
      <ProfileDropdown email={user.email ?? ""} />
    </div>
  ) : (
    <div className="flex items-center gap-5">
      <Link 
        href="/auth/login"
        className="cursor-magnetic text-[10px] uppercase tracking-[0.2em] text-stone-300 hover:text-amber-500 transition-colors duration-300"
      >
        Sign In
      </Link>
      <Link 
        href="/auth/sign-up"
        className="cursor-magnetic px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium tracking-[0.15em] uppercase text-[10px] transition-all duration-500 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)]"
      >
        Sign Up
      </Link>
    </div>
  );
}