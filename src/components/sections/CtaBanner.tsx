import { Button } from "@/components/ui/button";

const HEADLINE = "Ready to see your data in a new light?".split(" ");

export const CtaBanner = () => (
  <section className="section-perf py-32 bg-zinc-950 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
        {HEADLINE.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={`word-reveal d-${(i % 6) + 1} inline-block mr-3`}
          >
            {w}
          </span>
        ))}
      </h2>
      <div className="mt-10">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Start your free trial
        </Button>
      </div>
    </div>
  </section>
);
