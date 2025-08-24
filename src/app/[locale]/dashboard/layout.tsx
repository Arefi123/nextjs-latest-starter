import type React from "react";
import { AppDashboardHeader } from "@/components/layout/dashboard/app-dashboard-header";
import { AppDashboardSidebar } from "@/components/layout/dashboard/app-dashboard-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppDashboardSidebar />
      <SidebarInset>
        <AppDashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
