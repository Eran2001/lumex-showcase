import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Badge } from "@/components/ui/badge";

const METRICS = [
  { label: "Total Events",     value: "4.2B",   delta: "+12.4%", up: true  },
  { label: "Avg Query Time",   value: "218ms",  delta: "−31ms",  up: false },
  { label: "Active Pipelines", value: "142",    delta: "+8",     up: true  },
  { label: "Monthly Cost",     value: "$3,410", delta: "−18%",   up: false },
];

const BAR_HEIGHTS = [65, 48, 80, 55, 90, 72, 60, 85, 70, 95, 78, 88];

const NAV_ITEMS = ["Overview", "Events", "Pipelines", "Alerts", "Settings"];

export const DashboardPreview = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".dash-heading", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".dash-heading", start: "top 85%" },
    });

    gsap.from(".dash-chrome", {
      y: 80,
      opacity: 0,
      scale: 0.97,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".dash-chrome", start: "top 85%" },
    });

    gsap.from(".metric-card", {
      y: 24,
      opacity: 0,
      scale: 0.93,
      duration: 0.55,
      stagger: 0.1,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: ".metric-card", start: "top 90%" },
    });

    gsap.from(".bar-col", {
      scaleY: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "power2.out",
      transformOrigin: "bottom center",
      scrollTrigger: { trigger: ".bar-col", start: "top 90%" },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="section-perf py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="dash-heading text-center max-w-2xl mx-auto mb-14">
          <Badge variant="secondary" className="mb-4">Product</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your data, finally visible
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One workspace for every metric, pipeline, and question your team has.
          </p>
        </div>

        <div className="dash-chrome rounded-2xl border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
          {/* browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">
              app.lumex.io/dashboard
            </span>
          </div>

          <div className="flex h-[440px]">
            {/* sidebar */}
            <div className="hidden md:flex flex-col w-48 border-r bg-secondary/30 p-4 gap-1 shrink-0">
              {NAV_ITEMS.map((item, i) => (
                <div
                  key={item}
                  className={`text-sm px-3 py-2 rounded-md cursor-default select-none ${
                    i === 0
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* main */}
            <div className="flex-1 p-6 overflow-hidden flex flex-col gap-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {METRICS.map((m) => (
                  <div key={m.label} className="metric-card rounded-lg border bg-background p-3">
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                    <div className="text-xl font-bold mt-1">{m.value}</div>
                    <div className={`text-xs mt-1 font-medium ${m.up ? "text-emerald-500" : "text-primary"}`}>
                      {m.delta}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 rounded-lg border bg-background p-4 flex flex-col min-h-0">
                <div className="text-xs font-medium text-muted-foreground mb-3">
                  Events · last 12 months
                </div>
                <div className="flex-1 flex items-end gap-1.5">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="bar-col flex-1 rounded-t-sm bg-primary/75"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
