import type { Localized } from "./site";

export interface Testimonial {
  name: string;
  role: Localized;
  message: Localized;
  /** Only verified testimonials (real, confirmable people) are published. */
  verified: boolean;
}

// These came from the previous version of the site and have not been confirmed as real people,
// so they stay unpublished. Set `verified: true` only for recommendations you can back up.
export const testimonials: Testimonial[] = [
  {
    name: "Camila Rojas",
    role: { es: "Mentora de Proyecto", en: "Project Mentor" },
    message: {
      es: "Juan José demuestra compromiso real con la calidad del código y una gran capacidad para resolver problemas técnicos bajo presión.",
      en: "Juan José shows real commitment to code quality and a strong ability to solve technical problems under pressure.",
    },
    verified: false,
  },
  {
    name: "Andrés Muñoz",
    role: { es: "Compañero de Desarrollo", en: "Development Partner" },
    message: {
      es: "Trabajar con él es fácil por su comunicación clara. Siempre propone mejoras útiles y cuida los detalles de interfaz y funcionalidad.",
      en: "Working with him is easy because of his clear communication. He always suggests useful improvements and cares about interface and functionality details.",
    },
    verified: false,
  },
  {
    name: "Laura Benavides",
    role: { es: "Cliente Académica", en: "Academic Client" },
    message: {
      es: "Entregó una solución funcional, ordenada y con excelente presentación. Se nota la dedicación y su enfoque profesional.",
      en: "He delivered a functional, organized solution with an excellent presentation. His dedication and professional focus are evident.",
    },
    verified: false,
  },
];

export const publishedTestimonials = testimonials.filter((item) => item.verified);
