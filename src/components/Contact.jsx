"use client";

import { Mail, Linkedin, Github, Globe } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedElement from "./ui/AnimatedElement";
import { contactLinks } from "@/data/portfolio";

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Globe,
};

export default function Contact() {
  return (
    <SectionWrapper id="contato" className="bg-gradient-to-br from-indigo-50 to-slate-50">
      <div className="text-center max-w-2xl mx-auto">
        <AnimatedElement>
          <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-secondary">
            CONTATO
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
            Vamos conversar
          </h2>
          <p className="text-text-light text-base md:text-lg mt-4 leading-relaxed">
            Estou aberto a oportunidades onde eu possa construir coisas —
            produtos, ferramentas, análises que viram código. Se você valoriza
            pessoas que resolvem problemas do mundo real com dados e tecnologia,
            adoraria conversar.
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {contactLinks.map((link) => {
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
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-semibold text-primary text-sm">
                      {link.label}
                    </div>
                    <div className="text-text-light text-xs font-mono">
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
