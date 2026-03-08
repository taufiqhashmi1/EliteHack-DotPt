import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-6">
      <span className="text-stone-400 text-[10px] tracking-[0.2em] uppercase hidden sm:inline-block">
        Guest: <span className="text-amber-500">{user.email?.split("@")[0]}</span>
      </span>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex items-center gap-5">
      <Link 
        href="/auth/login"
        className="text-[10px] uppercase tracking-[0.2em] text-stone-300 hover:text-amber-500 transition-colors duration-300"
      >
        Sign In
      </Link>
      <Link 
        href="/auth/sign-up"
        className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium tracking-[0.15em] uppercase text-[10px] transition-all duration-500 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)]"
      >
        Inquire
      </Link>
    </div>
  );
}