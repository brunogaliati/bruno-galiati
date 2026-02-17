"use client";

import useDepthTracker, { ZONES } from "@/hooks/useDepthTracker";

export default function DepthMeter() {
  const { activeZone, progress } = useDepthTracker();

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-0">
      {/* Track bar */}
      <div className="relative w-0.5 h-64 bg-white/[0.06] rounded-full overflow-visible">
        {/* Gradient fill */}
        <div
          className="absolute top-0 left-0 w-full rounded-full transition-all duration-300"
          style={{
            height: `${progress * 100}%`,
            background: "linear-gradient(180deg, #06b6d4, #0e7490, #0c4a6e, #082f49, #f97316, #fbbf24)",
          }}
        />

        {/* Zone markers */}
        {ZONES.map((z, i) => {
          const top = (i / (ZONES.length - 1)) * 100;
          const isActive = activeZone === z.zone;

          return (
            <div
              key={z.id}
              className="absolute -left-1.5 flex items-center gap-2"
              style={{ top: `${top}%`, transform: "translateY(-50%)" }}
            >
              {/* Dot */}
              <div className="relative">
                <div
                  className="w-[7px] h-[7px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? z.color : "rgba(255,255,255,0.15)",
                    boxShadow: isActive ? `0 0 8px ${z.color}` : "none",
                  }}
                />
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: z.color,
                      animation: "sonar-pulse 2s ease-out infinite",
                      opacity: 0.4,
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <span
                className="text-[9px] font-mono whitespace-nowrap transition-all duration-300"
                style={{
                  color: isActive ? z.color : "rgba(255,255,255,0.2)",
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                {z.label}
              </span>
            </div>
          );
        })}

        {/* Moving dot indicator */}
        <div
          className="absolute -left-1 w-2.5 h-2.5 rounded-full border-2 border-white/80 transition-all duration-300"
          style={{
            top: `${progress * 100}%`,
            transform: "translateY(-50%)",
            backgroundColor: ZONES.find((z) => z.zone === activeZone)?.color || "#06b6d4",
            boxShadow: `0 0 12px ${ZONES.find((z) => z.zone === activeZone)?.color || "#06b6d4"}`,
          }}
        />
      </div>
    </div>
  );
}
