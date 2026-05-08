import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const STEPS = [
  { n: "01", title: "Connect", desc: "Plug into Postgres, Snowflake, BigQuery or stream events directly via SDK." },
  { n: "02", title: "Model",   desc: "Define metrics once. Lumex generates a semantic layer your whole team can trust." },
  { n: "03", title: "Explore", desc: "Ask questions in natural language or build pixel-perfect dashboards in minutes." },
];

export const HorizontalSteps = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".steps-heading", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".steps-heading", start: "top 85%", toggleActions: "play none none reverse" },
    });

    gsap.from(".steps-line", {
      scaleY: 0,
      duration: 1.4,
      ease: "power2.out",
      transformOrigin: "top center",
      scrollTrigger: { trigger: ".steps-line", start: "top 80%", toggleActions: "play none none reverse" },
    });

    gsap.from(".step-badge", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.22,
      ease: "back.out(2)",
      scrollTrigger: { trigger: ".step-badge", start: "top 82%", toggleActions: "play none none reverse" },
    });

    gsap.from(".step-content", {
      x: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.22,
      ease: "power3.out",
      scrollTrigger: { trigger: ".step-content", start: "top 82%", toggleActions: "play none none reverse" },
    });

  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">

        <div className="steps-heading mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Three steps from raw data to instant insight.</p>
        </div>

        <div className="relative">
          {/* vertical connecting line */}
          <div className="steps-line absolute left-[21px] top-5 bottom-20 w-px bg-border" />

          <div className="flex flex-col">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative flex items-start gap-10 pb-20 last:pb-0">

                {/* circle badge */}
                <div className="step-badge relative z-10 shrink-0 w-11 h-11 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary tabular-nums">{s.n}</span>
                </div>

                {/* text */}
                <div className="step-content flex-1 pt-1.5">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-lg text-muted-foreground max-w-md">{s.desc}</p>
                </div>


              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
