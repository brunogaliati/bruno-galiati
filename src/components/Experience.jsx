"use client";

import { MapPin, Building2 } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import { experience } from "@/data/portfolio";

function ExperienceCard({ item, color = "indigo" }) {
  const isEmerald = color === "emerald";
  const bulletColor = isEmerald ? "text-accent" : "text-secondary";
  const glowStyle = isEmerald
    ? "hover:border-accent/15 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]"
    : "hover:border-secondary/15 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.1)]";

  return (
    <div
      className={`bg-white/[0.02] rounded-xl p-5 border border-white/[0.06] transition-all duration-300 ${glowStyle}`}
    >
      <h3 className="font-heading text-lg font-bold text-white">
        {item.role}
      </h3>
      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-400">
        <span className="flex items-center gap-1">
          <Building2 size={14} />
          {item.company}
        </span>
        {item.type && (
          <>
            <span className="text-slate-600">·</span>
            <span>{item.type}</span>
          </>
        )}
        {item.location && (
          <>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {item.location}
            </span>
          </>
        )}
      </div>

      {item.description && (
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          {item.description}
        </p>
      )}

      {item.bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {item.bullets.map((bullet, j) => (
            <li
              key={j}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className={`${bulletColor} mt-1 shrink-0`}>•</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {item.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${
                isEmerald
                  ? "bg-accent/[0.06] text-accent/80 border-accent/[0.08]"
                  : "bg-secondary/[0.06] text-secondary/80 border-secondary/[0.08]"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const concurrent = experience.slice(0, 2);
  const rest = experience.slice(2);

  return (
    <SectionWrapper id="experiencia" className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background mesh */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading
          label="EXPERIÊNCIA PROFISSIONAL"
          title="Trajetória"
          gradient
        />

        {/* Full timeline container */}
        <div className="relative">
          {/* Main timeline vertical line — full height */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-secondary/30 to-accent/20" />

          {/* ── Parallel section ── */}
          <AnimatedElement>
            <div className="relative pl-12 md:pl-20 mb-12">
              {/* Dot on the main timeline */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-[#0a0f1e] z-10" />

              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                    Atual — em paralelo
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
              </div>

              {/* Two parallel cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left track — main job */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="text-xs font-mono text-secondary font-semibold">
                      {concurrent[0].period}
                    </span>
                  </div>
                  <ExperienceCard item={concurrent[0]} color="indigo" />
                </div>

                {/* Right track — side project (fork branch) */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="text-xs font-mono text-accent font-semibold">
                      {concurrent[1].period}
                    </span>
                  </div>
                  <ExperienceCard item={concurrent[1]} color="emerald" />
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* ── Single timeline: previous roles ── */}
          <div className="space-y-10">
            {rest.map((item, i) => {
              const isEmerald = i % 2 !== 0;
              const dotColor = isEmerald ? "bg-accent" : "bg-secondary";
              const periodColor = isEmerald
                ? "text-accent"
                : "text-secondary";

              return (
                <AnimatedElement key={i} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-20">
                    <div
                      className={`absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full ${dotColor} border-2 border-[#0a0f1e]`}
                    />
                    <span
                      className={`text-xs font-mono ${periodColor} font-semibold`}
                    >
                      {item.period}
                    </span>
                    <div className="mt-2">
                      <ExperienceCard
                        item={item}
                        color={isEmerald ? "emerald" : "indigo"}
                      />
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
