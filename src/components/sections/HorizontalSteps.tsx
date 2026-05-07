const STEPS = [
  { n: "01", title: "Connect", desc: "Plug into Postgres, Snowflake, BigQuery or stream events directly via SDK." },
  { n: "02", title: "Model", desc: "Define metrics once. Lumex generates a semantic layer your whole team can trust." },
  { n: "03", title: "Explore", desc: "Ask questions in natural language or build pixel-perfect dashboards in minutes." },
];

export const HorizontalSteps = () => (
  <section className="hijack-section relative" style={{ height: "360vh" }}>
    <div className="sticky top-0 h-screen overflow-hidden bg-secondary/40">
      <div className="h-full flex items-center">
        <div className="hijack-track flex h-full" style={{ width: "300%" }}>
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
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground">
        How it works · scroll →
      </div>
    </div>
  </section>
);
