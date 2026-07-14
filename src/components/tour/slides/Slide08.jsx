import { Home, Shield, Wallet, Clock, HeartHandshake } from "lucide-react";
import SlideShell from "@/components/tour/SlideShell";

const HOME_IMG = "https://media.base44.com/images/public/6a56259fa06c0c6a7c03cea8/9db5addb5_generated_b2f1947c.png";

const CARDS = [
  { icon: Home, title: "Find the right property", body: "On and off market opportunities tailored to your needs" },
  { icon: Shield, title: "Reduce costly mistakes", body: "Thorough due diligence on every shortlisted property" },
  { icon: Wallet, title: "Buy with confidence", body: "Evidence-based decisions backed by data and experience" },
  { icon: Clock, title: "Save valuable time", body: "We do the searching, inspecting and researching for you." },
  { icon: HeartHandshake, title: "One trusted advisor", body: "A single point of contact from search to settlement." },
];

export default function Slide08() {
  return (
    <SlideShell
      number="08"
      label="WHY CLIENTS CHOOSE US"
      footer={<p className="text-sm text-white/50">We help you make better property decisions.</p>}
    >
      <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-white text-center mb-10">
        Why choose <span className="text-gold">us?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        {CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="bg-navy-surface/70 border border-white/10 rounded-lg p-5 hover:border-gold/40 transition-colors">
              <Icon className="h-6 w-6 text-gold mb-3" />
              <p className="font-serif-display text-lg text-white">{c.title}</p>
              <p className="text-xs text-white/55 mt-2 leading-relaxed">{c.body}</p>
            </div>
          );
        })}
        <div className="rounded-lg overflow-hidden border border-gold/30 min-h-[140px]">
          <img src={HOME_IMG} alt="Modern luxury home exterior at sunset" className="h-full w-full object-cover" />
        </div>
      </div>
    </SlideShell>
  );
}