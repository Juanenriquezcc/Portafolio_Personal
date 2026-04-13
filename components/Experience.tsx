type Locale = "es" | "en";

const academic = {
  es: [
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
  ],
  en: [
    {
      title: "Software Engineering",
      place: "Universidad Cooperativa de Colombia",
      period: "2024 - Present",
      detail: "Training in software architecture, databases, web development, and collaborative work.",
    },
    {
      title: "University Projects",
      place: "Semesters 1 - 5",
      period: "Continuous growth",
      detail: "Application of agile methods, version control, and functional prototype development.",
    },
  ],
};

const work = {
  es: [
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
  ],
  en: [
    {
      title: "Academic Freelance Projects",
      place: "Remote",
      period: "2025 - Present",
      detail: "Creation of interfaces and prototypes for clients and peers, prioritizing user experience.",
    },
    {
      title: "Development Practice",
      place: "In preparation",
      period: "Next goal",
      detail: "Focused on applying technical knowledge in business environments and multidisciplinary teams.",
    },
  ],
};

function TimelineBlock({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; place: string; period: string; detail: string }>;
}) {
  return (
    <article className="frosted-panel rounded-2xl p-4 md:p-5 lg:p-6">
      <h4 className="text-lg font-semibold text-slate-100 md:text-xl">{title}</h4>
      <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.place}`} className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-3 md:p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[#b8fff4] md:text-base">{item.title}</p>
              <span className="text-xs text-slate-400">{item.period}</span>
            </div>
            <p className="text-xs text-slate-300 md:text-sm">{item.place}</p>
            <p className="mt-2 text-xs leading-6 text-slate-300 md:text-sm md:leading-7">{item.detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

interface ExperienceProps {
  locale: Locale;
}

export default function Experience({ locale }: ExperienceProps) {
  return (
    <section id="experiencia" className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Trayectoria" : "Background"}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{locale === "es" ? "Experiencia Academica y Laboral" : "Academic and Professional Experience"}</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TimelineBlock title={locale === "es" ? "Experiencia Academica" : "Academic Experience"} items={academic[locale]} />
        <TimelineBlock title={locale === "es" ? "Experiencia Laboral" : "Professional Experience"} items={work[locale]} />
      </div>
    </section>
  );
}
