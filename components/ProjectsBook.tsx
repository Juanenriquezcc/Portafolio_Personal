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
        <h3 className="text-3xl font-bold text-slate-100">Mis Proyectos</h3>
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

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Juanenriquezcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2ee3c3]/30 bg-[#16283d] px-4 py-2 text-xs font-semibold text-[#9efaf0] hover:bg-[#1f3550]"
                >
                  Link GitHub
                </a>
                <a
                  href="https://vercel.com/juanenriquezccs-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2ee3c3]/30 bg-[#22e2c2] px-4 py-2 text-xs font-semibold text-[#122033] hover:bg-[#5beed8]"
                >
                  Link Vercel
                </a>
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

      <div className="space-y-4 md:hidden">
        <article key={`mobile-${current.title}`} className="book-page-mobile frosted-panel overflow-hidden rounded-2xl">
          <div className="overflow-hidden border-b border-[#2ee3c3]/20">
            <Image
              src={current.image}
              alt={current.title}
              width={800}
              height={500}
              className="aspect-16/10 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#8ef0df]">Proyecto activo</p>
            <h4 className="text-xl font-semibold text-slate-100">{current.title}</h4>
            <p className="text-sm leading-7 text-slate-300">{current.text}</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {current.stack}
              </span>
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {current.state}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href="https://github.com/Juanenriquezcc" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">GitHub</a>
              <a href="https://vercel.com/juanenriquezccs-projects" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">Vercel</a>
            </div>
          </div>
        </article>

        <div className="flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={`mobile-dot-${project.title}`}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-[#22e2c2]" : "w-2 bg-[#2ee3c3]/45"
              }`}
              aria-label={`Ir al proyecto ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
