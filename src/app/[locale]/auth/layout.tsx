import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import AuthHeader from "@/features/dashboard/auth/components/auth-header";
import { Link } from "@/i18n/navigation";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("auth");
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center relative p-6 md:p-10">
      <AuthHeader />
      <div className="w-full md:max-w-4xl relative">
        <div className={"flex flex-col gap-6"}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              {children}

              <div className="bg-muted relative hidden md:block">
                <Image
                  src="/assets/images/login-bg.jpg"
                  alt="Decorative background"
                  fill
                  className="object-cover dark:brightness-[0.2] dark:grayscale"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CardContent>
          </Card>

          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            {t("byClickingContinue")}{" "}
            <Link
              href="/auth/terms-of-service"
              className="underline underline-offset-4"
            >
              {t("termsOfService")}{" "}
            </Link>
            {t("and")}
            <Link
              href="/auth/privacy-policy"
              className="underline underline-offset-4"
            >
              {t("privacyPolicy")}
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
