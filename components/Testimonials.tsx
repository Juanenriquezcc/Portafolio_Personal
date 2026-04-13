import { Quote } from "lucide-react";

type Locale = "es" | "en";

const testimonials = [
  {
    name: "Camila Rojas",
    roleEs: "Mentora de Proyecto",
    roleEn: "Project Mentor",
    messageEs:
      "Juan Jose demuestra compromiso real con la calidad del codigo y una gran capacidad para resolver problemas tecnicos bajo presion.",
    messageEn:
      "Juan Jose shows real commitment to code quality and a strong ability to solve technical problems under pressure.",
  },
  {
    name: "Andres Munoz",
    roleEs: "Companero de Desarrollo",
    roleEn: "Development Partner",
    messageEs:
      "Trabajar con el es facil por su comunicacion clara. Siempre propone mejoras utiles y cuida los detalles de interfaz y funcionalidad.",
    messageEn:
      "Working with him is easy because of his clear communication. He always suggests useful improvements and cares about interface and functionality details.",
  },
  {
    name: "Laura Benavides",
    roleEs: "Cliente Academica",
    roleEn: "Academic Client",
    messageEs:
      "Entrego una solucion funcional, ordenada y con excelente presentacion. Se nota la dedicacion y su enfoque profesional.",
    messageEn:
      "He delivered a functional, organized solution with an excellent presentation. His dedication and professional focus are evident.",
  },
];

interface TestimonialsProps {
  locale: Locale;
}

export default function Testimonials({ locale }: TestimonialsProps) {
  return (
    <section id="sobre-mi" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Como puedo ayudarte" : "How I can help"}</p>
        <h3 className="text-3xl font-bold text-slate-100">{locale === "es" ? "Testimonios" : "Testimonials"}</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-300">
          {locale === "es"
            ? "Estas opiniones reflejan la forma en la que trabajo: enfoque en resultados, comunicacion efectiva y soluciones utiles para cada necesidad."
            : "These opinions reflect how I work: focus on results, effective communication, and useful solutions for every need."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="frosted-panel rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-2">
            <Quote className="text-[#8ef0df]" size={22} />
            <p className="mt-4 text-sm leading-7 text-slate-300">{locale === "es" ? item.messageEs : item.messageEn}</p>
            <div className="mt-5 border-t border-[#2ee3c3]/20 pt-4">
              <p className="font-semibold text-slate-100">{item.name}</p>
              <p className="text-xs text-slate-400">{locale === "es" ? item.roleEs : item.roleEn}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
