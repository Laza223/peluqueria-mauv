"use client";

import { ABOUT, CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import { Instagram, Quote } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="sobre-mi" bg="gradient">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-4 bg-gradient-to-br from-electric-cyan/30 to-accent-red/20 rounded-2xl blur-3xl" />

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass border border-white/10">
            <Image
              src={ABOUT.image}
              alt={ABOUT.name}
              fill
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

            {/* Placeholder indicator */}
            <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full text-xs text-secondary">
              📷 Foto placeholder - Agregar foto real de Mauro
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block bg-electric-cyan text-dark text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-bold">
            Sobre mí
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-white">
            {ABOUT.name}
          </h2>

          {/* Tagline with special styling */}
          <p className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-electric-cyan text-neon-cyan">[</span>
            <span className="text-accent-red text-neon-red">ARTE</span>
            <span className="text-electric-cyan text-neon-cyan">]</span>
          </p>

          <p className="text-lg text-secondary leading-relaxed mb-8">
            {ABOUT.bio}
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">
            {ABOUT.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  {stat.number.replace("+", "")}
                  <span className="text-electric-cyan">+</span>
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative glass-card rounded-xl p-5 mb-8">
            <Quote className="w-6 h-6 text-electric-cyan mb-2 opacity-50" />
            <p className="text-lg text-white italic">"{ABOUT.phrase}"</p>
          </div>

          {/* CTA */}
          <Button
            href={CONTACT.instagram}
            variant="secondary"
            external
            className="group"
          >
            <span className="flex items-center gap-2">
              <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              {CONTACT.instagramHandle}
            </span>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
