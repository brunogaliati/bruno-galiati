"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Briefcase,
  Code,
  GraduationCap,
  ChevronDown,
  Github,
} from "lucide-react";
import { personalInfo, badges } from "@/data/portfolio";

const iconMap = {
  MapPin,
  Briefcase,
  Code,
  GraduationCap,
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 hero-gradient"
      />

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-xl md:text-2xl text-indigo-300 mt-4"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {badges.map((badge) => {
              const Icon = iconMap[badge.icon];
              return (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-200 text-sm font-body border border-white/10"
                >
                  {Icon && <Icon size={16} className="text-indigo-300" />}
                  {badge.label}
                </span>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-secondary text-white font-heading font-semibold text-base hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              Ver Projetos
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-white/30 text-white font-heading font-semibold text-base hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>

          {/* Email */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-slate-400 text-sm font-mono mt-6"
          >
            {personalInfo.email}
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
