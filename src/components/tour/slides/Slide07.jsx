import SlideShell from "@/components/tour/SlideShell";
import { cn } from "@/lib/utils";

const STEPS = [
  ["Offer Accepted", "Buyer Agent"],
  ["Section 32 Review", "Conveyancer"],
  ["Building Inspection", "Building Inspector"],
  ["Legal Review", "Conveyancer"],
  ["Council / Owners Corporation", "Council"],
  ["Finance Coordination", "Bank"],
  ["Negotiation", "Buyer Agent"],
  ["Settlement Preparation", "Selling Agent"],
  ["Keys", "Buyer Agent"],
];

export default function Slide07() {
  return (
    <SlideShell
      number="07"
      label="PROJECT MANAGEMENT"
      footer={
        <div className="font-serif-display">
          <p className="text-white text-sm md:text-base">One point of contact.</p>
          <p className="text-gold text-sm md:text-base">One seamless journey.</p>
        </div>
      }
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white text-center mb-10 leading-tight">
        One trusted advisor, <span className="text-gold italic">every step of</span> your journey.
      </h2>
      <div className="relative max-w-2xl mx-auto w-full">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10" />
        <ul className="space-y-3">
          {STEPS.map(([step, who], i) => {
            const edge = i === 0 || i === STEPS.length - 1;
            return (
              <li key={step} className="relative flex items-center gap-4 pl-8">
                <span
                  className={cn(
                    "absolute left-0 h-4 w-4 rounded-full border-2",
                    edge ? "bg-gold border-gold" : "bg-navy border-white/25"
                  )}
                />
                <span className="text-sm md:text-base text-white/90 flex-1">{step}</span>
                <span className="text-xs text-gold/80 tracking-wide">{who}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </SlideShell>
  );
}