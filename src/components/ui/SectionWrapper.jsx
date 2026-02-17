"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({
  id,
  children,
  className = "",
  zone = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const zoneClass = zone ? `zone-${zone}` : "";

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${zoneClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
