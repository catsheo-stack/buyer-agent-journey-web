import SlideShell from "@/components/tour/SlideShell";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    addr: "12 Elm St, Kew", score: 94, recommended: true,
    rows: [
      ["Price", "$1.85M"], ["School", "Kew Primary"], ["Land", "620 m²"],
      ["Orientation", "North"], ["Pool Potential", "Yes"], ["Future Growth", "Strong"],
      ["Lifestyle", "Excellent"], ["Risk", "Low"],
    ],
    riskColor: "text-emerald-400",
  },
  {
    addr: "8 Maple Ave, Hawthorn", score: 76,
    rows: [
      ["Price", "$1.72M"], ["School", "Auburn South"], ["Land", "540 m²"],
      ["Orientation", "East"], ["Pool Potential", "Limited"], ["Future Growth", "Moderate"],
      ["Lifestyle", "Good"], ["Risk", "Medium"],
    ],
    riskColor: "text-amber-400",
  },
  {
    addr: "24 Oak Rd, Camberwell", score: 71,
    rows: [
      ["Price", "$1.90M"], ["School", "Camberwell PS"], ["Land", "580 m²"],
      ["Orientation", "West"], ["Pool Potential", "Yes"], ["Future Growth", "Moderate"],
      ["Lifestyle", "Good"], ["Risk", "Medium"],
    ],
    riskColor: "text-amber-400",
  },
];

export default function Slide04() {
  return (
    <SlideShell
      number="04"
      label="PROPERTY COMPARISON"
      footer={<p className="text-sm text-white/50">Helping clients compare apples with apples.</p>}
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white text-center mb-10">
        Decide with clarity.
      </h2>
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {CARDS.map((c) => (
          <div
            key={c.addr}
            className={cn(
              "relative rounded-lg bg-navy-surface/80 p-5 flex flex-col items-center",
              c.recommended ? "border-2 border-gold shadow-[0_0_30px_rgba(197,160,89,0.15)]" : "border border-white/10"
            )}
          >
            {c.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[9px] tracking-luxe font-semibold px-3 py-1 rounded">
                RECOMMENDED
              </span>
            )}
            <p className="text-sm text-white/90 font-medium text-center mt-1">{c.addr}</p>
            <div className={cn("mt-4 h-16 w-16 rounded-full flex flex-col items-center justify-center border-2",
              c.recommended ? "border-gold text-gold" : "border-white/20 text-white/60")}>
              <span className="font-serif-display text-2xl leading-none">{c.score}</span>
              <span className="text-[8px] tracking-luxe mt-0.5">MATCH</span>
            </div>
            <div className="mt-5 w-full space-y-2 text-xs">
              {c.rows.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-white/45">{k}</span>
                  <span className={cn("text-white/85", k === "Risk" && c.riskColor)}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}