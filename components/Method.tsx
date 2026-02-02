"use client";

import { METHOD_PILLARS } from "@/lib/constants";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

export default function Method() {
  return (
    <SectionWrapper id="metodo" bg="dark">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-electric-cyan uppercase tracking-wider font-bold mb-3"
        >
          Método
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
        >
          Cómo <span className="text-gradient-electric">enseño</span>
        </motion.h2>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {METHOD_PILLARS.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative glass-card p-8 rounded-2xl card-hover border-electric overflow-hidden"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="text-4xl mb-4">{pillar.icon}</div>

              {/* Number */}
              <span className="inline-flex items-center justify-center w-10 h-10 bg-electric-cyan text-dark text-xs font-bold rounded-full mb-4">
                {pillar.id}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-cyan transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
