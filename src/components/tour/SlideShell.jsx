export default function SlideShell({ number, label, children, footer, theme = "dark" }) {
  const isBlue = theme === "blue";

  return (
    <div
      className={`relative min-h-full w-full flex flex-col overflow-visible md:h-full md:overflow-hidden ${
        isBlue ? "negotiation-blue-slide" : "wealth-flow-slide-wash"
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isBlue ? "negotiation-blue-grid" : "gilded-grid opacity-50"
        }`}
      />
      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-16 pr-14 pt-10 sm:px-10 sm:pr-16 md:h-full md:min-h-0 md:px-16 md:pb-16 md:pr-24 md:pt-14 lg:px-24">
        <div className="flex items-center gap-3">
          <span className="text-gold text-[11px] tracking-luxe font-medium">{number}</span>
          <span className="h-px w-8 bg-gold/60" />
          <span className="text-white/55 text-[11px] tracking-luxe font-medium">{label}</span>
        </div>
        <div className="flex flex-1 flex-col justify-start pt-10 md:min-h-0 md:justify-center md:pt-0">{children}</div>
        {footer && (
          <div className="relative mt-10 shrink-0 pb-2 text-center md:mt-0 md:pt-6">
            <div className="mx-auto mb-4 h-px w-16 bg-gold/40" />
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
