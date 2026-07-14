import { motion } from "framer-motion";

export default function ProgressBar({ value }) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/10 z-50">
      <motion.div
        className="h-full gold-shimmer"
        animate={{ width: `${value * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}