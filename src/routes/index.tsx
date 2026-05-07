import { createFileRoute } from "@tanstack/react-router";
import { ProgressBar } from "@/components/sections/ProgressBar";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Features } from "@/components/sections/Features";
import { HorizontalSteps } from "@/components/sections/HorizontalSteps";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lumex — Data analytics, illuminated" },
      { name: "description", content: "Lumex turns billions of events into instantly queryable insight, with sub-second queries and live dashboards." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <ProgressBar />
      <Hero />
      <Logos />
      <Features />
      <HorizontalSteps />
      <Stats />
      <Testimonials />
      <Pricing />
      <CtaBanner />
      <Footer />
    </main>
  );
}
