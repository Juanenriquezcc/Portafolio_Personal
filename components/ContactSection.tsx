import { ExternalLink, Github } from "lucide-react";

type Locale = "es" | "en";

const copy = {
  es: {
    tag: "Contactos",
    title: "Conectemos",
    phone: "Telefono",
    github: "Ver perfil y repositorios",
    vercel: "Ver despliegues",
  },
  en: {
    tag: "Contact",
    title: "Let's connect",
    phone: "Phone",
    github: "View profile and repositories",
    vercel: "View deployments",
  },
};

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  return (
    <section id="contacto" className="scroll-mt-28 space-y-7 md:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{copy[locale].tag}</p>
        <h3 className="text-3xl font-bold text-slate-100">{copy[locale].title}</h3>
      </div>

      <div className="frosted-panel grid grid-cols-1 gap-5 rounded-3xl p-7 md:grid-cols-3">
        <article className="rounded-2xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].phone}</p>
          <a href="tel:+573157614544" className="mt-2 block text-lg font-semibold text-slate-100 hover:text-[#22e2c2]">
            +57 315 7614 544
          </a>
        </article>

        <article className="rounded-2xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">GitHub</p>
          <a
            href="https://github.com/Juanenriquezcc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-slate-100 hover:text-[#22e2c2]"
          >
            <Github size={16} />
            {copy[locale].github}
          </a>
        </article>

        <article className="rounded-2xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">Vercel</p>
          <a
            href="https://vercel.com/juanenriquezccs-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-sm text-slate-100 hover:text-[#22e2c2]"
          >
            <ExternalLink size={16} />
            {copy[locale].vercel}
          </a>
        </article>
      </div>
    </section>
  );
}
