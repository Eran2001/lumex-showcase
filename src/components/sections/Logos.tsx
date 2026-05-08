import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const LOGOS = ["NORTHWIND", "ACME", "HELIOS", "PIXELFORGE", "QUANTA", "VOLTA"];

export const Logos = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".logo-item", {
      y: 30,
      opacity: 0,
      scale: 0.85,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-20 border-y bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10">
          Trusted by data teams at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {LOGOS.map((name) => (
            <div key={name} className="logo-item text-center font-bold tracking-widest text-muted-foreground">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
