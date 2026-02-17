"use client";

import { CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import Card from "./ui/Card";
import OceanParticles from "./ui/OceanParticles";
import ZoneDivider from "./ui/ZoneDivider";
import { aboutText, ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const about = aboutText[lang];

  return (
    <SectionWrapper id="sobre" zone="twilight" className="overflow-hidden">
      {/* Light rays — faded, top only */}
      <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden opacity-30 pointer-events-none">
        <div className="light-rays" style={{ left: "40%" }} />
      </div>

      {/* Ocean particles — twilight */}
      <OceanParticles zone="twilight" />

      {/* Background mesh — teal tint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-zone-twilight/[0.06] blur-[150px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-3">
          <SectionHeading
            label={about.label}
            title={about.title}
            gradient
          />

          {about.paragraphs.map((paragraph, i) => (
            <AnimatedElement key={i} delay={i * 0.15}>
              <p className="text-slate-400 leading-relaxed mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            </AnimatedElement>
          ))}
        </div>

        {/* Right column — strengths card */}
        <div className="lg:col-span-2">
          <AnimatedElement delay={0.2} direction="right">
            <Card hover={false} glow="teal" className="border-zone-twilight/[0.12]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-mono text-lg">
                    {"</>"}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {t.whatIDoWell}
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {about.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-slate-300 text-sm">{strength}</span>
                  </li>
                ))}
              </ul>

              <hr className="border-white/[0.06] my-6" />

              <div>
                <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-slate-500">
                  {t.currentStack}
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {about.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-accent/[0.08] text-accent/90 text-xs font-mono border border-accent/[0.08] transition-colors hover:bg-accent/[0.14]"
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

      {/* Wave divider to midnight */}
      <ZoneDivider variant="wave2" fromColor="#0a2a45" toColor="#071e35" />
    </SectionWrapper>
  );
}
