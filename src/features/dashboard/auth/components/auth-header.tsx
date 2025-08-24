"use client";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useIsRTL } from "@/hooks/use-is-rtl";

function AuthHeader() {
  const isRTL = useIsRTL();
  return (
    <div
      className={`flex justify-end items-center gap-2 w-full mb-4 absolute top-6 md:top-10 ${isRTL ? "left-6 md:left-10" : "right-6 md:right-10"}`}
    >
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
}

export default AuthHeader;
