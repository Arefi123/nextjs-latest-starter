import { useLocale } from "next-intl";

export const useIsRTL = (): boolean => {
  const locale = useLocale();
  return locale.startsWith("fa") || locale.startsWith("ps");
};
