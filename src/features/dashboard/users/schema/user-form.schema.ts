import { z } from "zod";

export const createUserFormSchema = (
  t: (key: string, options?: Record<string, number | string>) => string,
) =>
  z.object({
    name: z
      .string()
      .min(1, t("required"))
      .min(3, t("minLength", { min: 3 })),
    bannerImage: z.url(t("required")).optional().or(z.literal("")),
    siteUrl: z.url(t("url")).optional().or(z.literal("")),
    timezone: z.string().optional(),
  });

export type UserFormData = z.infer<ReturnType<typeof createUserFormSchema>>;
