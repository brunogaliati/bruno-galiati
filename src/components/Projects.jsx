"use client";

import {
  ExternalLink,
  Database,
  BarChart3,
  Cpu,
  Workflow,
} from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeading from "./ui/SectionHeading";
import AnimatedElement from "./ui/AnimatedElement";
import Card from "./ui/Card";
import MetricCounter from "./ui/MetricCounter";
import { mainProject, secondaryProjects } from "@/data/portfolio";

const projectIcons = [BarChart3, Database, Workflow, Cpu];

export default function Projects() {
  return (
    <SectionWrapper id="projetos" className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background mesh — indigo tint offset right */}
      <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-secondary/[0.03] blur-[160px] pointer-events-none" />

      <div className="relative z-10">
        <SectionHeading label="PROJETOS" title="O que eu construo" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main project — 65% */}
          <div className="lg:col-span-3">
            <AnimatedElement>
              <Card className="overflow-hidden" hover={false} glow="emerald">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {mainProject.badge}
                  </span>
                </div>

                {/* Project name */}
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                  {mainProject.name}
                </h3>
                <p className="text-slate-500 text-sm font-mono mt-1 mb-4">
                  {mainProject.tag}
                </p>

                {/* Screenshot */}
                <div className="w-full rounded-xl border border-white/[0.08] overflow-hidden mb-6 hover:border-accent/20 transition-colors">
                  <img
                    src="https://fidcs.com.br/social-card.png"
                    alt="FIDCs.com.br — Plataforma de dados sobre fundos de crédito"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <h4 className="font-heading text-xl font-semibold text-white mb-4">
                  {mainProject.title}
                </h4>

                {/* Problem / Solution — side by side on large */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-secondary/80">
                      O PROBLEMA
                    </span>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {mainProject.problem}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-accent/80">
                      A SOLUÇÃO
                    </span>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {mainProject.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/[0.06] mb-6">
                  {mainProject.metrics.map((metric) => (
                    <MetricCounter
                      key={metric.label}
                      value={metric.value}
                      label={metric.label}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      isYear={metric.isYear}
                    />
                  ))}
                </div>

                {/* Stack + Features — bento row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-slate-500">
                      STACK TÉCNICO
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mainProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary/[0.08] text-secondary/90 text-xs font-mono border border-secondary/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-slate-500">
                      FUNCIONALIDADES
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {mainProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="text-accent mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={mainProject.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-white font-heading font-semibold text-sm hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <ExternalLink size={16} />
                  Visitar Site
                </a>
              </Card>
            </AnimatedElement>
          </div>

          {/* Secondary projects — 35% */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondaryProjects.map((project, i) => {
              const Icon = projectIcons[i];
              const isEmerald = i % 2 === 0;
              const iconColor = isEmerald ? "text-accent" : "text-secondary";
              const iconBg = isEmerald ? "bg-accent/10" : "bg-secondary/10";
              return (
                <AnimatedElement key={i} delay={i * 0.1} direction="right">
                  <Card glow={isEmerald ? "emerald" : "indigo"}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={iconColor} />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/[0.05] text-slate-500 mb-1">
                          {project.badge}
                        </span>
                        <h4 className="font-heading text-base font-semibold text-white">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
