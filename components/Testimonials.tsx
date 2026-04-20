import { Quote } from "lucide-react";

type Locale = "es" | "en";

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

interface TestimonialsProps {
  locale: Locale;
}

export default function Testimonials({ locale }: TestimonialsProps) {
  return (
    <section id="testimonios" className="fade-in-soft scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32 lg:space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "¿Cómo puedo ayudarte?" : "How I can help"}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{locale === "es" ? "Testimonios" : "Testimonials"}</h3>
        <p className="mx-auto mt-2 max-w-3xl text-xs text-slate-300 md:mt-3 md:text-sm">
          {locale === "es"
            ? "Estas opiniones reflejan la forma en la que trabajo: enfoque en resultados, comunicación efectiva y soluciones útiles para cada necesidad."
            : "These opinions reflect how I work: focus on results, effective communication, and useful solutions for every need."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
        {testimonials.map((item) => (
          <article key={item.name} className="frosted-panel rounded-2xl p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#44f0d6]/40 md:p-5 lg:p-6">
            <Quote className="text-[#8ef0df]" size={20} />
            <p className="mt-3 text-xs leading-6 text-slate-300 md:mt-4 md:text-sm md:leading-7">{locale === "es" ? item.messageEs : item.messageEn}</p>
            <div className="mt-4 border-t border-[#2ee3c3]/20 pt-3 md:mt-5 md:pt-4">
              <p className="font-semibold text-slate-100">{item.name}</p>
              <p className="text-xs text-slate-400">{locale === "es" ? item.roleEs : item.roleEn}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
