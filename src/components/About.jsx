"use client";

import { CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import Card from "./ui/Card";
import { aboutText } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left column - 60% */}
        <div className="lg:col-span-3">
          <SectionHeading label={aboutText.label} title={aboutText.title} />

          {aboutText.paragraphs.map((paragraph, i) => (
            <AnimatedElement key={i} delay={i * 0.15}>
              <p className="text-text-light leading-relaxed mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            </AnimatedElement>
          ))}
        </div>

        {/* Right column - 40% */}
        <div className="lg:col-span-2">
          <AnimatedElement delay={0.2} direction="right">
            <Card
              className="border-indigo-100 bg-indigo-50/50"
              hover={false}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-mono text-lg">
                    {"</>"}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  O que eu faço bem
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {aboutText.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-text text-sm">{strength}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-border my-6" />

              <div>
                <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-text-light">
                  STACK ATUAL
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {aboutText.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
