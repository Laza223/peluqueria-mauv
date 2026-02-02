// Constantes del proyecto MAUV - Academia de Barbería

export const SITE_CONFIG = {
  name: "MAUV",
  tagline: "INSPIR[ARTE]",
  description:
    "Academia de barbería profesional en Luján. Cursos iniciales y avanzados con técnica, práctica y estilo propio.",
};

export const CONTACT = {
  phone: "+5492323540336",
  phoneDisplay: "+54 9 2323 54-0336",
  instagram: "https://www.instagram.com/mauv311/",
  instagramHandle: "@mauv311",
  address: "Mitre 2131, Luján, Buenos Aires",
};

export const WHATSAPP_MESSAGES = {
  initial: encodeURIComponent(
    "Hola Mauro! 👋 Quiero info sobre el curso INICIAL de barbería."
  ),
  advanced: encodeURIComponent(
    "Hola Mauro! 👋 Me interesa el curso AVANZADO de barbería."
  ),
  general: encodeURIComponent(
    "Hola Mauro! 👋 Vi tu web y quiero más info sobre los cursos."
  ),
};

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${CONTACT.phone}?text=${message}`;

export const NAV_LINKS = [
  { href: "#metodo", label: "Método" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#cursos", label: "Cursos" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

// Stats actualizados
export const STATS = [
  { number: "5+", label: "Años de experiencia" },
  { number: "50+", label: "Alumnos formados" },
  { number: "5000+", label: "Cortes realizados" },
];

// Cursos con información placeholder
export const COURSES = [
  {
    id: "inicial",
    title: "Barbería Inicial",
    subtitle: "Desde cero a profesional",
    description:
      "Aprendé las bases de la barbería moderna. Ideal si querés arrancar en el mundo del corte masculino y salir trabajando.",
    duration: "3 meses",
    schedule: "2 veces por semana",
    includes: [
      "Corte masculino clásico y moderno",
      "Manejo profesional de tijera y máquina",
      "Degradados básicos e intermedios",
      "Perfilado y diseño de barba",
      "Kit de herramientas incluido",
      "Certificado de cursada",
    ],
    badge: "🔥 MÁS ELEGIDO",
    whatsappMessage: "initial",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop",
  },
  {
    id: "avanzado",
    title: "Barbería Avanzada",
    subtitle: "Perfeccioná tu técnica",
    description:
      "Para barberos con experiencia que quieren llevar su trabajo al siguiente nivel. Técnicas de élite y tendencias actuales.",
    duration: "2 meses",
    schedule: "2 veces por semana",
    includes: [
      "Degradados de alta precisión",
      "Texturas y acabados premium",
      "Colorimetría masculina",
      "Diseños artísticos y freestyle",
      "Técnicas de fidelización de clientes",
      "Certificado profesional",
    ],
    badge: "⚡ NIVEL PRO",
    whatsappMessage: "advanced",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
  },
];

// FOMO Elements
export const FOMO_TEXTS = {
  viewing: "12 personas viendo ahora",
  lastQuery: "Última consulta hace 3 min",
  spotsLeft: "Solo 4 lugares disponibles",
  weeklyQueries: "⚡ 18 consultas esta semana",
};

export const METHOD_PILLARS = [
  {
    id: "01",
    title: "Técnica",
    description:
      "Dominio total de herramientas. Tijera, máquina, navaja. Cada movimiento con precisión.",
    icon: "✂️",
  },
  {
    id: "02",
    title: "Práctica",
    description:
      "Aprendés haciendo. Clases 100% hands-on desde el día uno. Nada de teoría al pedo.",
    icon: "🎯",
  },
  {
    id: "03",
    title: "Estilo",
    description:
      "Desarrollá tu visión única. Encontrá tu identidad como barbero y destacate.",
    icon: "✨",
  },
];

// Testimonios argentinos realistas
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Tomás G.",
    location: "Luján",
    text: "Vine sin saber agarrar una tijera, hoy laburo en un local de Palermo cobrando mis propios precios. El Mau te enseña posta.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Facundo L.",
    location: "Mercedes",
    text: "Nada de teoría al pedo, desde el primer día tenés la máquina en la mano. En 3 meses ya estaba atendiendo clientes.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Nico R.",
    location: "Luján",
    text: "Pensé que iba a tardar años. Hoy tengo mi propio espacio y todos me preguntan dónde aprendí. Siempre recomiendo a Mauro.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Braian S.",
    location: "San Andrés de Giles",
    text: "Lo mejor es el ambiente. Te sentís en confianza para preguntar cualquier cosa. El grupo que se arma es un golazo.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
  },
];

// Portfolio con imágenes placeholder de barbería
export const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&h=600&fit=crop",
];

export const ABOUT = {
  name: "Mauro",
  tagline: "INSPIR[ARTE]",
  phrase: "Tu momento de cambiar 🔄",
  bio: "5 años formando barberos. Mi método es simple: técnica + práctica + estilo propio. No enseño solo a cortar pelo, enseño a construir un oficio.",
  stats: [
    { number: "5+", label: "Años" },
    { number: "50+", label: "Alumnos" },
    { number: "5k+", label: "Cortes" },
  ],
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop",
};
