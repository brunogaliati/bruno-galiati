"use client";

import { ui } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <footer className="relative bg-[#000103] py-10 px-4">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-600 text-sm font-mono">
          &copy; {new Date().getFullYear()} Bruno Galiati &middot; {t.builtWith}{" "}
          Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
