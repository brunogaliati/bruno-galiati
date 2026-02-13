"use client";

import {
  ExternalLink,
  Github,
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
    <SectionWrapper id="projetos" className="bg-slate-50">
      <SectionHeading label="PROJETOS" title="O que eu construo" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main project - 65% */}
        <div className="lg:col-span-3">
          <AnimatedElement>
            <Card className="overflow-hidden" hover={false}>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-semibold">
                  {mainProject.badge}
                </span>
              </div>

              {/* Project name */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {mainProject.name}
              </h3>
              <p className="text-text-light text-sm font-mono mt-1 mb-4">
                {mainProject.tag}
              </p>

              {/* Screenshot placeholder */}
              <div className="w-full h-48 md:h-56 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                <div className="text-center">
                  <BarChart3
                    size={48}
                    className="text-secondary/40 mx-auto mb-2"
                  />
                  <span className="text-text-light text-sm font-mono">
                    fidcs.com.br
                  </span>
                </div>
              </div>

              <h4 className="font-heading text-xl font-semibold text-primary mb-4">
                {mainProject.title}
              </h4>

              {/* Problem / Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-text-light">
                    O PROBLEMA
                  </span>
                  <p className="text-text-light text-sm mt-1 leading-relaxed">
                    {mainProject.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-text-light">
                    A SOLUÇÃO
                  </span>
                  <p className="text-text-light text-sm mt-1 leading-relaxed">
                    {mainProject.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border mb-6">
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

              {/* Stack */}
              <div className="mb-6">
                <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-text-light">
                  STACK TÉCNICO
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mainProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-text-light">
                  FUNCIONALIDADES
                </span>
                <ul className="mt-2 space-y-2">
                  {mainProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-light"
                    >
                      <span className="text-secondary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mainProject.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-secondary text-white font-heading font-semibold text-sm hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <ExternalLink size={16} />
                  Visitar Site
                </a>
                <a
                  href={mainProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-border text-text font-heading font-semibold text-sm hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <Github size={16} />
                  Ver Código
                </a>
              </div>
            </Card>
          </AnimatedElement>
        </div>

        {/* Secondary projects - 35% */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {secondaryProjects.map((project, i) => {
            const Icon = projectIcons[i];
            return (
              <AnimatedElement key={i} delay={i * 0.1} direction="right">
                <Card>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-text-light mb-1">
                        {project.badge}
                      </span>
                      <h4 className="font-heading text-base font-semibold text-primary">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-slate-100 text-text-light text-xs font-mono"
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
    </SectionWrapper>
  );
}
