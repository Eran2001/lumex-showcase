import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => (
  <section className="section-perf relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
    <div aria-hidden className="parallax-slow absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
    <div aria-hidden className="parallax-fast absolute top-40 right-0 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
    <div aria-hidden className="parallax-slow absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <Badge className="reveal d-1 mb-6" variant="secondary">New · Real-time pipelines</Badge>
      <h1 className="reveal d-1 text-5xl md:text-7xl font-bold tracking-tight text-foreground">
        Data analytics, <span className="text-primary">illuminated</span>.
      </h1>
      <p className="reveal d-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Lumex turns billions of events into instantly queryable insight — without the warehouse tax.
      </p>
      <div className="reveal d-4 mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button size="lg">Start free trial</Button>
        <Button size="lg" variant="outline">Book a demo</Button>
      </div>
    </div>
  </section>
);
