import type { ReactNode } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import TopBar from "../components/dashboard/TopBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-stone-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopBar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}