"use client";

import { MapPin, Building2 } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experiencia">
      <SectionHeading label="EXPERIÊNCIA PROFISSIONAL" title="Trajetória" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <AnimatedElement key={i} delay={i * 0.1}>
              <div className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-secondary border-2 border-card shadow-sm" />

                {/* Period */}
                <span className="text-xs font-mono text-secondary font-semibold">
                  {item.period}
                </span>

                {/* Card content */}
                <div className="mt-2 bg-card rounded-xl p-5 border border-border shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-text-light">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} />
                      {item.company}
                    </span>
                    {item.type && (
                      <>
                        <span className="text-border">·</span>
                        <span>{item.type}</span>
                      </>
                    )}
                    {item.location && (
                      <>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-text-light text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-text-light"
                        >
                          <span className="text-secondary mt-1 shrink-0">
                            •
                          </span>
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
                          className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
