"use client";

import { Mail, Linkedin, Github, Globe } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import { contactLinks } from "@/data/portfolio";

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Globe,
};

const cardAccents = [
  { icon: "text-secondary", bg: "bg-secondary/10", glow: "indigo" },
  { icon: "text-secondary", bg: "bg-secondary/10", glow: "indigo" },
  { icon: "text-accent", bg: "bg-accent/10", glow: "emerald" },
  { icon: "text-accent", bg: "bg-accent/10", glow: "emerald" },
];

export default function Contact() {
  return (
    <SectionWrapper id="contato" className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Full-width gradient bg — indigo ← → emerald */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.05] via-transparent to-accent/[0.04] pointer-events-none" />

      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <AnimatedElement>
          <SectionHeading label="CONTATO" title="Vamos conversar" gradient />

          <p className="text-slate-400 text-base md:text-lg -mt-6 mb-10 leading-relaxed">
            Estou buscando oportunidades em produto, dados ou tech onde eu
            possa construir coisas que resolvem problemas reais. Se você valoriza
            quem entende o problema e sabe construir a solução, adoraria
            conversar.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = iconMap[link.icon];
              const accent = cardAccents[i] || cardAccents[0];
              const glowClass =
                accent.glow === "emerald" ? "card-glow-emerald" : "card-glow";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-secondary ${glowClass}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={accent.icon} />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-semibold text-white text-sm">
                      {link.label}
                    </div>
                    <div className="text-slate-500 text-xs font-mono">
                      {link.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
