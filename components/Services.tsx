import type { IconType } from "react-icons";
import { SiCss, SiGit, SiJavascript, SiOpenjdk, SiPostgresql, SiPython, SiReact, SiTypescript } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import type { Locale, Localized } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const technologies: Array<{ title: string; code: string; text: Localized; icon: IconType }> = [
  {
    title: "JavaScript",
    code: "JS",
    text: {
      es: "Lo uso para crear interfaces interactivas, validaciones y lógica del lado del cliente.",
      en: "I use it to build interactive interfaces, validations, and client-side logic.",
    },
    icon: SiJavascript,
  },
  {
    title: "TypeScript",
    code: "TS",
    text: {
      es: "Me permite escribir código más seguro y mantenible con tipado estático en proyectos reales.",
      en: "It lets me write safer, more maintainable code with static typing in real projects.",
    },
    icon: SiTypescript,
  },
  {
    title: "React + Next.js",
    code: "NEXT",
    text: {
      es: "Desarrollo vistas dinámicas y apps modernas con rutas, componentes reutilizables y SEO.",
      en: "I develop dynamic views and modern apps with routing, reusable components, and SEO.",
    },
    icon: SiReact,
  },
  {
    title: "SQL",
    code: "SQL",
    text: {
      es: "Diseño consultas para organizar datos, reportes y flujos de información en bases de datos.",
      en: "I design queries to organize data, reports, and information flows in databases.",
    },
    icon: SiPostgresql,
  },
  {
    title: "Python",
    code: "PY",
    text: {
      es: "Lo utilizo para scripts, automatización de tareas y lógica de apoyo en proyectos académicos.",
      en: "I use it for scripts, task automation, and support logic in academic projects.",
    },
    icon: SiPython,
  },
  {
    title: "Java",
    code: "JAVA",
    text: {
      es: "Base sólida para programación orientada a objetos y construcción de lógica estructurada.",
      en: "A solid base for object-oriented programming and structured business logic.",
    },
    icon: SiOpenjdk,
  },
  {
    title: "HTML + CSS",
    code: "CSS",
    text: {
      es: "Diseño interfaces limpias, responsivas y alineadas con una experiencia de usuario clara.",
      en: "I design clean, responsive interfaces aligned with clear user experience.",
    },
    icon: SiCss,
  },
  {
    title: "Git + GitHub",
    code: "GIT",
    text: {
      es: "Gestiono versiones, ramas y colaboración para mantener orden y trazabilidad del desarrollo.",
      en: "I handle versions, branches, and collaboration to keep development organized and traceable.",
    },
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

const copy = {
  es: {
    eyebrow: "Stack tecnológico",
    title: "Lenguajes y tecnologías",
    description: "Las herramientas con las que construyo, y para qué las uso.",
    skillsEyebrow: "Valor profesional",
    skillsTitle: "Habilidades",
  },
  en: {
    eyebrow: "Tech stack",
    title: "Languages & technologies",
    description: "The tools I build with, and what I use them for.",
    skillsEyebrow: "Professional value",
    skillsTitle: "Skills",
  },
};

export default function Services({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="stack" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader id="stack" eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {technologies.map((tech, i) => (
            <article
              key={tech.title}
              data-reveal
              style={revealDelay((i % 4) * 70)}
              className="group flex flex-col gap-4 rounded-2xl border border-line bg-raised p-6 shadow-card transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <tech.icon size={22} className="text-muted transition-colors duration-300 group-hover:text-accent" />
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted">
                  {`${String(i + 1).padStart(2, "0")} // ${tech.code}`}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-fg">{tech.title}</h3>
              <p className="text-sm leading-relaxed text-fg-2">{tech.text[locale]}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="grid grid-cols-1 gap-8 border-t border-line pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-teal">{t.skillsEyebrow}</span>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-fg md:text-3xl">{t.skillsTitle}</h3>
          </div>
          <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {skills[locale].map((skill, i) => (
              <li
                key={skill}
                className="group flex items-baseline gap-4 border-b border-line py-4 transition-colors duration-200 hover:border-line-strong"
              >
                <span className="font-mono text-[11px] text-muted transition-colors group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-fg-2 transition-colors group-hover:text-fg">{skill}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
