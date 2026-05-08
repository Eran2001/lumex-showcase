import { AnimatedCursor } from "@/components/AnimatedCursor";
import { ProgressBar } from "@/components/sections/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Logos } from "@/components/sections/Logos";
import { Features } from "@/components/sections/Features";
import { Integrations } from "@/components/sections/Integrations";
import { HorizontalSteps } from "@/components/sections/HorizontalSteps";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <>
      <AnimatedCursor />
    <main className="bg-background text-foreground">
      <ProgressBar />
      <Hero />
      <DashboardPreview />
      <Logos />
      <Features />
      <Integrations />
      <HorizontalSteps />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
    </>
  );
}
