"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function MetricCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  isYear = false,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-bold text-secondary">
        {prefix}
        {inView ? (
          isYear ? (
            <span>{value}</span>
          ) : (
            <CountUp start={0} end={value} duration={2.5} separator="." />
          )
        ) : (
          <span>0</span>
        )}
        {suffix}
      </div>
      <div className="text-sm text-text-light uppercase tracking-wider font-mono mt-1">
        {label}
      </div>
    </div>
  );
}
