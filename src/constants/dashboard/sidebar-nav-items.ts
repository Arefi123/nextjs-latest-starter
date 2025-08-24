import {
  BarChart3,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Lock,
  Settings,
  Users,
} from "lucide-react";
import type * as React from "react";

export interface SidebarNavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  items?: {
    title: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export const sidebarNavItems = [
  {
    title: "dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "authentication",
    href: "#",
    icon: Lock,
    items: [
      {
        title: "signin",
        href: "/auth/sign-in",
        icon: Lock,
      },
      {
        title: "signup",
        href: "/auth/sign-up",
        icon: Lock,
      },
    ],
  },
  {
    title: "analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
    items: [
      {
        title: "analytics1",
        href: "/dashboard/analytics/1",
        icon: BarChart3,
      },
      {
        title: "analytics2",
        href: "/dashboard/analytics/2",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "transactions",
    href: "/dashboard/transactions",
    icon: CreditCard,
  },
  {
    title: "reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
];
