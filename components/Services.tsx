"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import { SiCss, SiGit, SiJavascript, SiOpenjdk, SiPostgresql, SiPython, SiReact, SiTypescript } from "react-icons/si";

type Locale = "es" | "en";

const services: Array<{
  title: string;
  textEs: string;
  textEn: string;
  icon: IconType;
}> = [
  {
    title: "JavaScript",
    textEs: "Lo uso para crear interfaces interactivas, validaciones y lógica del lado del cliente.",
    textEn: "I use it to build interactive interfaces, validations, and client-side logic.",
    icon: SiJavascript,
  },
  {
    title: "TypeScript",
    textEs: "Me permite escribir código más seguro y mantenible con tipado estático en proyectos reales.",
    textEn: "It lets me write safer, more maintainable code with static typing in real projects.",
    icon: SiTypescript,
  },
  {
    title: "React + Next.js",
    textEs: "Desarrollo vistas dinámicas y apps modernas con rutas, componentes reutilizables y SEO.",
    textEn: "I develop dynamic views and modern apps with routing, reusable components, and SEO.",
    icon: SiReact,
  },
  {
    title: "SQL",
    textEs: "Diseño consultas para organizar datos, reportes y flujos de información en bases de datos.",
    textEn: "I design queries to organize data, reports, and information flows in databases.",
    icon: SiPostgresql,
  },
  {
    title: "Python",
    textEs: "Lo utilizo para scripts, automatización de tareas y lógica de apoyo en proyectos académicos.",
    textEn: "I use it for scripts, task automation, and support logic in academic projects.",
    icon: SiPython,
  },
  {
    title: "Java",
    textEs: "Base sólida para programación orientada a objetos y construcción de lógica estructurada.",
    textEn: "A solid base for object-oriented programming and structured business logic.",
    icon: SiOpenjdk,
  },
  {
    title: "HTML + CSS",
    textEs: "Diseño interfaces limpias, responsivas y alineadas con una experiencia de usuario clara.",
    textEn: "I design clean, responsive interfaces aligned with clear user experience.",
    icon: SiCss,
  },
  {
    title: "Git + GitHub",
    textEs: "Gestiono versiones, ramas y colaboración para mantener orden y trazabilidad del desarrollo.",
    textEn: "I handle versions, branches, and collaboration to keep development organized and traceable.",
    icon: SiGit,
  },
];

const skills = {
  es: [
    "Resolución de problemas",
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Arquitectura Frontend",
    "Diseño Responsive",
    "Integración de APIs",
    "Control de versiones",
    "Pensamiento analítico",
    "Adaptación rápida",
    "Aprendizaje continuo",
    "Implementación de IA",
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
    "AI implementation",
  ],
};

interface ServicesProps {
  locale: Locale;
}

const mobileCopy = {
  es: {
    stackTitle: "Stack principal",
    stackNote: "Tecnologías que uso con más frecuencia",
    skillsCompact: "Habilidades clave",
    more: "+{count} más",
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
    <section id="services" className="fade-in-soft scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32 lg:space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Perfil técnico" : "Technical profile"}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{locale === "es" ? "Mi Stack Tecnológico en Lenguajes" : "My Technology Stack in Languages"}</h3>
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
              className="min-w-33 snap-start rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/75 p-3 transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22e2c2]/15 text-[#8ef0df]">
                  <service.icon size={18} />
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
            className="group frosted-panel flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-[#44f0d6]/40 md:gap-4 md:p-5 lg:gap-5 lg:p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22e2c2]/15 text-[#8ef0df] transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11 lg:h-12 lg:w-12">
              <service.icon size={22} />
            </span>
            <h4 className="text-lg font-semibold text-slate-100 md:text-xl">{service.title}</h4>
            <p className="text-xs leading-6 text-slate-300 md:text-sm md:leading-7">{locale === "es" ? service.textEs : service.textEn}</p>
          </article>
        ))}
      </div>

      <article className="frosted-panel rounded-2xl p-4 md:hidden">
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

      <article className="hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 md:block md:p-6 lg:p-7 frosted-panel">
        <div className="text-center">
          <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Valor profesional" : "Professional value"}</p>
          <h4 className="mt-1 text-xl font-bold text-slate-100 md:text-2xl">{locale === "es" ? "Mis Habilidades" : "My Skills"}</h4>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 md:mt-5 md:gap-3">
          {skills[locale].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#2ee3c3]/30 bg-[#17273a]/70 px-3 py-1.5 text-[11px] font-semibold text-[#b8fff4] shadow-[0_0_12px_rgba(34,226,194,0.12)] transition-transform duration-300 hover:-translate-y-0.5 md:px-4 md:py-2 md:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
