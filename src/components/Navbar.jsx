"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { navigation, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();

  const showNav = scrollY > 100;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNav && !isHidden ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-heading font-bold text-sm"
            >
              BG
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors font-body"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            {navigation.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl text-white font-heading font-semibold hover:text-secondary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors mt-4"
            >
              <Github size={28} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
