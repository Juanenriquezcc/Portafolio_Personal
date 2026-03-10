"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Mi Proyecto Principal",
    text: "Este espacio mostrara el proyecto mas destacado de mi portafolio con mas detalle visual.",
    image: "/project-1.svg",
    stack: "Next.js + Tailwind",
    state: "Destacado",
  },
  {
    title: "Proyecto en Evolucion",
    text: "He avanzado paso a paso, mejorando estructura, experiencia de usuario y calidad del codigo.",
    image: "/project-2.svg",
    stack: "React + TypeScript",
    state: "En progreso",
  },
  {
    title: "Proyecto Experimental",
    text: "Area para pruebas de nuevas ideas, componentes y animaciones orientadas a resultados.",
    image: "/project-3.svg",
    stack: "UI Motion",
    state: "Laboratorio",
  },
  {
    title: "Proyecto Colaborativo",
    text: "Seccion para trabajos en equipo donde aplico comunicacion y metodologias agiles.",
    image: "/project-2.svg",
    stack: "Scrum + Git",
    state: "Colaborativo",
  },
  {
    title: "Proyecto Academico",
    text: "Aqui se destacaran desarrollos hechos durante mi carrera y su impacto real.",
    image: "/project-3.svg",
    stack: "SQL + APIs",
    state: "Academico",
  },
];

export default function ProjectsBook() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const current = projects[active];

  return (
    <section id="projects" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Portafolio en crecimiento</p>
        <h3 className="text-3xl font-bold text-slate-100">MIS PROYECTOS</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          Explora mis proyectos como si pasaras paginas: cada vista muestra
          contexto visual, tecnologias y objetivo principal.
        </p>
      </div>

      <div className="relative hidden md:block">
        <div className="book-shell mx-auto max-w-5xl">
          <div className="book-spine" />

          <div key={current.title} className="grid grid-cols-2 gap-0">
            <article className="book-page-left rounded-l-2xl border-r border-[#2ee3c3]/20 p-6">
              <div className="overflow-hidden rounded-xl border border-[#2ee3c3]/25">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={900}
                  height={560}
                  className="aspect-16/10 h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-[#22e2c2]/15 px-3 py-1 font-semibold text-[#8ef0df]">
                  {current.state}
                </span>
                <span className="text-slate-400">{`Pagina ${active + 1} / ${projects.length}`}</span>
              </div>
            </article>

            <article className="book-page-right rounded-r-2xl p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8ef0df]">Proyecto activo</p>
              <h4 className="mt-3 text-3xl font-bold text-slate-100">{current.title}</h4>
              <p className="mt-4 text-sm leading-8 text-slate-300">{current.text}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  {current.stack}
                </span>
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  UI moderna
                </span>
                <span className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                  Experiencia web
                </span>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-10 bg-[#22e2c2]"
                  : "w-2.5 bg-[#2ee3c3]/40 hover:bg-[#2ee3c3]/70"
              }`}
              aria-label={`Ir al proyecto ${project.title}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:hidden">
        {projects.slice(0, 3).map((project) => (
          <article
            key={project.title}
            className="frosted-panel overflow-hidden rounded-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold text-slate-100">{project.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{project.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
