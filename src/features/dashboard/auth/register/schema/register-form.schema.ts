import { z } from "zod";

export const createRegisterSchema = (
  t: (key: string, options?: Record<string, number | string>) => string,
) =>
  z
    .object({
      firstName: z.string().min(2, t("firstName.min", { min: 2 })),
      lastName: z.string().min(2, t("lastName.min", { min: 2 })),
      email: z.email(t("email.invalid")),
      password: z.string().min(8, t("password.min", { min: 8 })),
      confirmPassword: z.string(),
      terms: z.boolean().refine((val) => val === true, t("terms.required")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("password.match"),
      path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>;
