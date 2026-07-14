import { MapPin, GraduationCap, LayoutGrid, TrendingUp, Wallet, Ruler, ShieldAlert } from "lucide-react";
import SlideShell from "@/components/tour/SlideShell";

const PROCESS = [
  "Australia-wide Network", "Tech-driven Platform", "Industry Partners", "Local Agent Network",
  "On & Off Market", "Exclusive Opportunities", "Property Shortlist",
];

const ASSESS = [
  { icon: MapPin, label: "Location" },
  { icon: GraduationCap, label: "School Zone" },
  { icon: LayoutGrid, label: "iHome Layout" },
  { icon: TrendingUp, label: "Future Growth" },
  { icon: Wallet, label: "Budget" },
  { icon: Ruler, label: "Land Size" },
  { icon: ShieldAlert, label: "Risk Assessment" },
];

export default function Slide03() {
  return (
    <SlideShell
      number="03"
      label="SMARTER SEARCH"
      footer={
        <p className="text-sm text-white/50">
          Our technology expands opportunities.{" "}
          <span className="font-serif-display italic text-white/90">Our experience narrows them.</span>
        </p>
      }
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white text-center mb-10">
        Smarter Search, Seamless Living.
      </h2>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20 max-w-4xl mx-auto w-full">
        <div>
          <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-5">OUR PROCESS</h3>
          <ul className="space-y-3">
            {PROCESS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm md:text-base text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-5">WHAT WE ASSESS</h3>
          <div className="grid grid-cols-2 gap-3">
            {ASSESS.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="flex items-center gap-2.5 bg-navy-surface/70 border border-white/10 rounded-md px-3 py-2.5">
                  <Icon className="h-4 w-4 text-gold shrink-0" />
                  <span className="text-xs md:text-sm text-white/80">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}