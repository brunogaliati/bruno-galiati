"use client";

import { useState, useEffect, useCallback } from "react";

const ZONES = [
  { id: "hero", zone: "sunlight", depth: 0, label: "0m", color: "#06b6d4" },
  { id: "sobre", zone: "twilight", depth: 200, label: "-200m", color: "#0e7490" },
  { id: "projetos", zone: "midnight", depth: 1000, label: "-1000m", color: "#0c4a6e" },
  { id: "experiencia", zone: "abyssal", depth: 4000, label: "-4000m", color: "#082f49" },
  { id: "skills", zone: "hadal", depth: 6000, label: "-6000m", color: "#f97316" },
  { id: "contato", zone: "trench", depth: 8000, label: "-8000m", color: "#fbbf24" },
];

export { ZONES };

export default function useDepthTracker() {
  const [activeZone, setActiveZone] = useState("sunlight");
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;

    for (let i = ZONES.length - 1; i >= 0; i--) {
      const el = document.getElementById(ZONES[i].id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportCenter) {
        setActiveZone(ZONES[i].zone);

        const sectionProgress = Math.min(
          1,
          Math.max(0, (viewportCenter - rect.top) / rect.height)
        );
        const baseProgress = i / ZONES.length;
        const segmentSize = 1 / ZONES.length;
        setProgress(baseProgress + sectionProgress * segmentSize);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { activeZone, progress, zones: ZONES };
}
