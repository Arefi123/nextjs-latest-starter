"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AppleIcon,
  GoogleIcon,
  MetaIcon,
} from "@/components/icons/social-media-icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createRegisterSchema,
  type RegisterFormData,
} from "@/features/dashboard/auth/register";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { Link } from "@/i18n/navigation";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("auth");
  const tValidation = useTranslations("validation");
  const registerSchema = createRegisterSchema(tValidation);
  const isRTL = useIsRTL();
  const termsId = useId();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      // TODO: Implement actual registration logic here
      console.log("Registration data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful registration
      // router.push("/dashboard")
    } catch (error) {
      console.error("Registration error:", error);
      setError("root", {
        type: "manual",
        message: t("registrationFailed"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">{t("createAccountTitle")}</h1>
            <p className="text-muted-foreground text-balance">
              {t("createAccountSubtitle")}
            </p>
          </div>

          {/* Root error message */}
          {errors.root && (
            <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md border border-destructive/20">
              {errors.root.message}
            </div>
          )}

          <div
            className={`grid gap-3 ${
              isRTL ? "grid-cols-2-reverse" : "grid-cols-2"
            }`}
          >
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("firstName")}</FormLabel>
                    <FormControl>
                      <Input
                        id={"firstName"}
                        type="text"
                        placeholder="John"
                        {...field}
                        disabled={isSubmitting || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("lastName")}</FormLabel>
                    <FormControl>
                      <Input
                        id={"lastName"}
                        type="text"
                        placeholder="John"
                        {...field}
                        disabled={isSubmitting || isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      id={"email"}
                      type="email"
                      placeholder="John"
                      {...field}
                      disabled={isSubmitting || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <Input
                      id={"password"}
                      type="password"
                      placeholder="John"
                      {...field}
                      disabled={isSubmitting || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirmPassword")}</FormLabel>
                  <FormControl>
                    <Input
                      id={"confirmPassword"}
                      type="text"
                      placeholder="John"
                      {...field}
                      disabled={isSubmitting || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={`flex items-center ${
              isRTL ? "space-x-reverse" : "space-x-2"
            }`}
          >
            <Checkbox
              id={termsId}
              {...register("terms")}
              disabled={isSubmitting || isLoading}
            />
            <Label
              htmlFor={termsId}
              className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex"
            >
              {t("termsAgreement")}{" "}
              <Link
                href="/auth/terms-of-service"
                className="underline underline-offset-4 hover:text-primary"
              >
                {t("termsOfService")}
              </Link>{" "}
              {t("and")}{" "}
              <Link
                href="/auth/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                {t("privacyPolicy")}
              </Link>
            </Label>
          </div>
          {errors.terms && (
            <p className="text-destructive text-sm">{errors.terms.message}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading
              ? t("creatingAccount")
              : t("createAccountButton")}
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              {t("orContinueWith")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              <AppleIcon className="h-5 w-5" />
              <span className="sr-only">Register with Apple</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              <GoogleIcon className="h-5 w-5" />
              <span className="sr-only">Register with Google</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              <MetaIcon className="h-5 w-5" />
              <span className="sr-only">Register with Meta</span>
            </Button>
          </div>

          <div className="text-center text-sm">
            {t("alreadyHaveAccount")}{" "}
            <Link href="/auth/sign-in" className="underline underline-offset-4">
              {t("signin")}
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
