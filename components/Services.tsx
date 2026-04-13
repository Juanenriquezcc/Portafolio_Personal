"use client";

import { useState } from "react";

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

const mobileCopy = {
  es: {
    stackTitle: "Stack principal",
    stackNote: "Tecnologias que uso con mas frecuencia",
    skillsCompact: "Habilidades clave",
    more: "+{count} mas",
    less: "Ver menos",
  },
  en: {
    stackTitle: "Core stack",
    stackNote: "Technologies I use most often",
    skillsCompact: "Key skills",
    more: "+{count} more",
    less: "Show less",
  },
};

export default function Services({ locale }: ServicesProps) {
  const [showAllCompactSkills, setShowAllCompactSkills] = useState(false);
  const featuredSkills = showAllCompactSkills ? skills[locale] : skills[locale].slice(0, 6);
  const extraSkillsCount = Math.max(0, skills[locale].length - featuredSkills.length);

  return (
    <section id="services" className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32 lg:space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Perfil tecnico" : "Technical profile"}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{locale === "es" ? "Mi Stack Tecnologico en Lenguajes" : "My Technology Stack in Languages"}</h3>
      </div>

      <article className="frosted-panel rounded-2xl p-4 lg:hidden">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-semibold text-slate-100">{mobileCopy[locale].stackTitle}</h4>
          <span className="rounded-full border border-[#2ee3c3]/30 bg-[#17273a]/70 px-2.5 py-1 text-[10px] font-semibold text-[#b8fff4]">
            {services.length}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-300">{mobileCopy[locale].stackNote}</p>

        <div className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1">
          {services.map((service) => (
            <article
              key={`mobile-${service.title}`}
              className="min-w-[132px] snap-start rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/75 p-3 transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22e2c2]/15 text-[10px] font-semibold text-[#8ef0df]">
                {service.icon}
              </span>
              <p className="mt-2 text-xs font-semibold text-slate-100">{service.title}</p>
            </article>
          ))}
        </div>
      </article>

      <div className="hidden grid-cols-1 gap-4 lg:grid lg:grid-cols-4 lg:gap-8">
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

      <article className="frosted-panel rounded-2xl p-4 lg:hidden">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-semibold text-slate-100">{mobileCopy[locale].skillsCompact}</h4>
          <span className="rounded-full border border-[#2ee3c3]/30 bg-[#17273a]/70 px-2.5 py-1 text-[10px] font-semibold text-[#b8fff4]">
            {skills[locale].length}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {featuredSkills.map((skill) => (
            <span
              key={`mobile-skill-${skill}`}
              className="rounded-lg border border-[#2ee3c3]/25 bg-[#17273a]/70 px-2.5 py-2 text-[11px] font-semibold text-[#b8fff4]"
            >
              {skill}
            </span>
          ))}
        </div>

        {extraSkillsCount > 0 ? (
          <button
            type="button"
            onClick={() => setShowAllCompactSkills(true)}
            className="mt-3 block w-full text-center text-[11px] font-semibold text-[#8ef0df] transition-colors hover:text-[#b8fff4]"
          >
            {mobileCopy[locale].more.replace("{count}", String(extraSkillsCount))}
          </button>
        ) : (
          skills[locale].length > 6 && (
            <button
              type="button"
              onClick={() => setShowAllCompactSkills(false)}
              className="mt-3 block w-full text-center text-[11px] font-semibold text-[#8ef0df] transition-colors hover:text-[#b8fff4]"
            >
              {mobileCopy[locale].less}
            </button>
          )
        )}
      </article>

      <article className="hidden rounded-2xl p-4 lg:block lg:p-7 frosted-panel">
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
