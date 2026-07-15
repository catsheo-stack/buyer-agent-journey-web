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
      theme="blue"
      footer={<p className="text-sm text-white/60">We negotiate far more than price.</p>}
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white mb-9 md:mb-10">
        Negotiate today's price,<br />
        <span className="text-gold">protect tomorrow's value.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-4xl w-full items-center pb-2">
        <div className="flex flex-col items-center gap-3">
          {FLOW.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex w-full flex-col items-center">
                <div className="w-full max-w-[260px] negotiation-blue-card rounded-lg px-5 py-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">{f.title}</p>
                    <p className="text-xs text-white/55">{f.sub}</p>
                  </div>
                </div>
                {i < FLOW.length - 1 && <div className="h-5 w-px bg-gold/45" />}
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
                className="negotiation-blue-card rounded px-3 py-3 text-xs md:text-sm text-white/80 text-center hover:border-gold/60 hover:bg-white/10 transition-colors"
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
