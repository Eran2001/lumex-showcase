import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

interface PricingRow {
  feature: string;
  starter: CellValue;
  pro: CellValue;
  enterprise: CellValue;
}

const DATA: PricingRow[] = [
  { feature: "API calls / month", starter: "100K", pro: "10M", enterprise: "Unlimited" },
  { feature: "Team seats", starter: "3", pro: "25", enterprise: "Unlimited" },
  { feature: "Storage", starter: "10 GB", pro: "1 TB", enterprise: "Custom" },
  { feature: "Support", starter: "Community", pro: "Priority", enterprise: "Dedicated CSM" },
  { feature: "Advanced analytics", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
  { feature: "99.99% SLA", starter: false, pro: false, enterprise: true },
  { feature: "Custom domains", starter: false, pro: true, enterprise: true },
];

const renderCell = (v: CellValue) => {
  if (typeof v === "boolean") {
    return v
      ? <Check className="w-5 h-5 text-primary mx-auto" aria-label="Included" />
      : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" aria-label="Not included" />;
  }
  return <span className="text-sm">{v}</span>;
};

const columns: ColumnDef<PricingRow>[] = [
  {
    accessorKey: "feature",
    header: () => <span className="font-semibold">Feature</span>,
    cell: (info) => <span className="font-medium">{info.getValue<string>()}</span>,
  },
  {
    accessorKey: "starter",
    header: () => <div className="text-center">Starter</div>,
    cell: (info) => <div className="text-center">{renderCell(info.getValue<CellValue>())}</div>,
  },
  {
    accessorKey: "pro",
    header: () => <div className="text-center text-primary">Pro</div>,
    cell: (info) => <div className="text-center">{renderCell(info.getValue<CellValue>())}</div>,
  },
  {
    accessorKey: "enterprise",
    header: () => <div className="text-center">Enterprise</div>,
    cell: (info) => <div className="text-center">{renderCell(info.getValue<CellValue>())}</div>,
  },
];

export const Pricing = () => {
  const table = useReactTable({
    data: DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="section-perf py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when your data does.
          </p>
        </div>
        <div className="reveal rounded-xl border bg-card overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/40">
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {hg.headers.map((h) => (
                    <th key={h.id} className="px-6 py-4 text-left text-sm">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`row-reveal border-t d-${(i % 6) + 1}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
