import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camila Rojas",
    role: "Mentora de Proyecto",
    message:
      "Juan Jose demuestra compromiso real con la calidad del codigo y una gran capacidad para resolver problemas tecnicos bajo presion.",
  },
  {
    name: "Andres Munoz",
    role: "Companero de Desarrollo",
    message:
      "Trabajar con el es facil por su comunicacion clara. Siempre propone mejoras utiles y cuida los detalles de interfaz y funcionalidad.",
  },
  {
    name: "Laura Benavides",
    role: "Cliente Academica",
    message:
      "Entrego una solucion funcional, ordenada y con excelente presentacion. Se nota la dedicacion y su enfoque profesional.",
  },
];

export default function Testimonials() {
  return (
    <section id="sobre-mi" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Como puedo ayudarte</p>
        <h3 className="text-3xl font-bold text-slate-100">Testimonios</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-300">
          Estas opiniones reflejan la forma en la que trabajo: enfoque en
          resultados, comunicacion efectiva y soluciones utiles para cada
          necesidad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="frosted-panel rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-2">
            <Quote className="text-[#8ef0df]" size={22} />
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.message}</p>
            <div className="mt-5 border-t border-[#2ee3c3]/20 pt-4">
              <p className="font-semibold text-slate-100">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
