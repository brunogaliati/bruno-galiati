export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-card rounded-2xl p-6 border border-border shadow-sm ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
