export default function ZoneDivider({ variant = "wave1", fromColor, toColor }) {
  if (variant === "fade") {
    return (
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${toColor || "rgba(0,0,0,0.3)"} 100%)`,
        }}
      />
    );
  }

  const paths = {
    wave1: "M0,64 C320,20 640,100 960,50 C1100,30 1280,80 1440,64 L1440,128 L0,128 Z",
    wave2: "M0,80 C180,30 360,100 540,50 C720,0 900,90 1080,40 C1200,10 1350,70 1440,80 L1440,128 L0,128 Z",
    wave3: "M0,90 C120,20 240,110 360,40 C480,0 600,100 720,30 C840,0 960,80 1080,20 C1200,0 1350,60 1440,90 L1440,128 L0,128 Z",
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id={`wave-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor || "transparent"} stopOpacity="0.3" />
            <stop offset="100%" stopColor={toColor || "rgba(0,0,0,0.5)"} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d={paths[variant] || paths.wave1}
          fill={`url(#wave-grad-${variant})`}
        />
      </svg>
    </div>
  );
}
