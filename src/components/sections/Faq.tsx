import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    q: "How does Lumex handle data at scale?",
    a: "Lumex uses a vectorised columnar engine that partitions and caches data at ingest. Queries fan out across distributed workers, so a 10B-row scan finishes in the same 200–300ms as a 1M-row scan.",
  },
  {
    q: "Do I need to move my data into Lumex?",
    a: "No. Lumex connects directly to your existing warehouse, database, or stream via read-only credentials. Your data stays where it is — we query it in place.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on monthly API calls and team seats. Storage is only counted for data you choose to cache inside Lumex for faster repeat queries. There are no egress fees.",
  },
  {
    q: "Is Lumex SOC 2 compliant?",
    a: "Yes. Lumex is SOC 2 Type II and HIPAA certified. All data in transit is encrypted with TLS 1.3 and at rest with AES-256. Row-level access controls let you restrict exactly what each user can query.",
  },
  {
    q: "Can I self-host Lumex?",
    a: "Enterprise customers can deploy Lumex inside their own VPC using our Kubernetes Helm chart. The self-hosted tier ships with the same feature set as our cloud offering.",
  },
  {
    q: "What does the free trial include?",
    a: "The 14-day free trial gives you full Pro tier access — 10M API calls, 25 seats, and 1 TB of storage. No credit card required.",
  },
];

export const Faq = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".faq-heading", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-heading", start: "top 85%", toggleActions: "play none none reverse" },
      });

      gsap.from(".faq-item", {
        x: -40,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".faq-item", start: "top 88%", toggleActions: "play none none reverse" },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="section-perf py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="faq-heading text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently asked</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before you sign up.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="faq-item border rounded-xl px-2"
            >
              <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
