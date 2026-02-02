"use client";

import { CONTACT, NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-custom px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo-mauv.png"
              alt={SITE_CONFIG.name}
              width={120}
              height={48}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-secondary max-w-sm mb-4">
              Academia de barbería profesional en Luján. Técnica, práctica y
              estilo propio.
            </p>

            {/* Tagline */}
            <p className="text-xl font-bold">
              <span className="text-electric-cyan text-neon-cyan">[</span>
              <span className="text-accent-red text-neon-red">ARTE</span>
              <span className="text-electric-cyan text-neon-cyan">]</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold mb-4 text-white">Navegación</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-electric-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold mb-4 text-white">Contacto</p>
            <ul className="space-y-3 text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-electric-cyan">📍</span>
                {CONTACT.address}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-electric-cyan" />
                {CONTACT.phoneDisplay}
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-electric-cyan transition-colors group"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-muted">
            Desarrollado por{" "}
            <a
              href="https://axxensystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-cyan hover:text-electric-cyan-light transition-colors font-medium"
            >
              Axxen Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
