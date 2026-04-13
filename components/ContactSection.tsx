import { Github, Linkedin } from "lucide-react";

type Locale = "es" | "en";

const copy = {
  es: {
    tag: "Contactos",
    title: "Conectemos",
    phone: "Telefono",
    github: "Ver perfil y repositorios",
    linkedin: "Ver perfil profesional",
  },
  en: {
    tag: "Contact",
    title: "Let's connect",
    phone: "Phone",
    github: "View profile and repositories",
    linkedin: "View professional profile",
  },
};

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  return (
    <section id="contacto" className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{copy[locale].tag}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{copy[locale].title}</h3>
      </div>

      <div className="frosted-panel grid grid-cols-1 gap-4 rounded-2xl p-4 md:grid-cols-3 md:gap-5 md:rounded-3xl md:p-6 lg:p-7">
        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].phone}</p>
          <a href="tel:+573157614544" className="mt-2 block text-base font-semibold text-slate-100 hover:text-[#22e2c2] md:text-lg">
            +57 315 7614 544
          </a>
        </article>

        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">GitHub</p>
          <a
            href="https://github.com/Juanenriquezcc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-xs text-slate-100 hover:text-[#22e2c2] md:text-sm"
          >
            <Github size={16} />
            {copy[locale].github}
          </a>
        </article>

        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/juan-enriquez-9405202b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-xs text-slate-100 hover:text-[#22e2c2] md:text-sm"
          >
            <Linkedin size={16} />
            {copy[locale].linkedin}
          </a>
        </article>
      </div>
    </section>
  );
}
