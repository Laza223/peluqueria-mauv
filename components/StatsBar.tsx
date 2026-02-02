"use client";

import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref, setHasStarted };
}

function StatItem({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const numericValue = parseInt(stat.number.replace(/\D/g, ""));
  const suffix = stat.number.replace(/\d/g, "");
  const { count, setHasStarted } = useCountUp(numericValue, 2000, false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onViewportEnter={() => setHasStarted(true)}
      className="text-center px-6 md:px-10"
    >
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
        {count}
        <span className="text-electric-cyan text-neon-cyan">{suffix}</span>
      </p>
      <p className="text-sm md:text-base text-secondary mt-1">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-12 md:py-16 bg-gradient-electric relative overflow-hidden">
      {/* Subtle glow lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-red/20 to-transparent" />
      </div>

      <div className="container-custom px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl py-8 md:py-10 border-glow"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:divide-x divide-white/10">
            {STATS.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
