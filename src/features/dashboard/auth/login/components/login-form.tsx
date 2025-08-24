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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createLoginSchema,
  type LoginFormData,
} from "@/features/dashboard/auth/login";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { Link } from "@/i18n/navigation";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("auth");
  const tValidation = useTranslations("validation");
  const loginSchema = createLoginSchema(tValidation);
  const isRTL = useIsRTL();
  const emailId = useId();
  const passwordId = useId();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      // TODO: Implement actual login logic here
      console.log("Login data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful login
      // router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error);
      setError("root", {
        type: "manual",
        message: t("invalidCredentials"),
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
            <h1 className="text-2xl font-bold">{t("welcomeBack")}</h1>
            <p className="text-muted-foreground text-balance">
              {t("loginToAccount")}
            </p>
          </div>

          {/* Root error message */}
          {errors.root && (
            <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md border border-destructive/20">
              {errors.root.message}
            </div>
          )}

          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input
                      id={emailId}
                      type="email"
                      placeholder="m@example.com"
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
            <div className={`flex items-center`} dir={isRTL ? "rtl" : "ltr"}>
              <FormLabel>{t("password")}</FormLabel>
              <Link
                className={`text-sm underline-offset-2 hover:underline ${isRTL ? "mr-auto" : "ml-auto"}`}
                href="/auth/forgot-password"
              >
                {t("forgotPassword")}
              </Link>
            </div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id={passwordId}
                      type="password"
                      placeholder="********"
                      {...field}
                      disabled={isSubmitting || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? t("loggingIn") : t("signin")}
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
              <span className="sr-only">Login with Apple</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              <GoogleIcon className="h-5 w-5" />
              <span className="sr-only">Login with Google</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              <MetaIcon className="h-5 w-5" />
              <span className="sr-only">Login with Meta</span>
            </Button>
          </div>

          <div className="text-center text-sm">
            {t("dontHaveAccount")}{" "}
            <Link href="/auth/sign-up" className="underline underline-offset-4">
              {t("signup")}
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}
