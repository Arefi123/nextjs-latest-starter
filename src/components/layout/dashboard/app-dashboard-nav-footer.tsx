import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { useGoto } from "@/hooks/use-goto";

export function NavFooter() {
  const t = useTranslations("navigation");
  const { goto } = useGoto();

  const handleLogout = () => {
    goto("/auth/sign-in");
  };

  return (
    <SidebarMenu>
      <SidebarMenuButton
        tooltip="Logout"
        className="cursor-pointer py-5 font-medium hover:bg-gray-100"
        onClick={handleLogout}
      >
        <LogOut />
        <span>{t("logout")}</span>
      </SidebarMenuButton>
    </SidebarMenu>
  );
}
