"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Lock, X } from "lucide-react";
import MediaFrame from "./MediaFrame";
import SectionHeader from "./SectionHeader";
import { projects, type CaseStudy, type Project } from "@/data/projects";
import type { Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const copy = {
  es: {
    eyebrow: "Proyecto destacado",
    title: "Producto real, en producción",
    project: "Proyecto",
    type: "Tipo",
    stack: "Stack",
    repository: "Repositorio",
    private: "Privado",
    live: "En vivo",
    role: "Rol",
    features: "Qué incluye",
    composition: "Composición del código",
    compositionNote: "Lenguajes reportados por el repositorio",
    visit: "Visitar proyecto en vivo",
    expand: "Ampliar imagen",
    close: "Cerrar",
    prev: "Imagen anterior",
    next: "Imagen siguiente",
    chapters: { problem: "Problema", goal: "Objetivo", solution: "Solución", architecture: "Arquitectura", decisions: "Decisiones técnicas", results: "Resultados" },
  },
  en: {
    eyebrow: "Featured project",
    title: "A real product, in production",
    project: "Project",
    type: "Type",
    stack: "Stack",
    repository: "Repository",
    private: "Private",
    live: "Live",
    role: "Role",
    features: "What it includes",
    composition: "Codebase composition",
    compositionNote: "Languages reported by the repository",
    visit: "Visit live project",
    expand: "Enlarge image",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    chapters: { problem: "Problem", goal: "Goal", solution: "Solution", architecture: "Architecture", decisions: "Technical decisions", results: "Results" },
  },
};

const languageColors = ["bg-accent-strong", "bg-teal", "bg-accent/50", "bg-muted/60"];

function Lightbox({ project, index, onIndex, onClose, locale }: { project: Project; index: number | null; onIndex: (i: number) => void; onClose: () => void; locale: Locale }) {
  const ref = useRef<HTMLDialogElement>(null);
  const t = copy[locale];
  const count = project.gallery.length;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const current = index === null ? null : project.gallery[index];
  const step = (delta: number) => index !== null && onIndex((index + delta + count) % count);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
      className="m-auto max-h-[92vh] w-[min(1200px,94vw)] overflow-visible bg-transparent p-0 text-white"
    >
      {current && index !== null && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
              {`${String(index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`} · {current.caption[locale]}
            </span>
            <button type="button" onClick={onClose} aria-label={t.close} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20">
              <X size={18} />
            </button>
          </div>
          <div className="relative">
            <MediaFrame
              key={current.src}
              src={current.src}
              alt={`${project.title} — ${current.caption[locale]}`}
              sizes="94vw"
              label={current.caption[locale]}
              className="aspect-21/10 rounded-xl"
              imageClassName="object-contain"
            />
            {count > 1 &&
              ([
                [-1, t.prev, ChevronLeft, "left-2 lg:-left-14"],
                [1, t.next, ChevronRight, "right-2 lg:-right-14"],
              ] as const).map(([delta, label, Icon, pos]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => step(delta)}
                  aria-label={label}
                  className={`absolute top-1/2 ${pos} flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 backdrop-blur transition-colors hover:bg-black/75`}
                >
                  <Icon size={20} />
                </button>
              ))}
          </div>
        </div>
      )}
    </dialog>
  );
}

function Chapters({ caseStudy, locale }: { caseStudy?: CaseStudy; locale: Locale }) {
  const chapters = copy[locale].chapters;
  const filled = (Object.keys(chapters) as Array<keyof CaseStudy>).filter((key) => caseStudy?.[key]);
  if (filled.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
      {filled.map((key, i) => (
        <div key={key} className="flex flex-col gap-2 bg-raised p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal">{`${String(i + 1).padStart(2, "0")} · ${chapters[key]}`}</span>
          <p className="leading-relaxed text-fg-2">{caseStudy?.[key]?.[locale]}</p>
        </div>
      ))}
    </div>
  );
}

function FeaturedProject({ project, locale }: { project: Project; locale: Locale }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = copy[locale];
  const cover = project.gallery[active];
  const host = project.demo ? new URL(project.demo).hostname.replace(/^www\./, "") : null;

  const meta: Array<[string, React.ReactNode]> = [
    [t.project, project.title],
    [t.type, project.type[locale]],
    ...(project.role ? ([[t.role, project.role[locale]]] as Array<[string, string]>) : []),
    [t.stack, project.technologies.join(" / ")],
    [
      t.repository,
      project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          GitHub ↗
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5">
          <Lock size={13} className="text-muted" />
          {t.private}
        </span>
      ),
    ],
    ...(project.demo && host
      ? ([
          [
            t.live,
            <a key="live" href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
              {host}
              <ArrowUpRight size={13} />
            </a>,
          ],
        ] as Array<[string, React.ReactNode]>)
      : []),
  ];

  return (
    <article className="flex flex-col gap-10">
      <div data-reveal className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{`${t.project} ${project.number}`}</span>
          <h3 className="font-display text-5xl font-extrabold tracking-[-0.035em] text-fg md:text-7xl">{project.title}</h3>
          <p className="mt-2 text-lg text-fg-2 md:text-xl">{project.tagline[locale]}</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-raised px-3 py-1 text-xs font-medium text-fg-2 shadow-card">
          <span className="h-2 w-2 rounded-full bg-teal" />
          {project.status[locale]}
        </span>
      </div>

      {cover && (
        <div data-reveal style={revealDelay(80)} className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setLightbox(active)}
            aria-label={`${t.expand}: ${cover.caption[locale]}`}
            className="group relative block overflow-hidden rounded-2xl border border-line bg-raised p-2 text-left shadow-lift"
          >
            <MediaFrame
              key={cover.src}
              src={cover.src}
              alt={`${project.title} — ${cover.caption[locale]}`}
              sizes="(min-width: 1280px) 1200px, 100vw"
              label={cover.caption[locale]}
              className="aspect-21/10 rounded-xl"
              imageClassName="object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
            <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand size={14} />
              {t.expand}
            </span>
          </button>

          {project.gallery.length > 1 && (
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {project.gallery.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-label={image.caption[locale]}
                  className={`group flex flex-col gap-2 rounded-xl border bg-raised p-1.5 text-left shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-lift md:p-2 ${
                    active === i ? "border-accent-strong" : "border-line"
                  }`}
                >
                  <MediaFrame
                    src={image.src}
                    alt=""
                    sizes="(min-width: 1280px) 400px, 33vw"
                    label={String(i + 1).padStart(2, "0")}
                    className="aspect-21/10 rounded-lg"
                    imageClassName="object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="flex items-baseline gap-2 px-1 pb-0.5">
                    <span className={`font-mono text-[10px] ${active === i ? "text-accent" : "text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="hidden truncate text-xs font-medium text-fg-2 sm:inline md:text-sm">{image.caption[locale]}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div data-reveal className="flex flex-col gap-6 lg:col-span-7">
          <p className="text-lg leading-relaxed text-fg-2">{project.description[locale]}</p>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{t.features}</span>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <li key={feature.es} className="rounded-full border border-line bg-raised px-3 py-1.5 text-sm text-fg-2 shadow-card">
                  {feature[locale]}
                </li>
              ))}
            </ul>
          </div>

          {project.languages && (
            <div className="rounded-2xl border border-line bg-raised p-5 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-teal">{t.composition}</span>
                <span className="text-xs text-muted">{t.compositionNote}</span>
              </div>
              <div className="mt-4 flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full" role="img" aria-label={project.languages.map((l) => `${l.name} ${l.percent}%`).join(", ")}>
                {project.languages.map((language, i) => (
                  <span
                    key={language.name}
                    className={`h-full min-w-1 first:rounded-l-full last:rounded-r-full ${languageColors[i % languageColors.length]}`}
                    style={{ width: `${language.percent}%` }}
                  />
                ))}
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
                {project.languages.map((language, i) => (
                  <li key={language.name} className="flex items-center gap-2 text-sm">
                    <span className={`h-2 w-2 rounded-full ${languageColors[i % languageColors.length]}`} />
                    <span className="text-fg">{language.name}</span>
                    <span className="font-mono text-xs text-muted">{language.percent}%</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div data-reveal style={revealDelay(100)} className="flex flex-col gap-5 lg:col-span-5">
          <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-raised shadow-card">
            {meta.map(([key, value]) => (
              <div key={key} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{key}</dt>
                <dd className="text-right text-sm font-medium text-fg">{value}</dd>
              </div>
            ))}
          </dl>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-fg px-5 py-4 text-sm font-semibold text-canvas shadow-card transition-colors duration-200 hover:bg-accent-strong"
            >
              {t.visit}
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>

      <Chapters caseStudy={project.caseStudy} locale={locale} />
      <Lightbox project={project} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} locale={locale} />
    </article>
  );
}

export default function Projects({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="projects" className="scroll-mt-20 border-y border-line bg-raised/60 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader id="projects" eyebrow={t.eyebrow} title={t.title} />
        {projects.map((project) => (
          <FeaturedProject key={project.id} project={project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
