import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type React from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { AlertModalProvider } from "@/providers/alert-modal-provider";
import { ApolloWrapper } from "./apollo-wrapper";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider>
      <NuqsAdapter>
        <ApolloWrapper>
          <NextTopLoader color="#000" showSpinner={false} />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AlertModalProvider>{children}</AlertModalProvider>
          </ThemeProvider>
        </ApolloWrapper>
      </NuqsAdapter>
      <Toaster position="top-right" richColors />
    </NextIntlClientProvider>
  );
}
