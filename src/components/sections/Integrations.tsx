import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Badge } from "@/components/ui/badge";
import { Database, Layers, Zap, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  icon: LucideIcon;
  label: string;
  items: string[];
}

const CATEGORIES: Category[] = [
  {
    icon: Database,
    label: "Warehouses",
    items: ["Snowflake", "BigQuery", "Redshift", "Databricks", "ClickHouse"],
  },
  {
    icon: Layers,
    label: "Databases",
    items: ["Postgres", "MySQL", "MongoDB", "Supabase", "PlanetScale"],
  },
  {
    icon: Zap,
    label: "Event streams",
    items: ["Kafka", "Kinesis", "Segment", "Rudderstack", "Firehose"],
  },
  {
    icon: BarChart3,
    label: "BI & Notebooks",
    items: ["Metabase", "Looker", "Hex", "Jupyter", "Tableau"],
  },
];

export const Integrations = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".integrations-heading", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".integrations-heading", start: "top 85%" },
    });

    gsap.from(".integration-card", {
      y: 60,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".integration-card", start: "top 88%" },
    });

    gsap.from(".integrations-footer", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: ".integrations-footer", start: "top 90%" },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="integrations-heading text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Integrations</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Connects to your whole stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One-click connectors to every warehouse, database, and stream you already use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="integration-card rounded-xl border bg-card p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <cat.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold mb-3">{cat.label}</div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="integrations-footer text-center text-sm text-muted-foreground mt-10">
          + 80 more via REST API and custom connectors
        </p>
      </div>
    </section>
  );
};
