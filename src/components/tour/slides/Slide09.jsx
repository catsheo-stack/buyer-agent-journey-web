import { Heart, TrendingUp, ShieldCheck } from "lucide-react";

const PATIO = "https://media.base44.com/images/public/6a56259fa06c0c6a7c03cea8/4f379ae7a_generated_5a65feea.png";

const BADGES = [
  { icon: Heart, label: "Love living there" },
  { icon: TrendingUp, label: "Financially sensible" },
  { icon: ShieldCheck, label: "Protected from risk" },
];

export default function Slide09({ onNext }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img src={PATIO} alt="Luxury patio at sunset" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#263f55]/65 backdrop-blur-[1px]" />
      <div className="absolute inset-0 gilded-grid opacity-40 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-16">
        <p className="text-gold/80 text-[11px] tracking-luxe mb-3">09 — WHAT SUCCESS LOOKS LIKE</p>
        <p className="font-serif-display italic text-white/70 text-sm md:text-base mb-6">
          We'll know we've found the right home.
        </p>
        <h2 className="font-serif-display italic text-3xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-tight">
          When your heart and the numbers agree.
        </h2>
        <p className="font-serif-display italic text-gold text-lg md:text-2xl mt-5">
          That's the deal we are proud to close.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-12">
          {BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex flex-col items-center gap-3">
                <div className="h-16 w-16 rounded-full border border-gold/60 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <span className="text-xs text-white/75 tracking-wide">{b.label}</span>
              </div>
            );
          })}
        </div>
        <button
          onClick={onNext}
          className="mt-12 inline-flex items-center gap-3 border border-gold/60 px-8 py-3 text-xs tracking-luxe text-gold hover:bg-gold hover:text-[#20364a] transition-all duration-300"
        >
          BUYING WITH CONFIDENCE.
        </button>
      </div>
    </div>
  );
}