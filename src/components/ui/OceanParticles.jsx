"use client";

import { useState, useEffect } from "react";

function generateParticles(zone) {
  switch (zone) {
    case "sunlight":
      return Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: Math.random() * 7 + 3,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 13 + 12,
        style: {
          border: "1px solid rgba(34,211,238,0.3)",
          background: "transparent",
          animation: `bubble-rise ${Math.random() * 13 + 12}s ease-in-out ${Math.random() * 12}s infinite, bubble-wobble ${Math.random() * 3 + 4}s ease-in-out infinite`,
        },
      }));

    case "twilight":
      return [
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i,
          size: Math.random() * 5 + 3,
          left: Math.random() * 100,
          top: Math.random() * 100,
          style: {
            background: "rgba(94, 234, 212, 0.4)",
            boxShadow: "0 0 8px rgba(94, 234, 212, 0.3)",
            animation: `bio-drift ${Math.random() * 10 + 15}s ease-in-out ${Math.random() * 8}s infinite`,
          },
        })),
        ...Array.from({ length: 4 }, (_, i) => ({
          id: 100 + i,
          isJellyfish: true,
          left: 15 + Math.random() * 70,
          top: 20 + Math.random() * 60,
          size: Math.random() * 10 + 8,
          style: {
            background: "radial-gradient(circle, rgba(94,234,212,0.15) 0%, transparent 70%)",
            border: "1px solid rgba(94,234,212,0.12)",
            borderRadius: "50% 50% 40% 40%",
            animation: `bio-drift ${Math.random() * 10 + 18}s ease-in-out ${Math.random() * 5}s infinite`,
          },
        })),
      ];

    case "midnight":
      return [
        ...Array.from({ length: 8 }, (_, i) => ({
          id: i,
          size: Math.random() * 6 + 3,
          left: Math.random() * 100,
          top: Math.random() * 100,
          style: {
            background: i % 2 === 0 ? "rgba(52, 211, 153, 0.5)" : "rgba(6, 182, 212, 0.4)",
            color: i % 2 === 0 ? "#34d399" : "#06b6d4",
            boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(52, 211, 153, 0.3)" : "rgba(6, 182, 212, 0.3)"}`,
            animation: `bio-pulse ${Math.random() * 6 + 6}s ease-in-out ${Math.random() * 6}s infinite`,
          },
        })),
        ...Array.from({ length: 2 }, (_, i) => ({
          id: 200 + i,
          isAngler: true,
          size: 6,
          left: 20 + i * 55,
          top: 30 + Math.random() * 40,
          style: {
            background: "rgba(52, 211, 153, 0.6)",
            animation: `angler-glow 3s ease-in-out ${i * 1.5}s infinite, bio-pulse 4s ease-in-out ${i}s infinite`,
            boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)",
          },
        })),
      ];

    case "abyssal":
      return Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: Math.random() * 5 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        style: {
          background: "rgba(167, 139, 250, 0.4)",
          color: "#a78bfa",
          boxShadow: "0 0 8px rgba(167, 139, 250, 0.3)",
          opacity: 0.5,
          animation: `bio-pulse ${Math.random() * 4 + 8}s ease-in-out ${Math.random() * 6}s infinite`,
        },
      }));

    case "hadal":
      return Array.from({ length: 7 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        bottom: Math.random() * 20,
        style: {
          background: i % 2 === 0 ? "rgba(249, 115, 22, 0.7)" : "rgba(239, 68, 68, 0.6)",
          boxShadow: `0 0 6px ${i % 2 === 0 ? "rgba(249, 115, 22, 0.4)" : "rgba(239, 68, 68, 0.3)"}`,
          animation: `ember-float ${Math.random() * 8 + 10}s ease-in-out ${Math.random() * 8}s infinite`,
        },
      }));

    case "trench":
      return Array.from({ length: 10 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        style: {
          background: "rgba(251, 191, 36, 0.4)",
          boxShadow: "0 0 6px rgba(251, 191, 36, 0.2)",
          animation: `mote-float ${Math.random() * 10 + 20}s ease-in-out ${Math.random() * 10}s infinite`,
        },
      }));

    default:
      return [];
  }
}

export default function OceanParticles({ zone }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(zone));
  }, [zone]);

  if (!particles.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            ...(p.top !== undefined ? { top: `${p.top}%` } : {}),
            ...(p.bottom !== undefined ? { bottom: `${p.bottom}%` } : {}),
            ...p.style,
          }}
        />
      ))}
    </div>
  );
}
