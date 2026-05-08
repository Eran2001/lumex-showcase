import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const COLORED_GRID = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M40 0H0v40' fill='none' stroke='%237c3aed' stroke-width='1.5'/></svg>")`;

const FLOAT_CONFIGS = [
  { y: "-=22", x: "+=10", duration: 7.0 },
  { y: "-=28", x: "-=12", duration: 8.5 },
  { y: "+=18", x: "+=8",  duration: 6.5 },
];

export const Hero = () => {
  const ref      = useRef<HTMLElement>(null);
  const spotRef  = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // content entrance
    gsap.from(".hero-el", {
      y: 50, opacity: 0, duration: 1, stagger: 0.16, ease: "power3.out",
    });

    // spotlight hover
    const section = ref.current!;
    const spot    = spotRef.current!;

    const onMove  = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
      spot.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onEnter = () => gsap.to(spot, { opacity: 1, duration: 0.5, ease: "power2.out" });
    const onLeave = () => gsap.to(spot, { opacity: 0, duration: 0.6, ease: "power2.out" });

    section.addEventListener("mousemove",  onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    // blob entrance from center → natural position → float
    const sr = section.getBoundingClientRect();
    const cx = sr.width  / 2;
    const cy = sr.height / 2;

    [blob1Ref, blob2Ref, blob3Ref].forEach((blobRef, i) => {
      const el = blobRef.current!;
      const br = el.getBoundingClientRect();
      const bx = br.left - sr.left + br.width  / 2;
      const by = br.top  - sr.top  + br.height / 2;

      // place at center immediately, then animate to natural corner
      gsap.fromTo(
        el,
        { x: cx - bx, y: cy - by, scale: 0.4, opacity: 0 },
        {
          x: 0, y: 0, scale: 1, opacity: 1,
          duration: 2.4,
          delay: 0.1 + i * 0.22,
          ease: "power2.out",
          onComplete() {
            const { x, y, duration } = FLOAT_CONFIGS[i];
            gsap.to(el, { x, y, duration, repeat: -1, yoyo: true, ease: "sine.inOut" });
          },
        },
      );
    });

    return () => {
      section.removeEventListener("mousemove",  onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="section-perf relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
    >
      {/* spotlight colored grid */}
      <div
        ref={spotRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          backgroundImage: COLORED_GRID,
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(circle 220px at var(--mx, -999px) var(--my, -999px), black 20%, transparent 100%)",
          maskImage:       "radial-gradient(circle 220px at var(--mx, -999px) var(--my, -999px), black 20%, transparent 100%)",
        }}
      />

      <div ref={blob1Ref} aria-hidden className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div ref={blob2Ref} aria-hidden className="absolute top-40 right-0 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
      <div ref={blob3Ref} aria-hidden className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <Badge className="hero-el mb-6" variant="secondary">New · Real-time pipelines</Badge>
        <h1 className="hero-el text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Data analytics, <span className="text-primary">illuminated</span>.
        </h1>
        <p className="hero-el mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Lumex turns billions of events into instantly queryable insight — without the warehouse tax.
        </p>
        <div className="hero-el mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Start free trial</Button>
          <Button size="lg" variant="outline">Book a demo</Button>
        </div>
      </div>
    </section>
  );
};
