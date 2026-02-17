"use client";

import { Mail, Linkedin, Github, Globe } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import OceanParticles from "./ui/OceanParticles";
import { contactLinks, ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Globe,
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const links = contactLinks[lang];

  return (
    <SectionWrapper id="contato" zone="trench" className="overflow-hidden">
      {/* Ocean particles — trench golden motes */}
      <OceanParticles zone="trench" />

      {/* Pressure pulse wrapper */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: "pressure-pulse 8s ease-in-out infinite" }}
      />

      {/* Golden glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-zone-trench-warm/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <AnimatedElement>
          <SectionHeading label={t.contact} title={t.letsTalk} gradient />

          <p className="text-slate-400 text-base md:text-lg -mt-6 mb-10 leading-relaxed">
            {t.contactDescription}
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, i) => {
              const Icon = iconMap[link.icon];

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
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07] transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-zone-trench-warm card-glow-warm"
                >
                  <div className="w-12 h-12 rounded-xl bg-zone-trench-warm/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-zone-trench-warm" />
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
