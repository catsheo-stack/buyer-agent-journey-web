import { Heart, Wallet, GraduationCap, Calendar, Users, MapPin } from "lucide-react";
import SlideShell from "@/components/tour/SlideShell";

const NODES = [
  { icon: Heart, label: "Lifestyle" },
  { icon: Wallet, label: "Budget" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Calendar, label: "Future Plans" },
  { icon: Users, label: "Family" },
  { icon: MapPin, label: "Commute" },
];

export default function Slide02() {
  const R = 140;
  return (
    <SlideShell number="02" label="UNDERSTANDING YOU">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Success starts with understanding <span className="text-gold">YOU.</span>
        </h2>
        <div className="relative mt-10 md:mt-14" style={{ width: 360, height: 360 }}>
          <div className="absolute inset-0 rounded-full border border-gold/20" />
          <div className="absolute inset-8 rounded-full border border-gold/10" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-navy-surface border border-gold/50 flex items-center justify-center">
            <span className="font-serif-display text-gold text-lg">You</span>
          </div>
          {NODES.map((node, i) => {
            const angle = (-90 + i * 60) * (Math.PI / 180);
            const x = Math.cos(angle) * R;
            const y = Math.sin(angle) * R;
            const Icon = node.icon;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div className="h-12 w-12 rounded-full bg-navy-surface border border-gold/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-[11px] text-white/70 tracking-wide">{node.label}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-10 md:mt-14 font-serif-display text-xl md:text-2xl text-white">
          What matters to you, matters <span className="text-gold">MOST.</span>
        </p>
      </div>
    </SlideShell>
  );
}