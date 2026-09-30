import { Quote } from "lucide-react";

import SectionHeader from "./SectionHeader";
import type { Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const testimonials = [
  {
    name: "Camila Rojas",
    roleEs: "Mentora de Proyecto",
    roleEn: "Project Mentor",
    messageEs:
      "Juan José demuestra compromiso real con la calidad del código y una gran capacidad para resolver problemas técnicos bajo presión.",
    messageEn:
      "Juan José shows real commitment to code quality and a strong ability to solve technical problems under pressure.",
  },
  {
    name: "Andrés Muñoz",
    roleEs: "Compañero de Desarrollo",
    roleEn: "Development Partner",
    messageEs:
      "Trabajar con él es fácil por su comunicación clara. Siempre propone mejoras útiles y cuida los detalles de interfaz y funcionalidad.",
    messageEn:
      "Working with him is easy because of his clear communication. He always suggests useful improvements and cares about interface and functionality details.",
  },
  {
    name: "Laura Benavides",
    roleEs: "Cliente Académica",
    roleEn: "Academic Client",
    messageEs:
      "Entregó una solución funcional, ordenada y con excelente presentación. Se nota la dedicación y su enfoque profesional.",
    messageEn:
      "He delivered a functional, organized solution with an excellent presentation. His dedication and professional focus are evident.",
  },
];

const copy = {
  es: {
    eyebrow: "Testimonios",
    title: "Cómo es trabajar conmigo",
    description: "Estas opiniones reflejan la forma en la que trabajo: enfoque en resultados, comunicación efectiva y soluciones útiles para cada necesidad.",
  },
  en: {
    eyebrow: "Testimonials",
    title: "What working with me is like",
    description: "These opinions reflect how I work: focus on results, effective communication, and useful solutions for every need.",
  },
};

export default function Testimonials({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="testimonials" className="scroll-mt-20 border-y border-line bg-raised/70 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader id="testimonials" eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <figure
              key={item.name}
              data-reveal
              style={revealDelay(i * 90)}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-line bg-raised p-6 shadow-card transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
            >
              <div className="flex flex-col gap-4">
                <Quote size={20} className="text-muted transition-colors duration-300 group-hover:text-accent" />
                <blockquote className="leading-relaxed text-fg-2">{locale === "es" ? item.messageEs : item.messageEn}</blockquote>
              </div>
              <figcaption className="flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-elevated font-mono text-xs text-accent">
                  {item.name.split(" ").map((part) => part[0]).join("")}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-fg">{item.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{locale === "es" ? item.roleEs : item.roleEn}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
