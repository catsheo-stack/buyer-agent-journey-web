import { FileText, Gavel, Layers, ShieldCheck, Building2, Search, Ruler, ArrowDownToLine, Hammer, TrendingUp, DollarSign, Coins, Wrench, Calculator } from "lucide-react";
import SlideShell from "@/components/tour/SlideShell";

const KITCHEN = "https://media.base44.com/images/public/6a56259fa06c0c6a7c03cea8/3032f6c3b_generated_dd66fe18.png";

const LEGAL = [
  { icon: FileText, label: "Section 32" },
  { icon: Gavel, label: "Planning Overlays" },
  { icon: Layers, label: "Easements" },
  { icon: ShieldCheck, label: "Covenants" },
  { icon: Building2, label: "Council Requisitions" },
];
const PROPERTY = [
  { icon: Search, label: "Building Defects" },
  { icon: Ruler, label: "Scope" },
  { icon: ArrowDownToLine, label: "Drainage" },
  { icon: Hammer, label: "Renovation Potential" },
  { icon: TrendingUp, label: "Future Development" },
];
const FINANCIAL = [
  { icon: DollarSign, label: "Owner's Corporation" },
  { icon: Coins, label: "Special Levies" },
  { icon: Wrench, label: "Holding Costs" },
  { icon: Calculator, label: "Renovation Costs" },
];

function ItemList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <li key={it.label} className="flex items-center gap-2.5 text-sm text-white/80">
            <Icon className="h-4 w-4 text-gold shrink-0" /> {it.label}
          </li>
        );
      })}
    </ul>
  );
}

export default function Slide05() {
  return (
    <SlideShell
      number="05"
      label="DUE DILIGENCE"
      footer={
        <div>
          <p className="font-serif-display italic text-base text-white/85">Buying well isn't just about today's price.</p>
          <p className="font-serif-display text-base text-gold mt-1">It's understanding tomorrow's costs.</p>
          <p className="text-xs text-white/45 mt-2">This is where experience protects your biggest purchase.</p>
        </div>
      }
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
        When the search ends,<br />
        <span className="text-gold">the strategy begins.</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-4">LEGAL</h3>
            <ItemList items={LEGAL} />
          </div>
          <div>
            <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-4">PROPERTY</h3>
            <ItemList items={PROPERTY} />
          </div>
          <div className="sm:col-span-2">
            <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-4">FINANCIAL</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ItemList items={FINANCIAL.slice(0, 2)} />
              <ItemList items={FINANCIAL.slice(2)} />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <div className="rounded-lg overflow-hidden border border-gold/30 p-1.5">
            <img src={KITCHEN} alt="Modern luxury kitchen" className="h-48 w-full object-cover rounded" />
          </div>
          <span className="mt-4 bg-white text-navy text-[10px] tracking-luxe font-semibold px-5 py-2 rounded">PROPERTY</span>
        </div>
      </div>
    </SlideShell>
  );
}