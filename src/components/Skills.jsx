"use client";

import { TrendingUp, Code, Lightbulb } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import Card from "./ui/Card";
import OceanParticles from "./ui/OceanParticles";
import ZoneDivider from "./ui/ZoneDivider";
import { skillCategories, ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  TrendingUp,
  Code,
  Lightbulb,
};

const cardStyles = [
  {
    icon: "text-zone-hadal-vent",
    bg: "bg-zone-hadal-vent/10",
    dot: "bg-zone-hadal-vent",
    glow: "vent",
    tag: "bg-zone-hadal-vent/[0.06] text-zone-hadal-vent/80 border-zone-hadal-vent/[0.08]",
  },
  {
    icon: "text-zone-hadal-vent",
    bg: "bg-zone-hadal-glow/10",
    dot: "bg-zone-hadal-glow",
    glow: "vent",
    tag: "bg-zone-hadal-vent/[0.06] text-zone-hadal-vent/80 border-zone-hadal-vent/[0.08]",
  },
  {
    icon: "text-zone-hadal-vent",
    bg: "bg-zone-hadal-vent/10",
    dot: "bg-zone-hadal-vent",
    glow: "vent",
    tag: "bg-zone-hadal-vent/[0.06] text-zone-hadal-vent/80 border-zone-hadal-vent/[0.08]",
  },
];

export default function Skills() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const categories = skillCategories[lang];

  return (
    <SectionWrapper id="skills" zone="hadal" className="overflow-hidden">
      {/* Ocean particles — hadal embers */}
      <OceanParticles zone="hadal" />

      {/* Volcanic vent glows */}
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
          animation: "vent-glow 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.03) 0%, transparent 70%)",
          animation: "vent-glow 4s ease-in-out 2s infinite",
        }}
      />

      <div className="relative z-10">
        <SectionHeading label={t.competencies} title={t.stackAndSkills} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, i) => {
            const Icon = iconMap[category.icon];
            const style = cardStyles[i] || cardStyles[0];

            return (
              <AnimatedElement key={i} delay={i * 0.15}>
                <Card className="h-full" glow={style.glow}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center`}
                    >
                      <Icon size={24} className={style.icon} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {Array.isArray(category.items[0]) ? (
                    <div className="space-y-2">
                      {category.items.map((pair, j) => (
                        <div key={j} className="grid grid-cols-2 gap-2">
                          {pair.map((item) => (
                            <span
                              key={item}
                              className={`px-3 py-1.5 rounded-lg text-sm font-mono text-center border transition-colors ${
                                style.tag
                                  || "bg-white/[0.04] text-slate-300 border-white/[0.06] hover:bg-white/[0.07]"
                              }`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2.5">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-slate-400"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${style.dot} shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </AnimatedElement>
            );
          })}
        </div>
      </div>

      {/* Gradient fade divider to trench */}
      <ZoneDivider variant="fade" toColor="#000308" />
    </SectionWrapper>
  );
}
