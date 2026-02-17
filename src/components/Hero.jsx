"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Code,
  GraduationCap,
  ChevronDown,
  Github,
  Activity,
  ArrowRight,
  BarChart3,
  Database,
  ExternalLink,
  Zap,
} from "lucide-react";
import { personalInfo, badges, mainProject, tickerItems as tickerData, ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = { MapPin, Briefcase, Code, GraduationCap };

/* Floating particles background */
function Particles() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 15 + 15,
    color: i % 3 === 0 ? "bg-secondary" : i % 3 === 1 ? "bg-accent" : "bg-indigo-400",
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: "-5%",
            opacity: p.opacity,
            animation: `${p.id % 2 === 0 ? "float-particle" : "float-particle-reverse"} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* Profile photo with glow border */
function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="relative w-20 h-20 mb-5"
    >
      {/* Spinning gradient ring */}
      <div className="absolute -inset-[3px] rounded-full photo-glow-ring"
        style={{
          background: "conic-gradient(from 0deg, #6366f1, #10b981, #6366f1)",
        }}
      />
      {/* Dark gap ring */}
      <div className="absolute -inset-[1px] rounded-full bg-[#0a0f1e]" />
      {/* Photo */}
      <img
        src="/photo.jpg"
        alt="Bruno Galiati"
        className="relative w-20 h-20 rounded-full object-cover object-top"
      />
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-full bg-secondary/[0.12] blur-xl -z-10" />
    </motion.div>
  );
}

/* Sparkline — small inline SVG chart */
function Sparkline({ data, color = "#6366f1", width = 80, height = 24 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);

  const points = data
    .map((v, i) => `${i * step},${height - ((v - min) / range) * height}`)
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="inline-block"
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Glow dot on last point */}
      <circle
        cx={width}
        cy={height - ((data[data.length - 1] - min) / range) * height}
        r="2"
        fill={color}
      />
    </svg>
  );
}

/* Marquee ticker strip */
function Ticker({ lang }) {
  const items = tickerData[lang];
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden border-t border-white/[0.06] bg-white/[0.02]">
      <div className="marquee-track flex items-center gap-6 py-3 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-secondary/60" />
            <span className="text-xs font-mono text-slate-500 tracking-wide">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BentoGrid({ lang }) {
  const t = ui[lang];
  const project = mainProject[lang];

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {/* Product card — FIDCs.com.br */}
      <motion.a
        href={project.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="col-span-2 group rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 hover:bg-white/[0.07] hover:border-secondary/30 transition-all"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
              {t.liveProduction}
            </span>
          </div>
          <ExternalLink
            size={12}
            className="text-slate-600 group-hover:text-secondary transition-colors"
          />
        </div>
        <h3 className="font-heading text-base font-bold text-white">
          FIDCs.com.br
        </h3>
        <p className="text-slate-500 text-xs mt-0.5 mb-3">
          {t.dataplatform}
        </p>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-5">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <div className="font-mono font-bold text-white text-sm">
                  {m.prefix || ""}
                  {m.value}
                </div>
                <div className="text-[9px] text-slate-600 font-mono uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <Sparkline
            data={[20, 35, 28, 45, 52, 48, 65, 72, 68, 85, 91, 100]}
            color="#10b981"
            width={72}
            height={28}
          />
        </div>
      </motion.a>

      {/* Stack card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <Code size={12} className="text-secondary" />
          <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
            Stack
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Python", "React", "PostgreSQL", "Supabase", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.06] text-slate-400 border border-white/[0.06]"
              >
                {tech}
              </span>
            )
          )}
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <Sparkline
            data={[10, 15, 22, 30, 28, 35, 42, 50, 55, 60]}
            color="#6366f1"
            width={60}
            height={18}
          />
          <span className="text-[9px] font-mono text-slate-600">6y exp</span>
        </div>
      </motion.div>

      {/* Domain card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3.5"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <Database size={12} className="text-indigo-400" />
          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
            {t.domain}
          </span>
        </div>
        <div className="space-y-1.5">
          {[t.bentoWealthMgmt, t.bentoProductMgmt, t.bentoStructuredCredit, t.bentoFIDCs].map(
            (item) => (
              <div
                key={item}
                className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5"
              >
                <div className="w-1 h-1 rounded-full bg-indigo-400/50" />
                {item}
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* Status card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="col-span-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <Zap size={12} className="text-yellow-500" />
          <span className="text-[10px] font-mono text-slate-500 tracking-wide">
            {t.statusLine}
          </span>
        </div>
        <Sparkline
          data={[30, 35, 42, 40, 55, 60, 58, 72, 80, 85, 91]}
          color="#eab308"
          width={50}
          height={14}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const info = personalInfo[lang];
  const badgeList = badges[lang];

  const heroNavLinks = [
    { label: t.heroAbout, href: "#sobre" },
    { label: t.heroProjects, href: "#projetos" },
    { label: t.heroExperience, href: "#experiencia" },
    { label: t.heroStack, href: "#skills" },
    { label: t.heroContact, href: "#contato" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0f1e]">
      {/* Terminal-style grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Text content */}
          <div>
            {/* Profile photo */}
            <ProfilePhoto />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-mono font-semibold tracking-wider uppercase">
                {t.availableForOpportunities}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight"
            >
              {info.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4"
            >
              <span className="font-heading text-xl md:text-2xl font-semibold gradient-text">
                {info.tagline}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base md:text-lg mt-3 max-w-xl leading-relaxed"
            >
              {info.description}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {badgeList.map((badge) => {
                const Icon = iconMap[badge.icon];
                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] text-slate-400 text-sm font-mono border border-white/[0.08] hover:bg-white/[0.08] hover:text-slate-300 transition-colors"
                  >
                    {Icon && <Icon size={13} className="text-secondary/70" />}
                    {badge.label}
                  </span>
                );
              })}
            </motion.div>

            {/* Navigation CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2.5 mt-8"
            >
              {heroNavLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
                    i === 0
                      ? "bg-secondary text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-secondary/25"
                      : "border border-white/[0.1] text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {link.label}
                  <ArrowRight size={14} className="opacity-50" />
                </a>
              ))}
            </motion.div>

            {/* GitHub + Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-6"
            >
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-sm font-mono transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-slate-600 text-xs font-mono">
                {info.email}
              </span>
            </motion.div>
          </div>

          {/* Right: Bento Grid */}
          <div className="hidden lg:block">
            <BentoGrid lang={lang} />
          </div>
        </div>
      </div>

      {/* Ticker strip at bottom of hero */}
      <div className="relative z-10">
        <Ticker lang={lang} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
