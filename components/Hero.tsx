"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 -right-40 w-[500px] h-[500px] bg-electric-cyan/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent-red/15 rounded-full blur-[120px]"
        />

        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-cyan rounded-full shadow-glow-cyan"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent-red rounded-full"
        />
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-electric-cyan rounded-full shadow-glow-cyan"
        />
        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent-red rounded-full"
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto pt-16 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cyan shadow-glow-cyan"></span>
          </span>
          <span className="text-white font-medium">
            🔥 Inscripciones Abiertas
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4"
        >
          <span className="inline-flex items-center gap-3">
            <span>Convertite en</span>
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-electric-cyan animate-pulse" />
          </span>
          <br />
          <span className="text-gradient-electric">Barbero Profesional</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          {SITE_CONFIG.tagline.split("[").map((part, i) => {
            if (i === 0)
              return (
                <span key={i} className="text-white">
                  {part}
                </span>
              );
            const [inside, rest] = part.split("]");
            return (
              <span key={i}>
                <span className="text-electric-cyan text-neon-cyan">[</span>
                <span className="text-accent-red text-neon-red">{inside}</span>
                <span className="text-electric-cyan text-neon-cyan">]</span>
                <span className="text-white">{rest}</span>
              </span>
            );
          })}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10"
        >
          Academia de barbería en Luján. Técnica, práctica y estilo propio.
          <br className="hidden md:block" />
          <span className="text-electric-cyan font-semibold">
            Aprendé haciendo
          </span>
          , no mirando.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#cursos" size="lg" className="glow-cyan">
            Ver Cursos
          </Button>
          <Button href="#sobre-mi" variant="secondary" size="lg">
            Conocer a Mauro
          </Button>
        </motion.div>

        {/* Social proof micro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-muted"
        >
          <span className="text-electric-cyan">+50</span> alumnos formados ·{" "}
          <span className="text-electric-cyan">+5000</span> cortes de
          experiencia
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() =>
          document
            .getElementById("metodo")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-electric-cyan transition-colors"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
