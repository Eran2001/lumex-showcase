const COLS = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Press"] },
  { title: "Resources", links: ["Docs", "API", "Guides", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
];

export const Footer = () => (
  <footer className="border-t py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
      <div className="col-span-2 md:col-span-1">
        <div className="text-xl font-bold">Lumex</div>
        <p className="mt-2 text-sm text-muted-foreground">Data analytics, illuminated.</p>
      </div>
      {COLS.map((c) => (
        <div key={c.title}>
          <div className="font-semibold mb-3 text-sm">{c.title}</div>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l}>
                <a
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  href="#"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-6xl mx-auto px-6 mt-12 text-xs text-muted-foreground">
      © {new Date().getFullYear()} Lumex Inc.
    </div>
  </footer>
);
