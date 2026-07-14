import { Shield, User, Users } from "lucide-react";
import SlideShell from "@/components/tour/SlideShell";

const FLOW = [
  { icon: Shield, title: "Buyer Agent", sub: "Your advocate" },
  { icon: User, title: "Selling Agent", sub: "Their representative" },
  { icon: Users, title: "Vendor", sub: "The seller" },
];
const TERMS = ["Price", "Settlement", "Special Conditions", "Building Issues", "Deposit", "Access", "Timing"];

export default function Slide06() {
  return (
    <SlideShell
      number="06"
      label="NEGOTIATION"
      theme="light"
      footer={<p className="text-sm text-slate-500">We negotiate far more than price.</p>}
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-slate-800 mb-10">
        Negotiate today's price,<br />
        <span className="text-gold">protect tomorrow's value.</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl w-full items-center">
        <div className="flex flex-col items-center gap-3">
          {FLOW.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex flex-col items-center">
                <div className="w-full max-w-[240px] negotiation-light-card rounded-lg px-5 py-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="text-sm text-slate-800 font-semibold">{f.title}</p>
                    <p className="text-xs text-slate-500">{f.sub}</p>
                  </div>
                </div>
                {i < FLOW.length - 1 && <div className="h-5 w-px bg-gold/40" />}
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-gold text-[11px] tracking-luxe font-semibold mb-4">WHAT WE NEGOTIATE</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {TERMS.map((t) => (
              <div
                key={t}
                className="negotiation-light-card rounded px-3 py-2.5 text-xs md:text-sm text-slate-700 text-center hover:border-gold/60 hover:bg-white/85 transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
