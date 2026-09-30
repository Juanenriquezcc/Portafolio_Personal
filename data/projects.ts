import type { Localized } from "./site";

export interface ProjectImage {
  src: string;
  caption: Localized;
}

/** Case-study chapters. Every field is optional — only the ones you fill in are rendered. */
export interface CaseStudy {
  problem?: Localized;
  goal?: Localized;
  solution?: Localized;
  architecture?: Localized;
  decisions?: Localized;
  results?: Localized;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: Localized;
  type: Localized;
  description: Localized;
  /** What the product actually includes (verifiable in the live site). */
  features: Localized[];
  /** First image is the cover. Files live in /public/projects/<id>/. */
  gallery: ProjectImage[];
  technologies: string[];
  /** Language breakdown as reported by the repository (codebase composition, not skill level). */
  languages?: Array<{ name: string; percent: number }>;
  /** Your role in the project. Leave undefined until confirmed — the row is hidden. */
  role?: Localized;
  status: Localized;
  /** Public repository URL. Omit for private repositories. */
  github?: string;
  privateRepository?: boolean;
  demo?: string;
  caseStudy?: CaseStudy;
}

// Only the projects in this list are shown. To add one, append an object.
export const projects: Project[] = [
  {
    id: "papichulo",
    number: "01",
    title: "Papichulo",
    tagline: { es: "Menú digital y experiencia de pedidos", en: "Digital menu & ordering experience" },
    type: { es: "Menú digital / Plataforma de pedidos", en: "Digital menu / Ordering platform" },
    description: {
      es: "Plataforma web de menú y pedidos para el restaurante Papichulo. Los clientes exploran el menú por categorías, eligen la presentación de cada producto, agregan adiciones y completan su pedido desde el carrito.",
      en: "Web menu and ordering platform for the Papichulo restaurant. Customers browse the menu by category, pick each product's presentation, add extras, and complete their order from the cart.",
    },
    features: [
      { es: "Menú digital", en: "Digital menu" },
      { es: "Categorías de productos", en: "Product categories" },
      { es: "Productos con presentaciones", en: "Products with presentations" },
      { es: "Carrito y flujo de pedido", en: "Cart & ordering flow" },
      { es: "Información del restaurante", en: "Restaurant information" },
    ],
    gallery: [
      { src: "/projects/papichulo/01.webp", caption: { es: "Menú por categorías", en: "Menu by category" } },
      { src: "/projects/papichulo/02.webp", caption: { es: "Configuración del pedido", en: "Order configuration" } },
      { src: "/projects/papichulo/03.webp", caption: { es: "Checkout y resumen", en: "Checkout & summary" } },
    ],
    technologies: ["TypeScript", "PLpgSQL", "JavaScript", "CSS"],
    languages: [
      { name: "TypeScript", percent: 88.6 },
      { name: "PLpgSQL", percent: 9.2 },
      { name: "JavaScript", percent: 1.8 },
      { name: "CSS", percent: 0.4 },
    ],
    status: { es: "En producción", en: "In production" },
    privateRepository: true,
    demo: "https://www.menupapichulofood.website/",
  },
];
