"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Mi Proyecto Principal",
    text: "Este espacio mostrara el proyecto mas destacado de mi portafolio con mas detalle visual.",
    image: "/project-1.svg",
  },
  {
    title: "Proyecto en Evolucion",
    text: "He avanzado paso a paso, mejorando estructura, experiencia de usuario y calidad del codigo.",
    image: "/project-2.svg",
  },
  {
    title: "Proyecto Experimental",
    text: "Area para pruebas de nuevas ideas, componentes y animaciones orientadas a resultados.",
    image: "/project-3.svg",
  },
  {
    title: "Proyecto Colaborativo",
    text: "Seccion para trabajos en equipo donde aplico comunicacion y metodologias agiles.",
    image: "/project-2.svg",
  },
  {
    title: "Proyecto Academico",
    text: "Aqui se destacaran desarrollos hechos durante mi carrera y su impacto real.",
    image: "/project-3.svg",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4600);

    return () => clearInterval(timer);
  }, []);

  const visibleCards = useMemo(
    () =>
      [-2, -1, 0, 1, 2].map(
        (offset) => projects[(active + offset + projects.length) % projects.length],
      ),
    [active],
  );

  return (
    <section id="projects" className="space-y-8">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">Portafolio en crecimiento</p>
        <h3 className="text-3xl font-bold text-slate-100">Mis Proyectos</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
          He avanzado en cada proyecto de forma constante, mejorando codigo,
          estructura y resultados de manera progresiva.
        </p>
      </div>

      <div className="hidden items-end justify-center gap-3 md:flex">
        {visibleCards.map((project, index) => {
          const distance = Math.abs(index - 2);
          const isCenter = index === 2;
          return (
            <article
              key={`${project.title}-${index}`}
              className={`overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                isCenter
                  ? "frosted-panel project-breath w-96 scale-100 border-[#2ee3c3]/35"
                  : distance === 1
                    ? "frosted-panel w-80 scale-95 opacity-84"
                    : "frosted-panel w-72 scale-93 opacity-70"
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              {isCenter ? (
                <div className="flex flex-col gap-2 p-5">
                  <h4 className="text-lg font-semibold text-slate-100">{project.title}</h4>
                  <p className="text-sm text-slate-300">{project.text}</p>
                </div>
              ) : null}
            </article>
          );
        })}
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
