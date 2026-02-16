export default function SectionHeading({ label, title, gradient = false }) {
  return (
    <div className="mb-12">
      {label && (
        <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-secondary/80">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mt-2 ${
          gradient ? "gradient-text" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
