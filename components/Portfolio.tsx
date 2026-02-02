"use client";

import { CONTACT, PORTFOLIO_IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";

export default function Portfolio() {
  return (
    <SectionWrapper id="trabajos" bg="dark">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-electric-cyan uppercase tracking-wider font-bold mb-3"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white"
        >
          Mis <span className="text-gradient-electric">trabajos</span>
        </motion.h2>
        <p className="text-secondary max-w-lg mx-auto">
          Algunos ejemplos de cortes y estilos que vas a aprender.
        </p>

        {/* Placeholder note */}
        <p className="text-xs text-muted mt-4 glass inline-block px-4 py-2 rounded-full">
          📷 Fotos placeholder - Se reemplazarán con trabajos reales de Mauro
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {PORTFOLIO_IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative aspect-square rounded-xl overflow-hidden glass group cursor-pointer border-electric"
          >
            <Image
              src={src}
              alt={`Trabajo ${index + 1}`}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white text-sm font-medium flex items-center gap-1">
                Ver en Instagram
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-electric-cyan text-dark rounded-full font-bold hover:shadow-glow-cyan transition-all group"
        >
          <Instagram className="w-5 h-5" />
          Ver más en Instagram
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
