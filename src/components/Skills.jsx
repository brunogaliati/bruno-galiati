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

const colorMap = {
  secondary: {
    icon: "text-secondary",
    bg: "bg-secondary/10",
  },
  accent: {
    icon: "text-accent",
    bg: "bg-accent/10",
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50">
      <SectionHeading label="COMPETÊNCIAS" title="Stack & Skills" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon];
          const colors = colorMap[category.color];

          return (
            <AnimatedElement key={i} delay={i * 0.15}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={24} className={colors.icon} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Check if items are arrays (grid layout for tech) or strings (list layout) */}
                {Array.isArray(category.items[0]) ? (
                  <div className="space-y-2">
                    {category.items.map((pair, j) => (
                      <div key={j} className="grid grid-cols-2 gap-2">
                        {pair.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-slate-50 text-text text-sm font-mono text-center border border-slate-100"
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
                        className="flex items-center gap-2 text-sm text-text-light"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
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
    </SectionWrapper>
  );
}
