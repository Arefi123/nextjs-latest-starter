import { z } from "zod";

export const createLoginSchema = (
  t: (key: string, options?: Record<string, number | string>) => string,
) =>
  z.object({
    email: z.email(t("email.invalid")),
    password: z.string().min(6, t("password.min", { min: 6 })),
    rememberMe: z.boolean().optional(),
  });

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
