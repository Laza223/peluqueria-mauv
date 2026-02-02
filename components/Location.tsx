"use client";

import { CONTACT, getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";

export default function Location() {
  return (
    <SectionWrapper id="contacto" bg="gradient">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-electric-cyan text-dark text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-bold">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
            Visitanos
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            Te esperamos en la academia para conocerte y contarte más sobre los
            cursos. El primer paso es escribirnos.
          </p>

          {/* Info Cards */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 glass-card p-5 rounded-xl card-hover">
              <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-electric-cyan" />
              </div>
              <div>
                <p className="font-bold text-white">{CONTACT.address}</p>
                <p className="text-sm text-muted mt-1">
                  Horarios flexibles - Coordiná tu visita
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 glass-card p-5 rounded-xl card-hover">
              <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-electric-cyan" />
              </div>
              <div>
                <p className="font-bold text-white">{CONTACT.phoneDisplay}</p>
                <p className="text-sm text-muted mt-1">
                  Respuesta inmediata por WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            size="lg"
            external
            className="glow-cyan"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </span>
          </Button>

          {/* Motivational quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-electric-cyan" />
            <p className="text-secondary italic">
              "Dar todo, que la vida devuelve en grande ✨"
            </p>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-electric-cyan/20 to-accent-red/15 rounded-3xl blur-3xl opacity-60" />

          <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-white/10">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
                CONTACT.address
              )}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
