import MediaFrame from "./MediaFrame";
import SectionHeader from "./SectionHeader";
import { site, type Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const copy = {
  es: {
    eyebrow: "Origen",
    title: "Disfruto transformar ideas en productos reales.",
    bio: [
      "Soy Juan José Enríquez Córdoba, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me enfoco en construir soluciones web funcionales, rápidas y mantenibles, combinando buenas prácticas de desarrollo con interfaces modernas.",
      "Disfruto transformar ideas en productos reales, documentar procesos y mejorar continuamente la calidad del código para entregar resultados confiables.",
    ],
    principles: ["Código mantenible", "Interfaces modernas", "Mejora continua"],
    meta: [
      ["Ubicación", site.location],
      ["Academia", site.university],
      ["Periodo", "2024 — Actual"],
    ],
    photo: "Foto de perfil",
  },
  en: {
    eyebrow: "Origin",
    title: "I enjoy turning ideas into real products.",
    bio: [
      "I'm Juan José Enríquez Córdoba, a Software Engineering student at Universidad Cooperativa de Colombia. I focus on building functional, fast, and maintainable web solutions, combining development best practices with modern interfaces.",
      "I enjoy turning ideas into real products, documenting processes, and continuously improving code quality to deliver reliable results.",
    ],
    principles: ["Maintainable code", "Modern interfaces", "Continuous improvement"],
    meta: [
      ["Location", site.location],
      ["Academy", site.university],
      ["Period", "2024 — Present"],
    ],
    photo: "Profile photo",
  },
};

export default function AboutMe({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="origin" className="scroll-mt-20 border-y border-line bg-raised/70 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <figure data-reveal className="group relative mx-auto w-full max-w-md lg:col-span-5">
          {["-left-2 -top-2 border-l border-t", "-right-2 -top-2 border-r border-t", "-bottom-2 -left-2 border-b border-l", "-bottom-2 -right-2 border-b border-r"].map((pos) => (
            <span key={pos} aria-hidden="true" className={`absolute h-5 w-5 border-accent-strong/60 transition-all duration-500 group-hover:border-accent-strong ${pos}`} />
          ))}
          <div className="overflow-hidden rounded-2xl border border-line bg-raised p-2 shadow-lift">
            <MediaFrame
              src={site.profileImage}
              alt={site.name}
              sizes="(min-width: 1024px) 28rem, 90vw"
              label={t.photo}
              className="aspect-4/5 rounded-xl"
              imageClassName="object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
            <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span>{site.name}</span>
              <span className="text-teal">JJ</span>
            </figcaption>
          </div>
        </figure>

        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionHeader id="origin" eyebrow={t.eyebrow} title={t.title} />
          {t.bio.map((paragraph, i) => (
            <p key={i} data-reveal style={revealDelay(100 + i * 80)} className="text-base leading-relaxed text-fg-2 md:text-lg">
              {paragraph}
            </p>
          ))}
          <dl data-reveal style={revealDelay(220)} className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {t.meta.map(([key, value]) => (
              <div key={key} className="flex flex-col gap-1 bg-raised px-4 py-3.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{key}</dt>
                <dd className="text-sm font-medium text-fg">{value}</dd>
              </div>
            ))}
          </dl>
          <ul data-reveal style={revealDelay(280)} className="flex flex-wrap gap-2.5">
            {t.principles.map((item, i) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-3.5 py-1.5 text-sm text-fg-2 shadow-card">
                <span className={`h-1.5 w-1.5 rounded-full ${["bg-accent-strong", "bg-teal", "bg-accent"][i % 3]}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
