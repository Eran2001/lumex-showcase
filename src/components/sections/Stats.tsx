const STATS = [
  { v: "10M+", l: "Active users" },
  { v: "99.9%", l: "Uptime SLA" },
  { v: "$2B", l: "Processed daily" },
  { v: "180", l: "Countries served" },
];

export const Stats = () => (
  <section className="section-perf py-32 bg-zinc-950 text-white" style={{ perspective: "1000px" }}>
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {STATS.map((s, i) => (
        <div key={s.l} className={`reveal-bold d-${(i % 6) + 1}`}>
          <div className="text-5xl md:text-6xl font-bold tracking-tight">{s.v}</div>
          <div className="mt-3 text-sm uppercase tracking-widest text-zinc-400">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);
