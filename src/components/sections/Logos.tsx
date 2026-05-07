const LOGOS = ["NORTHWIND", "ACME", "HELIOS", "PIXELFORGE", "QUANTA", "VOLTA"];

export const Logos = () => (
  <section className="section-perf py-20 border-y bg-secondary/40">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10">
        Trusted by data teams at
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
        {LOGOS.map((name, i) => (
          <div
            key={name}
            className={`reveal-scale d-${(i % 6) + 1} text-center font-bold tracking-widest text-muted-foreground`}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);
