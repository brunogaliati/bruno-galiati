"use client";

import { TrendingUp, Code, Lightbulb } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import Card from "./ui/Card";
import { skillCategories } from "@/data/portfolio";

const iconMap = {
  TrendingUp,
  Code,
  Lightbulb,
};

const cardStyles = [
  {
    icon: "text-secondary",
    bg: "bg-secondary/10",
    dot: "bg-secondary",
    glow: "indigo",
  },
  {
    icon: "text-accent",
    bg: "bg-accent/10",
    dot: "bg-accent",
    glow: "emerald",
    tag: "bg-accent/[0.06] text-accent/80 border-accent/[0.08]",
  },
  {
    icon: "text-secondary",
    bg: "bg-secondary/10",
    dot: "bg-secondary",
    glow: "indigo",
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background mesh */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading label="COMPETÊNCIAS" title="Stack & Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
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
    </SectionWrapper>
  );
}
