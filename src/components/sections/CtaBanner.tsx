import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/button";

const WORDS = "Ready to see your data in a new light?".split(" ");

export const CtaBanner = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".cta-word", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });

    gsap.from(".cta-btn", {
      y: 24,
      opacity: 0,
      duration: 0.6,
      delay: 0.35,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-32 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {WORDS.map((w, i) => (
            <span key={`${w}-${i}`} className="cta-word inline-block mr-3">
              {w}
            </span>
          ))}
        </h2>
        <div className="mt-10">
          <Button size="lg" className="cta-btn bg-primary hover:bg-primary/90">
            Start your free trial
          </Button>
        </div>
      </div>
    </section>
  );
};
