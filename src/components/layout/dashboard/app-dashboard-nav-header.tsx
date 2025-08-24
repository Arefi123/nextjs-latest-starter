"use client";

import { Sparkles } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppDashboardNavHeader() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarMenu>
      <SidebarMenuButton
        tooltip="Dashboard"
        className="cursor-pointer group/logo"
        size="lg"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg group-hover/logo:shadow-xl transition-all duration-300 group-hover/logo:scale-105">
          <Sparkles className="w-5 h-5" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg leading-tight text-primary">
              Dashboard
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Admin Panel
            </span>
          </div>
        )}
      </SidebarMenuButton>
    </SidebarMenu>
  );
}
