"use client";

import { useEffect, useState, type TouchEvent } from "react";
import Image from "next/image";

type Locale = "es" | "en";
type ThemeMode = "dark" | "light";

const projects = [
  {
    titleEs: "AgroLink",
    titleEn: "AgroLink",
    textEs:
      "Plataforma web enfocada en el sector agro para conectar informacion, procesos y gestion digital con una experiencia clara para el usuario.",
    textEn:
      "Web platform focused on the agro sector to connect information, processes, and digital management with a clear user experience.",
    image:
      "https://cdn.discordapp.com/attachments/1235371416237510667/1493251628378099762/image.png?ex=69def333&is=69dda1b3&hm=6722de495dac6bf5d7f7807cfc357fab703131d97337215a9c98cbadd3829ae0&",
    stackEs: "TypeScript + JavaScript + PLpgSQL",
    stackEn: "TypeScript + JavaScript + PLpgSQL",
    stateEs: "Produccion",
    stateEn: "Production",
    tech: ["TypeScript 73.7%", "JavaScript 17.4%", "PLpgSQL 5.3%", "HTML 3.5%", "CSS 0.1%"],
    githubUrl: "https://github.com/SamuelMenan/AgroLink",
    vercelUrl: "https://agro-link-three.vercel.app/",
  },
  {
    titleEs: "Mentes Creativas",
    titleEn: "Mentes Creativas",
    textEs:
      "Sitio web institucional para el colegio Mentes Creativas con interfaz moderna, contenido claro y enfoque en accesibilidad para estudiantes y acudientes.",
    textEn:
      "Institutional website for Mentes Creativas school with a modern interface, clear content, and accessibility-focused experience for students and guardians.",
    image:
      "https://media.discordapp.net/attachments/1235371416237510667/1493251791679393862/image.png?ex=69def35a&is=69dda1da&hm=10796af35c82286822a333a208803303e8913a30c702b2a86019c86548732da4&=&format=webp&quality=lossless&width=1668&height=800",
    stackEs: "TypeScript + JavaScript",
    stackEn: "TypeScript + JavaScript",
    stateEs: "Desplegado",
    stateEn: "Live",
    tech: ["TypeScript 97.5%", "JavaScript 1.3%", "Other 1.2%"],
    githubUrl: "https://github.com/SamuelMenan/Colegio-Mentes-Creativas.git",
    vercelUrl: "https://colegio-mentes-creativas-puce.vercel.app/",
  },
];

interface ProjectsBookProps {
  locale: Locale;
  themeMode: ThemeMode;
}

export default function ProjectsBook({ locale, themeMode }: ProjectsBookProps) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

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

  const goNext = () => setActive((prev) => (prev + 1) % projects.length);
  const goPrev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    if (!touch) return;

    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const horizontalThreshold = 45;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > horizontalThreshold) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    setTouchStart(null);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32 lg:space-y-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center">
        <p className={`text-sm ${themeMode === "dark" ? "text-[#8ef0df]" : "text-cyan-700"}`}>{locale === "es" ? "Portafolio en crecimiento" : "Growing portfolio"}</p>
        <h3 className={`text-2xl font-bold md:text-[1.75rem] lg:text-3xl ${themeMode === "dark" ? "text-slate-100" : "text-slate-800"}`}>{locale === "es" ? "Mis Proyectos" : "My Projects"}</h3>
        <p className={`mx-auto mt-2 max-w-2xl text-xs md:mt-3 md:text-sm ${themeMode === "dark" ? "text-slate-300" : "text-slate-600"}`}>
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
                {current.tech.map((techItem) => (
                  <span key={`${currentTitle}-${techItem}`} className="rounded-full border border-[#2ee3c3]/30 px-4 py-2 text-xs font-semibold text-slate-200">
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={current.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#2ee3c3]/30 bg-[#16283d] px-4 py-2 text-xs font-semibold text-[#9efaf0] hover:bg-[#1f3550]"
                >
                  {locale === "es" ? "Link GitHub" : "GitHub link"}
                </a>
                <a
                  href={current.vercelUrl}
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

      <div className="space-y-3 md:hidden">
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
          <div className="space-y-2.5 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#8ef0df]">{locale === "es" ? "Proyecto activo" : "Active project"}</p>
            <h4 className="text-lg font-semibold text-slate-100">{currentTitle}</h4>
            <p className="text-xs leading-6 text-slate-300">{currentText}</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {currentStack}
              </span>
              <span className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                {currentState}
              </span>
              {current.tech.map((techItem) => (
                <span key={`mobile-${currentTitle}-${techItem}`} className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-slate-200">
                  {techItem}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href={current.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">{locale === "es" ? "GitHub" : "GitHub"}</a>
              <a href={current.vercelUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#2ee3c3]/30 px-3 py-1 text-[11px] font-semibold text-[#9efaf0]">{locale === "es" ? "Vercel" : "Vercel"}</a>
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
