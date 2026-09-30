"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Isotipo from "./Isotipo";
import { site, type Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const roleCopy = {
  es: ["Ingeniero de Software", "Desarrollador Frontend", "Analista y creador de soluciones"],
  en: ["Software Engineer", "Frontend Developer", "Solutions Analyst and Builder"],
};

const copy = {
  es: {
    eyebrow: "00 // Software Engineer",
    status: "Abierto a prácticas y proyectos",
    paragraph:
      "Estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me especializo en crear soluciones web funcionales, escalables y visualmente profesionales, integrando buenas prácticas de desarrollo, experiencia de usuario y despliegue continuo.",
    projects: "Ver proyecto",
    about: "Conocerme",
    cv: "Descargar CV",
    nodes: [
      ["Interfaz", "React · Next.js"],
      ["Lógica", "TypeScript"],
      ["Datos", "SQL · PLpgSQL"],
      ["Producto", "UX · Diseño"],
    ],
  },
  en: {
    eyebrow: "00 // Software Engineer",
    status: "Open to internships and projects",
    paragraph:
      "Software Engineering student at Universidad Cooperativa de Colombia. I focus on building functional, scalable, and polished web solutions, combining development best practices, user experience, and continuous delivery.",
    projects: "View project",
    about: "About me",
    cv: "Download CV",
    nodes: [
      ["Interface", "React · Next.js"],
      ["Logic", "TypeScript"],
      ["Data", "SQL · PLpgSQL"],
      ["Product", "UX · Design"],
    ],
  },
};

// Node anchors in the 400×400 diagram (card corners that face the center).
const anchors = [
  { x: 108, y: 96, card: "left-0 top-[12%]" },
  { x: 292, y: 96, card: "right-0 top-[12%]" },
  { x: 108, y: 304, card: "bottom-[12%] left-0" },
  { x: 292, y: 304, card: "bottom-[12%] right-0" },
];

function SystemDiagram({ nodes }: { nodes: string[][] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="86" fill="none" className="stroke-line-strong" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="150" fill="none" className="stroke-line" />
        {anchors.map(({ x, y }) => (
          <g key={`${x}-${y}`}>
            <path d={`M200 200 L${x} 200 L${x} ${y}`} fill="none" className="stroke-line-strong" />
            <path d={`M200 200 L${x} 200 L${x} ${y}`} fill="none" strokeWidth="2" className="flow-line stroke-accent-strong" />
            <circle cx={x} cy={200} r="2.5" className="fill-teal" />
          </g>
        ))}
        {[0, 100, 200, 300, 400].map((v) => (
          <text key={v} x={v === 400 ? 396 : v + 2} y="396" textAnchor={v === 400 ? "end" : "start"} className="fill-muted font-mono text-[8px]">
            {v}
          </text>
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-raised shadow-lift">
        <Isotipo size={88} className="transition-transform duration-500 hover:scale-105" />
      </div>

      {nodes.map(([label, value], i) => (
        <div
          key={label}
          className={`absolute ${anchors[i].card} w-[44%] max-w-44 rounded-xl border border-line bg-raised/90 px-3.5 py-3 shadow-card backdrop-blur transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift`}
        >
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-teal">{`0${i + 1} · ${label}`}</span>
          <span className="mt-1 block text-sm font-semibold text-fg">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = roleCopy[locale];
  const t = copy[locale];

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative scroll-mt-24 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:px-12 lg:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <div data-reveal className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-teal">{t.eyebrow}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-raised/80 px-3 py-1 text-xs font-medium text-fg-2 shadow-card">
              <span className="h-2 w-2 rounded-full bg-teal" />
              {t.status}
            </span>
          </div>

          <h1
            data-reveal
            style={revealDelay(80)}
            className="font-display text-[2.9rem] font-extrabold uppercase leading-[1.1] tracking-[-0.035em] text-fg sm:text-7xl sm:leading-[1.12] lg:text-[5.6rem] lg:leading-[1.08]"
          >
            Juan José
            <br />
            <span className="text-muted/70">Enríquez</span>
            <br />
            <span className="bg-linear-to-r from-accent-strong via-accent to-teal bg-clip-text text-transparent">Córdoba</span>
          </h1>

          <p data-reveal style={revealDelay(160)} className="flex items-center gap-3 text-lg font-semibold text-fg md:text-xl">
            <span className="h-px w-8 bg-accent-strong" />
            <span key={`${locale}-${roleIndex}`} className="role-in" aria-live="polite">
              {roles[roleIndex]}
            </span>
          </p>

          <p data-reveal style={revealDelay(220)} className="max-w-xl text-base leading-relaxed text-fg-2 md:text-lg">
            {t.paragraph}
          </p>

          <div data-reveal style={revealDelay(300)} className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3.5 text-sm font-semibold text-canvas shadow-card transition-colors duration-200 hover:bg-accent-strong"
            >
              {t.projects}
              <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#origin"
              className="group inline-flex items-center gap-2 rounded-xl border border-line bg-raised px-5 py-3.5 text-sm font-semibold text-fg shadow-card transition-colors duration-200 hover:border-line-strong"
            >
              {t.about}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div data-reveal style={revealDelay(360)} className="flex flex-wrap items-center gap-5 text-sm text-muted">
            <a href={site.cv} download="Juan_Jose_Enriquez_CV.pdf" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Download size={15} />
              {t.cv}
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Github size={15} />
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        <div data-reveal style={revealDelay(200)} className="lg:col-span-5">
          <SystemDiagram nodes={t.nodes} />
        </div>
      </div>
    </section>
  );
}
