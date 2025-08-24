"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsRTL } from "@/hooks/use-is-rtl";

const languages = [
  { code: "en", name: "English", flagUrl: "/assets/images/flags/gb-eng.svg" },
  { code: "fr", name: "Français", flagUrl: "/assets/images/flags/fr.svg" },
  { code: "fa", name: "فارسی", flagUrl: "/assets/images/flags/ir.svg" },
  { code: "ps", name: "پښتو", flagUrl: "/assets/images/flags/af.svg" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const isRTL = useIsRTL();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath as `/${string}`);
  };

  return (
    <Select
      value={locale}
      onValueChange={handleLanguageChange}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <SelectTrigger className="flex items-center gap-2 cursor-pointer">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="cursor-pointer"
          >
            <Image src={lang.flagUrl} alt={lang.name} width={20} height={20} />
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
