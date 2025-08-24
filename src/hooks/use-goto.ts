"use client";

import { useRouter } from "@/i18n/navigation";

export function useGoto() {
  const router = useRouter();

  const goto = (href: string) => {
    router.prefetch(href);
    router.push(href);
  };

  return {
    goto,
    back: () => router.back(),
  };
}
