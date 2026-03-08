import { DashboardNavbar } from "@/components/dashboard-navbar";
import { AuthButton } from "@/components/auth-button";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-center fixed top-0 z-50 bg-stone-950 border-b border-stone-800 transition-all duration-500">
        <DashboardNavbar>
          <AuthButton />
        </DashboardNavbar>
      </header>
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>
      </div>
    </main>
  );
}
