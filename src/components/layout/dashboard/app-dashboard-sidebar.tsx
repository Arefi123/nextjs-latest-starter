"use client";

import type * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarNavItems } from "@/constants/dashboard/sidebar-nav-items";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { NavFooter } from "./app-dashboard-nav-footer";
import { AppDashboardNavHeader } from "./app-dashboard-nav-header";
import { AppDashboardNavMain } from "./app-dashboard-nav-main";

export function AppDashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const isRTL = useIsRTL();
  return (
    <Sidebar collapsible="icon" side={isRTL ? "right" : "left"} {...props}>
      <SidebarHeader>
        <AppDashboardNavHeader />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <AppDashboardNavMain items={sidebarNavItems} />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
