"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin } from "lucide-react";

type Locale = "es" | "en";

const copy = {
  es: {
    tag: "Contactos",
    title: "Conectemos",
    phone: "Telefono",
    location: "Ubicacion",
    github: "Ver perfil y repositorios",
    linkedin: "Ver perfil profesional",
    formTitle: "Enviame un mensaje",
    formDescription: "Completa tus datos y te abrira tu correo con el mensaje listo para enviar.",
    nameLabel: "Usuario",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tucorreo@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aqui...",
    send: "Enviar mensaje",
    required: "Todos los campos son obligatorios.",
  },
  en: {
    tag: "Contact",
    title: "Let's connect",
    phone: "Phone",
    location: "Location",
    github: "View profile and repositories",
    linkedin: "View professional profile",
    formTitle: "Send me a message",
    formDescription: "Fill in your details and your email app will open with the message ready to send.",
    nameLabel: "User",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "youremail@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send message",
    required: "All fields are required.",
  },
};

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showRequired, setShowRequired] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setShowRequired(true);
      return;
    }

    setShowRequired(false);
    const subject = encodeURIComponent(locale === "es" ? `Mensaje de ${cleanName}` : `Message from ${cleanName}`);
    const body = encodeURIComponent(
      `${locale === "es" ? "Nombre" : "Name"}: ${cleanName}\n${locale === "es" ? "Correo" : "Email"}: ${cleanEmail}\n\n${cleanMessage}`,
    );

    window.location.href = `mailto:juanenriquezcc@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{copy[locale].tag}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{copy[locale].title}</h3>
      </div>

      <div className="frosted-panel grid grid-cols-1 gap-4 rounded-2xl p-4 md:grid-cols-2 md:gap-5 md:rounded-3xl md:p-6 lg:grid-cols-4 lg:p-7">
        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].phone}</p>
          <a href="tel:+573157614544" className="mt-2 block text-base font-semibold text-slate-100 hover:text-[#22e2c2] md:text-lg">
            +57 315 7614 544
          </a>
        </article>

        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].location}</p>
          <p className="mt-2 text-base font-semibold text-slate-100 md:text-lg">Colombia, Pasto, Nariño</p>
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

      <article className="frosted-panel rounded-2xl p-4 md:rounded-3xl md:p-6 lg:p-7">
        <div className="text-center">
          <p className="text-sm text-[#8ef0df]">{copy[locale].formTitle}</p>
          <p className="mx-auto mt-1 max-w-2xl text-xs text-slate-300 md:text-sm">{copy[locale].formDescription}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3 md:mt-5 md:grid-cols-2 md:gap-4">
          <label className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.11em] text-[#8ef0df]">{copy[locale].nameLabel}</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={copy[locale].namePlaceholder}
              className="w-full rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-[#22e2c2]"
            />
          </label>

          <label className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.11em] text-[#8ef0df]">{copy[locale].emailLabel}</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={copy[locale].emailPlaceholder}
              className="w-full rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-[#22e2c2]"
            />
          </label>

          <label className="space-y-1.5 md:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-[0.11em] text-[#8ef0df]">{copy[locale].messageLabel}</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={copy[locale].messagePlaceholder}
              rows={5}
              className="w-full resize-y rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-[#22e2c2]"
            />
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl border border-[#2ee3c3]/35 bg-[#1a2a3d] px-4 py-2.5 text-sm font-semibold text-[#9efaf0] transition-colors hover:bg-[#20344b]"
            >
              {copy[locale].send}
            </button>
            {showRequired && <p className="mt-2 text-center text-xs text-rose-300">{copy[locale].required}</p>}
          </div>
        </form>
      </article>
    </section>
  );
}
