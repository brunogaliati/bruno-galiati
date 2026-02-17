"use client";

import { MapPin, Building2 } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import OceanParticles from "./ui/OceanParticles";
import ZoneDivider from "./ui/ZoneDivider";
import { experience, ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

function ExperienceCard({ item, color = "cyan" }) {
  const colorMap = {
    cyan: {
      bullet: "text-secondary",
      glow: "hover:border-secondary/15 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.1)]",
      tag: "bg-secondary/[0.06] text-secondary/80 border-secondary/[0.08]",
    },
    purple: {
      bullet: "text-zone-abyssal-bio",
      glow: "hover:border-zone-abyssal-bio/15 hover:shadow-[0_0_30px_-10px_rgba(167,139,250,0.1)]",
      tag: "bg-zone-abyssal-bio/[0.06] text-zone-abyssal-bio/80 border-zone-abyssal-bio/[0.08]",
    },
  };

  const style = colorMap[color] || colorMap.cyan;

  return (
    <div
      className={`bg-white/[0.02] rounded-xl p-5 border border-white/[0.06] transition-all duration-300 ${style.glow}`}
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
              <span className={`${style.bullet} mt-1 shrink-0`}>•</span>
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
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${style.tag}`}
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
  const { lang } = useLanguage();
  const t = ui[lang];
  const exp = experience[lang];

  const concurrent = exp.slice(0, 2);
  const rest = exp.slice(2);

  return (
    <SectionWrapper id="experiencia" zone="abyssal" className="overflow-hidden">
      {/* Ocean particles — abyssal */}
      <OceanParticles zone="abyssal" />

      {/* Background mesh */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full bg-zone-abyssal/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading
          label={t.professionalExperience}
          title={t.trajectory}
          gradient
        />

        {/* Full timeline container */}
        <div className="relative">
          {/* Main timeline vertical line — cyan → purple gradient */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-zone-abyssal-bio/30 to-zone-abyssal-bio/20" />

          {/* ── Parallel section ── */}
          <AnimatedElement>
            <div className="relative pl-12 md:pl-20 mb-12">
              {/* Dot on the main timeline */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-[#030a16] z-10" />

              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                    {t.currentParallel}
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
                  <ExperienceCard item={concurrent[0]} color="cyan" />
                </div>

                {/* Right track — side project */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-zone-abyssal-bio" />
                    <span className="text-xs font-mono text-zone-abyssal-bio font-semibold">
                      {concurrent[1].period}
                    </span>
                  </div>
                  <ExperienceCard item={concurrent[1]} color="purple" />
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* ── Single timeline: previous roles ── */}
          <div className="space-y-10">
            {rest.map((item, i) => {
              const isPurple = i % 2 !== 0;
              const dotColor = isPurple ? "bg-zone-abyssal-bio" : "bg-secondary";
              const periodColor = isPurple ? "text-zone-abyssal-bio" : "text-secondary";

              return (
                <AnimatedElement key={i} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-20">
                    <div
                      className={`absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full ${dotColor} border-2 border-[#030a16]`}
                    />
                    <span
                      className={`text-xs font-mono ${periodColor} font-semibold`}
                    >
                      {item.period}
                    </span>
                    <div className="mt-2">
                      <ExperienceCard
                        item={item}
                        color={isPurple ? "purple" : "cyan"}
                      />
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient fade divider to hadal */}
      <ZoneDivider variant="fade" toColor="#020710" />
    </SectionWrapper>
  );
}
