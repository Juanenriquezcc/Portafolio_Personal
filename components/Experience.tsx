const academic = [
  {
    title: "Ingenieria de Software",
    place: "Universidad Cooperativa de Colombia",
    period: "2024 - Actualidad",
    detail: "Formacion en arquitectura de software, bases de datos, desarrollo web y trabajo colaborativo.",
  },
  {
    title: "Proyectos Universitarios",
    place: "Semestre 1 - 5",
    period: "Evolucion continua",
    detail: "Aplicacion de metodologias agiles, control de versiones y desarrollo de prototipos funcionales.",
  },
];

const work = [
  {
    title: "Proyectos Freelance Academicos",
    place: "Remoto",
    period: "2025 - Actualidad",
    detail: "Creacion de interfaces y prototipos para clientes y companeros, priorizando experiencia de usuario.",
  },
  {
    title: "Practica de Desarrollo",
    place: "En preparacion",
    period: "Proximo objetivo",
    detail: "Enfocado en aplicar conocimientos tecnicos en entornos empresariales y equipos multidisciplinarios.",
  },
];

function TimelineBlock({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; place: string; period: string; detail: string }>;
}) {
  return (
    <article className="frosted-panel rounded-2xl p-6">
      <h4 className="text-xl font-semibold text-slate-100">{title}</h4>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.place}`} className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-[#b8fff4]">{item.title}</p>
              <span className="text-xs text-slate-400">{item.period}</span>
            </div>
            <p className="text-sm text-slate-300">{item.place}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-28 space-y-7 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Trayectoria</p>
        <h3 className="text-3xl font-bold text-slate-100">Experiencia Academica y Laboral</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TimelineBlock title="Experiencia Academica" items={academic} />
        <TimelineBlock title="Experiencia Laboral" items={work} />
      </div>
    </section>
  );
}
