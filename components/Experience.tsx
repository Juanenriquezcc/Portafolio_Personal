import { BriefcaseBusiness, GraduationCap, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { academic, work, type TimelineEntry } from "@/data/experience";
import type { Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const copy = {
  es: {
    eyebrow: "Trayectoria",
    title: "Experiencia académica y profesional",
    academic: "Experiencia Académica",
    work: "Experiencia Laboral",
    entries: (n: number) => `${String(n).padStart(2, "0")} ${n === 1 ? "registro" : "registros"}`,
  },
  en: {
    eyebrow: "Background",
    title: "Academic and professional experience",
    academic: "Academic Experience",
    work: "Professional Experience",
    entries: (n: number) => `${String(n).padStart(2, "0")} ${n === 1 ? "entry" : "entries"}`,
  },
};

function Entry({ entry, index, locale }: { entry: TimelineEntry; index: number; locale: Locale }) {
  const first = index === 0;
  const chips = [entry.area, entry.duration, entry.location].filter(Boolean) as TimelineEntry["period"][];

  return (
    <li
      data-reveal
      style={revealDelay(index * 90)}
      className="group relative flex flex-col gap-4 rounded-2xl border border-line bg-raised/85 p-5 shadow-card transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift md:p-6"
    >
      <span
        aria-hidden="true"
        className={`absolute -left-7 top-7 h-2.75 w-2.75 rounded-full border-2 border-canvas transition-[background-color,box-shadow] duration-300 group-hover:bg-accent-strong group-hover:shadow-[0_0_0_4px_color-mix(in_srgb,var(--c-accent-strong)_20%,transparent)] ${
          first ? "bg-accent-strong" : "bg-line-strong"
        }`}
      />

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-baseline gap-3 font-mono text-xs">
          <span className="text-muted transition-colors group-hover:text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className={`font-semibold uppercase tracking-[0.08em] ${first ? "text-accent" : "text-fg-2"}`}>{entry.period[locale]}</span>
        </div>
        {entry.status && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-2.5 py-0.5 text-[11px] font-medium text-fg-2">
            <span className={`h-1.5 w-1.5 rounded-full ${entry.status.es === "En curso" ? "bg-teal" : "bg-muted"}`} />
            {entry.status[locale]}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-display text-lg font-bold leading-snug tracking-tight text-fg md:text-xl">{entry.title[locale]}</h4>
        <p className="text-sm font-medium text-accent">
          {entry.organization}
          {entry.organizationNote && <span className="font-normal text-muted"> · {entry.organizationNote[locale]}</span>}
        </p>
      </div>

      {chips.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <li key={chip.es} className="rounded-md border border-line bg-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
              {chip[locale]}
            </li>
          ))}
        </ul>
      )}

      {entry.description && <p className="leading-relaxed text-fg-2">{entry.description[locale]}</p>}

      {entry.highlights && (
        <ul className="flex flex-col gap-2 border-t border-line pt-4">
          {entry.highlights.map((item) => (
            <li key={item.es} className="flex gap-3 text-sm leading-relaxed text-fg-2">
              <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-teal" />
              {item[locale]}
            </li>
          ))}
        </ul>
      )}

      {entry.tags && (
        <ul className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li key={tag.es} className="rounded-full border border-accent-strong/25 bg-accent-strong/5 px-2.5 py-1 text-xs font-medium text-accent">
              {tag[locale]}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function TimelineBlock({ title, icon: Icon, entries, locale }: { title: string; icon: LucideIcon; entries: TimelineEntry[]; locale: Locale }) {
  return (
    <div data-reveal className="flex min-w-0 flex-col gap-8">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-raised text-accent shadow-card">
            <Icon size={18} />
          </span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-fg">{title}</h3>
        </div>
        <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-muted lg:inline">{copy[locale].entries(entries.length)}</span>
      </div>
      <ol className="relative flex flex-col gap-5 pl-7">
        <span aria-hidden="true" className="absolute bottom-7 left-1.25 top-7 w-px bg-linear-to-b from-accent-strong/60 via-line-strong to-line" />
        {entries.map((entry, i) => (
          <Entry key={`${entry.organization}-${entry.period.es}`} entry={entry} index={i} locale={locale} />
        ))}
      </ol>
    </div>
  );
}

export default function Experience({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="experience" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader id="experience" eyebrow={t.eyebrow} title={t.title} />
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-8 lg:gap-12">
          <TimelineBlock title={t.academic} icon={GraduationCap} entries={academic} locale={locale} />
          <TimelineBlock title={t.work} icon={BriefcaseBusiness} entries={work} locale={locale} />
        </div>
      </div>
    </section>
  );
}
