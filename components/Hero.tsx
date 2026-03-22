"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const roles = [
  "Ingeniero de Software",
  "Desarrollador Frontend",
  "Analista y creador de soluciones",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const cycleMs = 2400;
    const fadeMs = 220;
    let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      setRoleVisible(false);

      fadeTimeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, fadeMs);
    }, cycleMs);

    return () => {
      clearInterval(interval);
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-28 grid grid-cols-1 justify-items-center gap-7 px-2 py-6 text-center md:scroll-mt-32 md:py-8"
    >
      <p className="text-lg text-slate-300">
        Hola, <span className="text-[#4df2d8]">Soy</span>
      </p>

      <div className="space-y-2">
        <h1 className="bg-linear-to-r from-white via-[#9efaf0] to-[#22e2c2] bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow-[0_0_18px_rgba(34,226,194,0.35)] md:text-5xl">
          Juan Jose Enriquez Cordoba
        </h1>
        <h2
          className={`h-8 text-xl font-semibold text-[#b7fbf1] transition-all duration-200 md:text-2xl ${
            roleVisible ? "translate-y-0 opacity-100 blur-0" : "-translate-y-1 opacity-0 blur-[1px]"
          }`}
        >
          {roles[roleIndex]}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-8 text-slate-200 md:text-base">
          Estudiante de Ingenieria de Software en la Universidad Cooperativa de
          Colombia. Me especializo en crear soluciones web funcionales,
          escalables y visualmente profesionales, integrando buenas practicas
          de desarrollo, experiencia de usuario y despliegue continuo.
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <a
          href="tel:+573157614544"
          className="rounded-full border border-[#43ecd2]/45 bg-[#1a2a3d] px-6 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_22px_rgba(34,226,194,0.22)] transition-transform duration-500 hover:-translate-y-1"
        >
          Contacto: <span className="text-base text-[#4df2d8]">+57 315 7614 544</span>
        </a>
        <a
          href="/cv-juan-jose-enriquez.pdf"
          download="HOJA_DE_VIDA_JUAN_JOSE_ENRIQUEZ.pdf"
          className="rounded-full border border-[#2ee3c3]/35 bg-[#17273a] px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-[#20344b]"
        >
          Ver CV / Perfil
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-slate-300">
        <span className="mr-2 text-sm text-slate-400">Links principales</span>
        <a
          href="https://github.com/Juanenriquezcc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-[#8ef0df] hover:border-[#22e2c2]"
        >
          <Github size={16} />
        </a>
        <a
          href="https://vercel.com/juanenriquezccs-projects"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vercel"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-[#8ef0df] hover:border-[#22e2c2]"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
