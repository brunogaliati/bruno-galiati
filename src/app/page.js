"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DepthMeter from "@/components/ui/DepthMeter";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <DepthMeter />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
