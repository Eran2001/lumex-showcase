import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const STEPS = [
  { n: "01", title: "Connect", desc: "Plug into Postgres, Snowflake, BigQuery or stream events directly via SDK." },
  { n: "02", title: "Model",   desc: "Define metrics once. Lumex generates a semantic layer your whole team can trust." },
  { n: "03", title: "Explore", desc: "Ask questions in natural language or build pixel-perfect dashboards in minutes." },
];

export const HorizontalSteps = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current!;
    const track   = trackRef.current!;

    const getDistance = () => track.scrollWidth - section.offsetWidth;

    gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${getDistance()}`,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".step-card", {
      opacity: 0,
      y: 60,
      scale: 0.88,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-secondary/40 overflow-hidden">
      <div className="h-screen flex items-center relative">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: "300%" }}
        >
          {STEPS.map((s) => (
            <div key={s.n} className="w-1/3 h-full flex items-center justify-center px-12">
              <div className="step-card max-w-xl rounded-2xl border bg-card/90 p-10 shadow-2xl shadow-primary/10">
                <div className="text-8xl font-bold text-primary/30 mb-4">{s.n}</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">{s.title}</h3>
                <p className="text-lg text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground pointer-events-none">
          How it works · scroll →
        </div>
      </div>
    </section>
  );
};
