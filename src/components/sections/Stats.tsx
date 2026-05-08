import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const STATS = [
  { v: "10M+", l: "Active users" },
  { v: "99.9%", l: "Uptime SLA" },
  { v: "$2B", l: "Processed daily" },
  { v: "180", l: "Countries served" },
];

export const Stats = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        y: 100,
        opacity: 0,
        scale: 0.4,
        rotation: -8,
        duration: 1,
        stagger: 0.18,
        ease: "elastic.out(1, 0.55)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="section-perf py-32 bg-zinc-950 text-white"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {STATS.map((s) => (
          <div key={s.l} className="stat-item">
            <div className="text-5xl md:text-6xl font-bold tracking-tight">{s.v}</div>
            <div className="mt-3 text-sm uppercase tracking-widest text-zinc-400">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
