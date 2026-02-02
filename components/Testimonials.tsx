"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";
import { MapPin, Quote, Star } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonios" bg="gradient">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-electric-cyan uppercase tracking-wider font-bold mb-3"
        >
          Testimonios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white"
        >
          Lo que dicen los{" "}
          <span className="text-gradient-electric">alumnos</span>
        </motion.h2>
        <p className="text-secondary max-w-lg mx-auto">
          Historias reales de personas que decidieron cambiar su vida.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 card-hover"
          >
            {/* Quote icon */}
            <Quote className="w-8 h-8 text-electric-cyan/30 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-electric-cyan text-electric-cyan"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-white leading-relaxed mb-6 text-lg">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-electric-cyan/40">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-electric-cyan" />
                  {testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
