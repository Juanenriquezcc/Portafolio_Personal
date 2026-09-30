import type { Localized } from "./site";

export interface TimelineEntry {
  /** Program, degree or role. */
  title: Localized;
  /** Institution, company or project. */
  organization: string;
  /** Extra context next to the organization, e.g. "Negocio local". */
  organizationNote?: Localized;
  period: Localized;
  /** Only when confirmed (e.g. "En curso", "Finalizado"). */
  status?: Localized;
  /** Only when confirmed (e.g. "6 meses"). */
  duration?: Localized;
  location?: Localized;
  /** Category chip: "Tecnología", "Ventas", etc. */
  area?: Localized;
  description?: Localized;
  highlights?: Localized[];
  /** Technologies or skills — only confirmed ones. */
  tags?: Localized[];
}

// Source: /public/Modern Professional CV Resume.pdf and the portfolio's previous content.
// To add an entry, append an object to the matching list (most recent first).

export const academic: TimelineEntry[] = [
  {
    title: { es: "Pregrado en Ingeniería de Software", en: "B.Sc. in Software Engineering" },
    organization: "Universidad Cooperativa de Colombia",
    period: { es: "2024 — 2028", en: "2024 — 2028" },
    status: { es: "En curso", en: "In progress" },
    area: { es: "Pregrado", en: "Undergraduate" },
    description: {
      es: "Formación en arquitectura de software, bases de datos, desarrollo web y trabajo colaborativo.",
      en: "Training in software architecture, databases, web development, and collaborative work.",
    },
    highlights: [
      {
        es: "Participación en proyectos comunitarios, sociales y personales.",
        en: "Participation in community, social, and personal projects.",
      },
      {
        es: "Aplicación de metodologías ágiles, control de versiones y desarrollo de prototipos funcionales.",
        en: "Application of agile methods, version control, and functional prototype development.",
      },
    ],
    tags: [
      { es: "Videojuego", en: "Video game" },
      { es: "Reproductor de música", en: "Music player" },
      { es: "Plataformas web", en: "Web platforms" },
    ],
  },
  {
    title: { es: "Bachiller", en: "High school diploma" },
    organization: "Colegio Militar Colombia",
    period: { es: "2012 — 2023", en: "2012 — 2023" },
    status: { es: "Finalizado", en: "Completed" },
    area: { es: "Secundaria", en: "Secondary" },
  },
];

export const work: TimelineEntry[] = [
  {
    title: { es: "Ingeniero de Software", en: "Software Engineer" },
    organization: "Universidad Cooperativa de Colombia",
    organizationNote: { es: "Estudiante", en: "Student" },
    period: { es: "2026 — Presente", en: "2026 — Present" },
    area: { es: "Tecnología", en: "Technology" },
    highlights: [
      { es: "Resolución de problemas y apoyo en tareas técnicas básicas.", en: "Problem solving and support on basic technical tasks." },
      { es: "Manejo de herramientas digitales y adaptación a nuevas tecnologías.", en: "Use of digital tools and adaptation to new technologies." },
      { es: "Organización y optimización de procesos simples.", en: "Organization and optimization of simple processes." },
    ],
  },
  {
    title: { es: "Proyectos freelance académicos", en: "Academic freelance projects" },
    organization: "Freelance",
    period: { es: "2025 — Actual", en: "2025 — Present" },
    location: { es: "Remoto", en: "Remote" },
    area: { es: "Tecnología", en: "Technology" },
    description: {
      es: "Creación de interfaces y prototipos para clientes y compañeros, priorizando la experiencia de usuario.",
      en: "Creation of interfaces and prototypes for clients and peers, prioritizing user experience.",
    },
  },
  {
    title: { es: "Vendedor de productos cárnicos", en: "Meat products salesperson" },
    organization: "Gaby Pollos",
    organizationNote: { es: "Negocio local", en: "Local business" },
    period: { es: "2025 — 2026", en: "2025 — 2026" },
    duration: { es: "7 meses", en: "7 months" },
    area: { es: "Ventas", en: "Sales" },
    highlights: [
      { es: "Ventas directas y asesoramiento al cliente.", en: "Direct sales and customer advice." },
      { es: "Manejo de efectivo y control básico de inventario.", en: "Cash handling and basic inventory control." },
      { es: "Cumplimiento de metas de venta y atención personalizada.", en: "Meeting sales targets with personalized service." },
    ],
  },
  {
    title: { es: "Mesero", en: "Waiter" },
    organization: "Aroli Restaurant",
    organizationNote: { es: "Restaurante", en: "Restaurant" },
    period: { es: "2024", en: "2024" },
    duration: { es: "6 meses", en: "6 months" },
    area: { es: "Atención al cliente", en: "Customer service" },
    highlights: [
      { es: "Atención directa al cliente con un servicio eficiente y cordial.", en: "Direct customer service, efficient and courteous." },
      { es: "Gestión de pedidos y tiempos de entrega en entornos de alta demanda.", en: "Managing orders and delivery times in high-demand settings." },
      { es: "Organización y limpieza del área de trabajo.", en: "Keeping the work area organized and clean." },
    ],
  },
];
