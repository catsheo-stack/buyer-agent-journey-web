import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideNav from "@/components/tour/SideNav";
import ProgressBar from "@/components/tour/ProgressBar";
import Slide01 from "@/components/tour/slides/Slide01";
import Slide02 from "@/components/tour/slides/Slide02";
import Slide03 from "@/components/tour/slides/Slide03";
import Slide04 from "@/components/tour/slides/Slide04";
import Slide05 from "@/components/tour/slides/Slide05";
import Slide06 from "@/components/tour/slides/Slide06";
import Slide07 from "@/components/tour/slides/Slide07";
import Slide08 from "@/components/tour/slides/Slide08";
import Slide09 from "@/components/tour/slides/Slide09";

const SLIDES = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09];

export default function Tour() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => setIndex((i) => Math.min(SLIDES.length - 1, Math.max(0, i + dir))),
    []
  );
  const select = useCallback((i) => setIndex(i), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const ActiveSlide = SLIDES[index];

  return (
    <div className="fixed inset-0 wealth-flow-background overflow-y-auto overscroll-contain md:overflow-hidden">
      <ProgressBar value={(index + 1) / SLIDES.length} />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative min-h-full w-full md:absolute md:inset-0"
        >
          <ActiveSlide onNext={() => go(1)} />
        </motion.div>
      </AnimatePresence>
      <SideNav
        active={index}
        total={SLIDES.length}
        onSelect={select}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </div>
  );
}