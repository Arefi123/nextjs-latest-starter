"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { SidebarNavItem } from "@/constants/dashboard/sidebar-nav-items";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function AppDashboardNavMain({ items }: { items: SidebarNavItem[] }) {
  const isRTL = useIsRTL();
  const { state, isMobile } = useSidebar();
  const t = useTranslations("navigation");

  return (
    <SidebarMenu>
      {items.map((item) => {
        if (item.items && item.items.length > 0) {
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={false}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  {(() => {
                    // Only show custom tooltip when sidebar is collapsed and not on mobile
                    if (
                      state === "collapsed" &&
                      !isMobile &&
                      item.items &&
                      item.items.length > 0
                    ) {
                      return (
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton className="cursor-pointer py-5 px-3">
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                              <ChevronRight
                                className={`transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                                  isRTL ? "mr-auto" : "ml-auto"
                                }`}
                              />
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent
                            align="center"
                            side="right"
                            className="z-50 p-0"
                          >
                            <SidebarGroup>
                              <SidebarGroupLabel className="text-white dark:text-black">
                                {t(item.title)}
                              </SidebarGroupLabel>
                              <SidebarGroupContent>
                                <SidebarMenuSub
                                  className={cn(
                                    isRTL
                                      ? "!border-r border-l-0 dark:border-r-black"
                                      : "border-l dark:border-l-black",
                                  )}
                                >
                                  {item.items.map((subItem) => (
                                    <SidebarMenuSubButton
                                      className="text-white px-3 dark:text-black dark:hover:bg-black dark:hover:text-white"
                                      asChild
                                      key={subItem.title}
                                    >
                                      <Link href={subItem.href}>
                                        <span>{t(subItem.title)}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  ))}
                                </SidebarMenuSub>
                              </SidebarGroupContent>
                            </SidebarGroup>
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    // Normal behavior when sidebar is expanded
                    return (
                      <SidebarMenuButton
                        className="cursor-pointer py-5 font-medium hover:bg-gray-100"
                        tooltip={t(item.title)}
                      >
                        {item.icon && <item.icon />}
                        <span>{t(item.title)}</span>
                        <ChevronRight
                          className={`transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 ${
                            isRTL ? "mr-auto" : "ml-auto"
                          }`}
                        />
                      </SidebarMenuButton>
                    );
                  })()}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub
                    className={isRTL ? "!border-r border-l-0" : "border-l"}
                  >
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          className="cursor-pointer py-4 font-medium hover:bg-gray-100"
                          asChild
                        >
                          <Link href={subItem.href}>
                            <span>{t(subItem.title)}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        } else {
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="cursor-pointer py-5 font-medium hover:bg-gray-100"
                asChild
                tooltip={item.title}
              >
                <Link href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{t(item.title)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        }
      })}
    </SidebarMenu>
  );
}
