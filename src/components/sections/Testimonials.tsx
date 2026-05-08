import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  { q: "Lumex replaced three tools and a quarterly contractor. Our dashboards are now actually current.", a: "Mira Chen",     r: "VP Data, Northwind" },
  { q: "We shipped our customer-facing analytics in two weeks. Performance is genuinely absurd.",        a: "Diego Alvarez", r: "Engineering Lead, Helios" },
  { q: "The semantic layer alone paid for itself. Finance and product finally agree on numbers.",         a: "Priya Nair",    r: "Head of Analytics, Volta" },
];

export const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".testimonials-heading", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".testimonials-heading", start: "top 85%" },
    });

    gsap.from(".testimonial-card", {
      rotateY: 45,
      x: 80,
      y: 50,
      opacity: 0,
      scale: 0.85,
      duration: 1,
      stagger: 0.18,
      ease: "power4.out",
      scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-28">
      <div className="max-w-6xl mx-auto px-6" style={{ perspective: "1200px" }}>
        <div className="testimonials-heading max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Loved by data teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.a} className="testimonial-card">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed">&ldquo;{t.q}&rdquo;</p>
                <div className="mt-6">
                  <div className="font-semibold">{t.a}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
