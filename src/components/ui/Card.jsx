export default function Card({
  children,
  className = "",
  hover = true,
  glow = "indigo",
}) {
  const glowClass =
    glow === "emerald" ? "card-glow-emerald" : glow === "none" ? "" : "card-glow";

  return (
    <div
      className={`bg-white/[0.03] rounded-2xl p-6 border border-white/[0.07] ${
        hover ? `transition-all duration-300 hover:-translate-y-0.5 ${glowClass}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
