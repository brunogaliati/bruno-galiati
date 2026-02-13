export default function SectionHeading({ label, title, light = false }) {
  return (
    <div className="mb-12">
      {label && (
        <span
          className={`text-xs font-mono font-semibold tracking-[0.2em] uppercase ${
            light ? "text-indigo-300" : "text-secondary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mt-2 ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
