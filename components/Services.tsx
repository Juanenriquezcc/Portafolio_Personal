type Locale = "es" | "en";

const stackByLocale = {
  es: {
    title: "Lenguajes y tecnologias",
    groups: [
      {
        name: "Lenguajes",
        items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
      },
      {
        name: "Frameworks",
        items: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Herramientas",
        items: ["Git", "GitHub", "APIs REST", "Figma"],
      },
    ],
  },
  en: {
    title: "Languages and technologies",
    groups: [
      {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML", "CSS"],
      },
      {
        name: "Frameworks",
        items: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Tools",
        items: ["Git", "GitHub", "REST APIs", "Figma"],
      },
    ],
  },
};

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
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">
          {locale === "es" ? "Stack y habilidades" : "Stack and skills"}
        </h3>
      </div>

      <article className="frosted-panel rounded-2xl p-4 md:p-6 lg:p-7">
        <div className="text-center">
          <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Organizacion tecnica" : "Technical organization"}</p>
          <h4 className="mt-1 text-xl font-bold text-slate-100 md:text-2xl">{stackByLocale[locale].title}</h4>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stackByLocale[locale].groups.map((group) => (
            <div key={group.name} className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-3 md:rounded-2xl md:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8ef0df]">{group.name}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#2ee3c3]/28 bg-[#17273a]/75 px-2.5 py-1 text-[11px] font-medium text-slate-200 md:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="frosted-panel rounded-2xl p-4 md:p-6 lg:p-7">
        <div className="text-center">
          <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Valor profesional" : "Professional value"}</p>
          <h4 className="mt-1 text-xl font-bold text-slate-100 md:text-2xl">{locale === "es" ? "Mis Habilidades" : "My Skills"}</h4>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-5 md:gap-3 lg:grid-cols-3">
          {skills[locale].map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-[#2ee3c3]/30 bg-[#17273a]/70 px-3 py-2 text-[11px] font-semibold text-[#b8fff4] shadow-[0_0_12px_rgba(34,226,194,0.12)] md:px-4 md:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
