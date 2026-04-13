type Locale = "es" | "en";

const services = [
  {
    title: "JavaScript",
    textEs: "Lo uso para crear interfaces interactivas, validaciones y logica del lado del cliente.",
    textEn: "I use it to build interactive interfaces, validations, and client-side logic.",
    icon: "JS",
  },
  {
    title: "TypeScript",
    textEs: "Me permite escribir codigo mas seguro y mantenible con tipado estatico en proyectos reales.",
    textEn: "It lets me write safer, more maintainable code with static typing in real projects.",
    icon: "TS",
  },
  {
    title: "React + Next.js",
    textEs: "Desarrollo vistas dinamicas y apps modernas con rutas, componentes reutilizables y SEO.",
    textEn: "I develop dynamic views and modern apps with routing, reusable components, and SEO.",
    icon: "RN",
  },
  {
    title: "SQL",
    textEs: "Diseno consultas para organizar datos, reportes y flujos de informacion en bases de datos.",
    textEn: "I design queries to organize data, reports, and information flows in databases.",
    icon: "DB",
  },
  {
    title: "Python",
    textEs: "Lo utilizo para scripts, automatizacion de tareas y logica de apoyo en proyectos academicos.",
    textEn: "I use it for scripts, task automation, and support logic in academic projects.",
    icon: "PY",
  },
  {
    title: "Java",
    textEs: "Base solida para programacion orientada a objetos y construccion de logica estructurada.",
    textEn: "A solid base for object-oriented programming and structured business logic.",
    icon: "JV",
  },
  {
    title: "HTML + CSS",
    textEs: "Diseno interfaces limpias, responsivas y alineadas con una experiencia de usuario clara.",
    textEn: "I design clean, responsive interfaces aligned with clear user experience.",
    icon: "UI",
  },
  {
    title: "Git + GitHub",
    textEs: "Gestiono versiones, ramas y colaboracion para mantener orden y trazabilidad del desarrollo.",
    textEn: "I handle versions, branches, and collaboration to keep development organized and traceable.",
    icon: "GH",
  },
];

const skills = {
  es: [
    "Resolucion de problemas",
    "Comunicacion efectiva",
    "Trabajo en equipo",
    "Arquitectura Frontend",
    "Diseno Responsive",
    "Integracion de APIs",
    "Control de versiones",
    "Pensamiento analitico",
    "Adaptacion rapida",
    "Aprendizaje continuo",
  ],
  en: [
    "Problem solving",
    "Effective communication",
    "Team collaboration",
    "Frontend architecture",
    "Responsive design",
    "API integration",
    "Version control",
    "Analytical thinking",
    "Fast adaptation",
    "Continuous learning",
  ],
};

interface ServicesProps {
  locale: Locale;
}

export default function Services({ locale }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32 lg:space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Perfil tecnico" : "Technical profile"}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{locale === "es" ? "Mi Stack Tecnologico en Lenguajes" : "My Technology Stack in Languages"}</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="frosted-panel flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-transform duration-500 hover:-translate-y-1.5 md:gap-4 md:p-5 lg:gap-5 lg:p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22e2c2]/15 text-xs font-semibold text-[#8ef0df] md:h-11 md:w-11 md:text-sm lg:h-12 lg:w-12">
              {service.icon}
            </span>
            <h4 className="text-lg font-semibold text-slate-100 md:text-xl">{service.title}</h4>
            <p className="text-xs leading-6 text-slate-300 md:text-sm md:leading-7">{locale === "es" ? service.textEs : service.textEn}</p>
          </article>
        ))}
      </div>

      <article className="frosted-panel rounded-2xl p-4 md:p-6 lg:p-7">
        <div className="text-center">
          <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Valor profesional" : "Professional value"}</p>
          <h4 className="mt-1 text-xl font-bold text-slate-100 md:text-2xl">{locale === "es" ? "Mis Habilidades" : "My Skills"}</h4>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 md:mt-5 md:gap-3">
          {skills[locale].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#2ee3c3]/30 bg-[#17273a]/70 px-3 py-1.5 text-[11px] font-semibold text-[#b8fff4] shadow-[0_0_12px_rgba(34,226,194,0.12)] md:px-4 md:py-2 md:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
