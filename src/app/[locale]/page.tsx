import { Footer } from "@/components/layout/website/footer";
import { Header } from "@/components/layout/website/header";
import { CTA } from "@/features/website/landing/components/cta";
import { Features } from "@/features/website/landing/components/features";
import { Hero } from "@/features/website/landing/components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
