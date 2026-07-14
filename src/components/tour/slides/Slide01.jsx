import { ArrowRight } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a56259fa06c0c6a7c03cea8/42f4d5cf1_generated_59366b54.png";

export default function Slide01({ onNext }) {
  return (
    <div className="relative h-full w-full flex wealth-flow-slide-wash">
      <div className="hidden md:block md:w-1/2 relative">
        <img src={HERO} alt="Modern family home at golden hour" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#263f55]/35 to-[#263f55]/90" />
      </div>
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        <div className="h-px w-16 bg-gold mb-8" />
        <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-white">
          Your Property Journey<br />Starts Here
        </h1>
        <p className="mt-8 text-white/65 text-base md:text-lg max-w-md leading-relaxed">
          Buying a house isn't just finding a property.
        </p>
        <p className="mt-3 font-serif-display text-2xl md:text-3xl text-white">
          It's about finding your <span className="text-gold italic">iHOME</span>.
        </p>
        <button
          onClick={onNext}
          className="mt-10 inline-flex items-center gap-3 self-start border border-gold/60 px-7 py-3 text-xs tracking-luxe text-gold hover:bg-gold hover:text-[#20364a] transition-all duration-300"
        >
          BEGIN THE JOURNEY <ArrowRight className="h-4 w-4" />
        </button>
        <div className="mt-auto pt-10 text-[11px] tracking-luxe text-white/40">01 — WELCOME</div>
      </div>
    </div>
  );
}