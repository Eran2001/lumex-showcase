import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bolt, LineChart, Lock, Workflow } from "lucide-react";

const FEATURES = [
  { icon: Bolt, title: "Sub-second queries", desc: "Vector + columnar engine returns answers in <300ms at any scale." },
  { icon: LineChart, title: "Live dashboards", desc: "Push updates without refresh — stream straight from your warehouse." },
  { icon: Lock, title: "Enterprise security", desc: "SOC 2 Type II, HIPAA, and row-level access controls baked in." },
  { icon: Workflow, title: "Composable pipelines", desc: "Drag-and-drop transforms or bring your own SQL and dbt models." },
];

export const Features = () => (
  <section className="section-perf py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="reveal max-w-2xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Lumex</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A complete analytics stack designed for the speed of modern teams.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <Card key={f.title} className={`reveal d-${(i % 6) + 1}`}>
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription className="mt-2">{f.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
