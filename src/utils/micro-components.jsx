export { FadeIn, SectionLabel, SectionTitle, GradientText };

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const transforms = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(32px)",
    right: "translateX(-32px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
      {children}
    </span>
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 ${light ? "text-white" : "text-white"}`}
    >
      {children}
    </h2>
  );
}

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
