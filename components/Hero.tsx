"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

type Locale = "es" | "en";

const roleCopy = {
  es: ["Ingeniero de Software", "Desarrollador Frontend", "Analista y creador de soluciones"],
  en: ["Software Engineer", "Frontend Developer", "Solutions Analyst and Builder"],
};

const copy = {
  es: {
    intro: "Hola, Soy",
    badge: "Construyendo experiencias digitales con detalle y dedicación.",
    paragraph:
      "Estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me especializo en crear soluciones web funcionales, escalables y visualmente profesionales, integrando buenas prácticas de desarrollo, experiencia de usuario y despliegue continuo.",
    contact: "Contacto",
    cv: "Ver CV / Perfil",
    links: "Links principales",
  },
  en: {
    intro: "Hello, I am",
    badge: "Building digital experiences with detail and care.",
    paragraph:
      "Software Engineering student at Universidad Cooperativa de Colombia. I focus on building functional, scalable, and polished web solutions, combining development best practices, user experience, and continuous delivery.",
    contact: "Contact",
    cv: "View CV / Profile",
    links: "Main links",
  },
};

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const roles = roleCopy[locale];

  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/Modern Professional CV Resume.pdf";
    link.download = "Modern_Professional_CV_Resume.pdf";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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
  }, [roles.length]);

  return (
    <section
      id="home"
      className="fade-in-soft scroll-mt-24 grid grid-cols-1 justify-items-center gap-5 px-1 py-4 text-center md:scroll-mt-28 md:gap-6 md:py-6 lg:scroll-mt-32 lg:gap-7 lg:py-8"
    >
      <p className="text-base text-slate-300 md:text-lg">
        {copy[locale].intro}
      </p>

      <div className="space-y-2">
        <h1 className="bg-linear-to-r from-white via-[#9efaf0] to-[#22e2c2] bg-clip-text text-3xl font-extrabold leading-tight text-transparent drop-shadow-[0_0_18px_rgba(34,226,194,0.35)] md:text-4xl lg:text-5xl">
          Juan José Enríquez Córdoba
        </h1>
        <h2
          className={`h-7 text-lg font-semibold text-[#b7fbf1] transition-all duration-200 md:h-8 md:text-xl lg:text-2xl ${
            roleVisible ? "translate-y-0 opacity-100 blur-0" : "-translate-y-1 opacity-0 blur-[1px]"
          }`}
        >
          {roles[roleIndex]}
        </h2>
        <div className="mx-auto flex max-w-fit items-center justify-center rounded-full border border-[#2ee3c3]/25 bg-[#17273a]/70 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-[#8ef0df] shadow-[0_0_22px_rgba(34,226,194,0.12)] md:px-4 md:py-2 md:text-xs">
          {copy[locale].badge}
        </div>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-200 md:mt-4 md:leading-7 md:text-base">
          {copy[locale].paragraph}
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
        <a
          href="tel:+573157614544"
          className="rounded-full border border-[#43ecd2]/45 bg-[#1a2a3d] px-4 py-2.5 text-xs font-semibold text-slate-100 shadow-[0_0_22px_rgba(34,226,194,0.22)] transition-transform duration-500 hover:-translate-y-1 md:px-5 md:py-3 md:text-sm"
        >
          {copy[locale].contact}: <span className="text-sm text-[#4df2d8] md:text-base">+57 315 7614 544</span>
        </a>
        <a
          href="/Modern Professional CV Resume.pdf"
          onClick={(event) => {
            event.preventDefault();
            handleCvDownload();
          }}
          className="rounded-full border border-[#2ee3c3]/35 bg-[#17273a] px-4 py-2.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-[#20344b] md:px-5 md:py-3 md:text-sm"
        >
          {copy[locale].cv}
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1.5 text-slate-300 md:gap-3 md:pt-2">
        <span className="mr-1 text-xs text-slate-400 md:mr-2 md:text-sm">{copy[locale].links}</span>
        <a
          href="https://github.com/Juanenriquezcc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-[#8ef0df] hover:border-[#22e2c2] md:h-10 md:w-10"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-enriquez-9405202b4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2ee3c3]/35 bg-[#182738] text-[#8ef0df] hover:border-[#22e2c2] md:h-10 md:w-10"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </section>
  );
}
