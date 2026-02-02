"use client";

import {
  COURSES,
  FOMO_TEXTS,
  getWhatsAppLink,
  WHATSAPP_MESSAGES,
} from "@/lib/constants";
import { motion } from "framer-motion";
import { Check, Clock, Eye, MessageCircle, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";

// Simulated live counter component
function LiveCounter() {
  const [viewers, setViewers] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.min(Math.max(newValue, 8), 18);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-secondary">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-red"></span>
      </span>
      <Eye className="w-4 h-4" />
      <span>{viewers} personas viendo ahora</span>
    </div>
  );
}

// Last query timer
function LastQueryTimer() {
  const [minutes, setMinutes] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prev) => {
        if (prev >= 15) return 1;
        return prev + 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <Clock className="w-4 h-4" />
      <span>Última consulta hace {minutes} min</span>
    </div>
  );
}

export default function Academy() {
  return (
    <SectionWrapper id="cursos" bg="dark">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-red text-white rounded-full text-sm font-bold mb-4 badge-pulse glow-red"
        >
          <Zap className="w-4 h-4" />
          CUPOS LIMITADOS
        </motion.div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
          Elegí tu <span className="text-gradient-electric">Camino</span>
        </h2>
        <p className="text-secondary max-w-lg mx-auto mb-6">
          Dos programas diseñados para llevarte al siguiente nivel.
          <br />
          <span className="font-bold text-white">Los mejores no esperan.</span>
        </p>

        {/* Live indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <LiveCounter />
          <LastQueryTimer />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {COURSES.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative glass-card rounded-2xl overflow-hidden card-hover border-electric"
          >
            {/* Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                  index === 0
                    ? "bg-accent-red glow-red"
                    : "bg-electric-cyan glow-cyan text-dark"
                }`}
              >
                {course.badge}
              </span>
            </div>

            {/* Image */}
            <div className="relative h-52 md:h-60 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              {/* Duration badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                <Clock className="w-4 h-4 text-electric-cyan" />
                <span>{course.duration}</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                <Users className="w-4 h-4 text-electric-cyan" />
                <span>{course.schedule}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-extrabold mb-1 text-white">
                  {course.title}
                </h3>
                <p className="text-electric-cyan font-semibold text-sm">
                  {course.subtitle}
                </p>
              </div>

              <p className="text-secondary mb-6">{course.description}</p>

              {/* Includes */}
              <ul className="space-y-2.5 mb-6">
                {course.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-secondary"
                  >
                    <div className="w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-electric-cyan" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Urgency text */}
              <div className="flex items-center gap-2 mb-4 p-3 bg-accent-red/10 rounded-lg border border-accent-red/20">
                <Zap className="w-4 h-4 text-accent-red" />
                <span className="text-sm text-accent-red font-bold">
                  {FOMO_TEXTS.spotsLeft}
                </span>
              </div>

              {/* CTA */}
              <Button
                href={getWhatsAppLink(
                  WHATSAPP_MESSAGES[
                    course.whatsappMessage as keyof typeof WHATSAPP_MESSAGES
                  ]
                )}
                className="w-full glow-cyan"
                external
              >
                <span className="flex items-center justify-center gap-2">
                  QUIERO INFO
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
                </span>
              </Button>

              <p className="text-center text-xs text-muted mt-3">
                Respuesta inmediata por WhatsApp
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12 p-6 md:p-8 glass-card rounded-2xl"
      >
        <p className="text-lg md:text-xl font-bold mb-2 text-white">
          ¿No sabés cuál elegir?
        </p>
        <p className="text-secondary mb-4">
          Escribime y te asesoro según tu nivel y objetivos.
        </p>
        <Button
          href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
          variant="secondary"
          external
        >
          Consultar por WhatsApp
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
