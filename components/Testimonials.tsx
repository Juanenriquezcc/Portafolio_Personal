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
        <p className="text-sm text-emerald-700">Fortalezas</p>
        <h3 className="text-3xl font-bold text-emerald-950">Mis Skills</h3>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="frosted-panel flex flex-col gap-2 rounded-xl p-4"
            >
              <h4 className="text-base font-semibold text-emerald-950">{skill.title}</h4>
              <p className="text-sm text-emerald-950/75">{skill.text}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="frosted-panel rounded-3xl p-7">
        <p className="text-sm text-emerald-700">Contacto directo</p>
        <h3 className="text-3xl font-bold text-emerald-950">Como puedo ayudarte</h3>
        <p className="mt-3 text-sm text-emerald-950/75">
          En base a tu necesidad, puedo apoyar en diseno de interfaces,
          desarrollo web y mejoras de experiencia de usuario.
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="rounded-xl border border-emerald-500/25 bg-white/70 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-700/55 focus:border-emerald-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="rounded-xl border border-emerald-500/25 bg-white/70 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-700/55 focus:border-emerald-500 focus:outline-none"
          />
          <textarea
            placeholder="Deja aqui tu comentario"
            rows={4}
            className="resize-none rounded-xl border border-emerald-500/25 bg-white/70 px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-700/55 focus:border-emerald-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300"
          >
            Enviar comentario
          </button>
        </form>
      </article>
    </section>
  );
}
