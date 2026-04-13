"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Locale = "es" | "en";

const projects = [
  {
    titleEs: "Mi Proyecto Principal",
    titleEn: "My Main Project",
    textEs: "Este espacio mostrara el proyecto mas destacado de mi portafolio con mas detalle visual.",
    textEn: "This space will showcase the most important project in my portfolio with stronger visual detail.",
    image: "/project-1.svg",
    stackEs: "Next.js + Tailwind",
    stackEn: "Next.js + Tailwind",
    stateEs: "Destacado",
    stateEn: "Featured",
  },
  {
    titleEs: "Proyecto en Evolucion",
    titleEn: "Project in Progress",
    textEs: "He avanzado paso a paso, mejorando estructura, experiencia de usuario y calidad del codigo.",
    textEn: "I have advanced step by step, improving structure, user experience, and code quality.",
    image: "/project-2.svg",
    stackEs: "React + TypeScript",
    stackEn: "React + TypeScript",
    stateEs: "En progreso",
    stateEn: "In progress",
  },
  {
    titleEs: "Proyecto Experimental",
    titleEn: "Experimental Project",
    textEs: "Area para pruebas de nuevas ideas, componentes y animaciones orientadas a resultados.",
    textEn: "A space for testing new ideas, components, and result-oriented animations.",
    image: "/project-3.svg",
    stackEs: "UI Motion",
    stackEn: "UI Motion",
    stateEs: "Laboratorio",
    stateEn: "Lab",
  },
  {
    titleEs: "Proyecto Colaborativo",
    titleEn: "Collaborative Project",
    textEs: "Seccion para trabajos en equipo donde aplico comunicacion y metodologias agiles.",
    textEn: "A section for team work where I apply communication and agile methodologies.",
    image: "/project-2.svg",
    stackEs: "Scrum + Git",
    stackEn: "Scrum + Git",
    stateEs: "Colaborativo",
    stateEn: "Collaborative",
  },
  {
    titleEs: "Proyecto Academico",
    titleEn: "Academic Project",
    textEs: "Aqui se destacaran desarrollos hechos durante mi carrera y su impacto real.",
    textEn: "Developments made during my degree and their real impact will be highlighted here.",
    image: "/project-3.svg",
    stackEs: "SQL + APIs",
    stackEn: "SQL + APIs",
    stateEs: "Academico",
    stateEn: "Academic",
  },
];

interface ProjectsBookProps {
  locale: Locale;
}

export default function ProjectsBook({ locale }: ProjectsBookProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const current = projects[active];
  const currentTitle = locale === "es" ? current.titleEs : current.titleEn;
  const currentText = locale === "es" ? current.textEs : current.textEn;
  const currentStack = locale === "es" ? current.stackEs : current.stackEn;
  const currentState = locale === "es" ? current.stateEs : current.stateEn;

  return (
    <section id="projects" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{locale === "es" ? "Portafolio en crecimiento" : "Growing portfolio"}</p>
        <h3 className="text-3xl font-bold text-slate-100">{locale === "es" ? "Mis Proyectos" : "My Projects"}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          {locale === "es"
            ? "Explora mis proyectos como si pasaras paginas: cada vista muestra contexto visual, tecnologias y objetivo principal."
            : "Explore my projects as if turning pages: each view shows visual context, technologies, and the main goal."}
        </p>
      </div>

      <div className="relative hidden md:block">
        <div className="book-shell mx-auto max-w-5xl">
          <div className="book-spine" />

          <div key={currentTitle} className="grid grid-cols-2 gap-0">
            <article className="book-page-left rounded-l-2xl border-r border-[#2ee3c3]/20 p-6">
              <div className="overflow-hidden rounded-xl border border-[#2ee3c3]/25">
                <Image
                  src={current.image}
                  alt={currentTitle}
                  width={900}
                  height={560}
                  className="aspect-16/10 h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-[#22e2c2]/15 px-3 py-1 font-semibold text-[#8ef0df]">
                  {currentState}
                </span>
                <span className="text-slate-400">{locale === "es" ? `Pagina ${active + 1} / ${projects.length}` : `Page ${active + 1} / ${projects.length}`}</span>
              </div>
            </article>

            <article className="book-page-right rounded-r-2xl p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8ef0df]">{locale === "es" ? "Proyecto activo" : "Active project"}</p>
              <h4 className="mt-3 text-3xl font-bold text-slate-100">{currentTitle}</h4>
              <p className="mt-4 text-sm leading-8 text-slate-300">{currentText}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  {currentStack}
                </span>
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  {locale === "es" ? "UI moderna" : "Modern UI"}
                </span>
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  {locale === "es" ? "Experiencia web" : "Web experience"}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Juanenriquezcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2ee3c3]/30 bg-[#16283d] px-4 py-2 text-xs font-semibold text-[#9efaf0] hover:bg-[#1f3550]"
                >
                  {locale === "es" ? "Link GitHub" : "GitHub link"}
                </a>
                <a
                  href="https://vercel.com/juanenriquezccs-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2ee3c3]/30 bg-[#22e2c2] px-4 py-2 text-xs font-semibold text-[#122033] hover:bg-[#5beed8]"
                >
                  {locale === "es" ? "Link Vercel" : "Vercel link"}
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.titleEs}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-10 bg-[#22e2c2]"
                  : "w-2.5 bg-[#2ee3c3]/40 hover:bg-[#2ee3c3]/70"
              }`}
              aria-label={`${locale === "es" ? "Ir al proyecto" : "Go to project"} ${locale === "es" ? project.titleEs : project.titleEn}`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 md:hidden">
        <article key={`mobile-${currentTitle}`} className="book-page-mobile frosted-panel overflow-hidden rounded-2xl">
          <div className="overflow-hidden border-b border-[#2ee3c3]/20">
            <Image
              src={current.image}
              alt={currentTitle}
              width={800}
              height={500}
              className="aspect-16/10 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#8ef0df]">{locale === "es" ? "Proyecto activo" : "Active project"}</p>
            <h4 className="text-xl font-semibold text-slate-100">{currentTitle}</h4>
            <p className="text-sm leading-7 text-slate-300">{currentText}</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {currentStack}
              </span>
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {currentState}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href="https://github.com/Juanenriquezcc" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">{locale === "es" ? "GitHub" : "GitHub"}</a>
              <a href="https://vercel.com/juanenriquezccs-projects" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">{locale === "es" ? "Vercel" : "Vercel"}</a>
            </div>
          </div>
        </article>

        <div className="flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={`mobile-dot-${project.titleEs}`}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-[#22e2c2]" : "w-2 bg-[#2ee3c3]/45"
              }`}
              aria-label={`${locale === "es" ? "Ir al proyecto" : "Go to project"} ${locale === "es" ? project.titleEs : project.titleEn}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
