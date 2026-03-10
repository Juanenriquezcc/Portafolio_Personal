const skills = [
  {
    title: "Diseno de Interfaces",
    text: "Construyo vistas limpias, enfocadas en claridad visual y facilidad de uso.",
  },
  {
    title: "Desarrollo Web",
    text: "Implemento aplicaciones con React y Next.js con componentes reutilizables.",
  },
  {
    title: "Resolucion de Problemas",
    text: "Analizo requerimientos y convierto ideas en soluciones funcionales.",
  },
  {
    title: "Trabajo en Equipo",
    text: "Me adapto a roles colaborativos y organizo tareas con buena comunicacion.",
  },
];

export default function Testimonials() {
  return (
    <section id="sobre-mi" className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <article className="frosted-panel rounded-3xl p-7">
        <p className="text-sm text-[#8ef0df]">Fortalezas</p>
        <h3 className="text-3xl font-bold text-slate-100">Mis Skills</h3>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="frosted-panel flex flex-col gap-2 rounded-xl p-4"
            >
              <h4 className="text-base font-semibold text-slate-100">{skill.title}</h4>
              <p className="text-sm text-slate-300">{skill.text}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="frosted-panel rounded-3xl p-7">
        <p className="text-sm text-[#8ef0df]">Contacto directo</p>
        <h3 className="text-3xl font-bold text-slate-100">Como puedo ayudarte</h3>
        <p className="mt-3 text-sm text-slate-300">
          En base a tu necesidad, puedo apoyar en diseno de interfaces,
          desarrollo web y mejoras de experiencia de usuario.
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="rounded-xl border border-[#2ee3c3]/30 bg-[#1a2a3b] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-[#22e2c2] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="rounded-xl border border-[#2ee3c3]/30 bg-[#1a2a3b] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-[#22e2c2] focus:outline-none"
          />
          <textarea
            placeholder="Deja aqui tu comentario"
            rows={4}
            className="resize-none rounded-xl border border-[#2ee3c3]/30 bg-[#1a2a3b] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-[#22e2c2] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#22e2c2] px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#59ecd4]"
          >
            Enviar comentario
          </button>
        </form>
      </article>
    </section>
  );
}
