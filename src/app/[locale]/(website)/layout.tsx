import type React from "react";
import { Footer } from "@/components/layout/website/footer";
import { Header } from "@/components/layout/website/header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
