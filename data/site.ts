import { publishedTestimonials } from "./testimonials";

export type Locale = "es" | "en";
export type ThemeMode = "dark" | "light";
export type Localized = Record<Locale, string>;

export const site = {
  name: "Juan José Enríquez Córdoba",
  email: "juan.enriquezc@campusucc.edu.co",
  phone: "+57 315 7614 544",
  phoneHref: "tel:+573157614544",
  location: "Pasto, Nariño · Colombia",
  university: "Universidad Cooperativa de Colombia",
  github: "https://github.com/Juanenriquezcc",
  githubHandle: "Juanenriquezcc",
  linkedin: "https://www.linkedin.com/in/juan-enriquez-9405202b4/",
  cv: "/Modern Professional CV Resume.pdf",
  profileImage: "/images/profile.webp",
};

export type SectionId = "origin" | "stack" | "projects" | "experience" | "testimonials" | "contact";

const allSections: Array<{ id: SectionId; label: Localized }> = [
  { id: "origin", label: { es: "Origen", en: "Origin" } },
  { id: "stack", label: { es: "Stack", en: "Stack" } },
  { id: "projects", label: { es: "Proyecto", en: "Project" } },
  { id: "experience", label: { es: "Experiencia", en: "Experience" } },
  { id: "testimonials", label: { es: "Testimonios", en: "Testimonials" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
];

// Testimonials only appear (in the page and the nav) once at least one is verified; numbering follows what's visible.
export const sections = allSections.filter((section) => section.id !== "testimonials" || publishedTestimonials.length > 0);

export const sectionNumber = (id: SectionId) => String(sections.findIndex((section) => section.id === id) + 1).padStart(2, "0");
