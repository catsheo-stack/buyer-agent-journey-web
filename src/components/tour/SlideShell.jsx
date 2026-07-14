export default function SlideShell({ number, label, children, footer, theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <div
      className={`relative h-full w-full flex flex-col overflow-hidden ${
        isLight ? "negotiation-light-slide" : "wealth-flow-slide-wash"
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight ? "negotiation-light-grid" : "gilded-grid opacity-50"
        }`}
      />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-16 lg:px-24 pt-10 md:pt-14 pb-20 md:pb-16 pr-16 md:pr-24">
        <div className="flex items-center gap-3">
          <span className="text-gold text-[11px] tracking-luxe font-medium">{number}</span>
          <span className="h-px w-8 bg-gold/60" />
          <span className={`${isLight ? "text-slate-500" : "text-white/55"} text-[11px] tracking-luxe font-medium`}>
            {label}
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center min-h-0">{children}</div>
        {footer && (
          <div className="text-center pt-6">
            <div className="mx-auto mb-4 h-px w-16 bg-gold/40" />
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
