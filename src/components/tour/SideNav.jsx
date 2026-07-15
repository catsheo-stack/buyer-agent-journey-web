import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  { n: "01", label: "WELCOME" },
  { n: "02", label: "UNDERSTANDING YOU" },
  { n: "03", label: "SMARTER SEARCH" },
  { n: "04", label: "PROPERTY COMPARISON" },
  { n: "05", label: "DUE DILIGENCE" },
  { n: "06", label: "NEGOTIATION" },
  { n: "07", label: "PROJECT MANAGEMENT" },
  { n: "08", label: "WHY CHOOSE US" },
  { n: "09", label: "WHAT SUCCESS LOOKS LIKE" },
];

export default function SideNav({ active, total, onSelect, onPrev, onNext }) {
  return (
    <div className="fixed right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      <button
        onClick={onPrev}
        disabled={active === 0}
        className="text-white/50 hover:text-gold disabled:opacity-20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
      <div className="flex flex-col items-center gap-2.5">
        {SLIDES.map((s, i) => (
          <button key={i} onClick={() => onSelect(i)} className="group relative flex items-center justify-end h-3">
            {i === active && (
              <span className="absolute right-6 whitespace-nowrap text-[9px] tracking-luxe text-gold font-medium hidden md:block">
                {s.label}
              </span>
            )}
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                i === active
                  ? "h-2.5 w-2.5 bg-gold shadow-[0_0_10px_rgba(197,160,89,0.55)]"
                  : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/60"
              )}
            />
          </button>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={active === total - 1}
        className="text-white/50 hover:text-gold disabled:opacity-20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronDown className="h-5 w-5" />
      </button>
      <span className="text-[9px] tracking-luxe text-white/40">
        {SLIDES[active].n}/{String(total).padStart(2, "0")}
      </span>
    </div>
  );
}