"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { site, type Locale } from "@/data/site";
import { revealDelay } from "@/lib/reveal";

const copy = {
  es: {
    eyebrow: "Contacto",
    title: "Conectemos",
    description: "¿Tienes un proyecto, una práctica o una idea? Escríbeme y te respondo directamente.",
    email: "Correo",
    phone: "Teléfono",
    location: "Ubicación",
    copy: "Copiar correo",
    copied: "Copiado",
    formTitle: "Envíame un mensaje",
    formNote: "Al enviar se abrirá tu aplicación de correo con el mensaje listo. No se guarda nada en este sitio.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tucorreo@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntame en qué puedo ayudarte...",
    send: "Preparar correo",
    required: "Todos los campos son obligatorios.",
    invalidName: "El nombre solo permite letras.",
    invalidEmail: "Escribe un correo válido.",
    minChars: "Mínimo 12 caracteres",
    chars: "caracteres",
    opened: "Se abrió tu aplicación de correo con el mensaje listo para enviar. Si no se abrió, escríbeme directamente a",
    subject: "Contacto desde el portafolio",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's connect",
    description: "Have a project, an internship, or an idea? Write to me and I'll reply directly.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    copy: "Copy email",
    copied: "Copied",
    formTitle: "Send me a message",
    formNote: "Submitting opens your email app with the message ready. Nothing is stored on this site.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "youremail@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me how I can help...",
    send: "Prepare email",
    required: "All fields are required.",
    invalidName: "Name only allows letters.",
    invalidEmail: "Enter a valid email address.",
    minChars: "Minimum 12 characters",
    chars: "characters",
    opened: "Your email app opened with the message ready to send. If it didn't open, write to me directly at",
    subject: "Contact from portfolio",
  },
};

const MIN_MESSAGE = 12;

export default function ContactSection({ locale }: { locale: Locale }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copy[locale];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const error = !cleanName || !cleanEmail || !cleanMessage
      ? t.required
      : !/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ\s]+$/.test(cleanName)
        ? t.invalidName
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
          ? t.invalidEmail
          : cleanMessage.length < MIN_MESSAGE
            ? t.minChars
            : "";

    setErrorText(error);
    setOpened(false);
    if (error) return;

    // No backend: hand the message to the visitor's own mail client.
    const subject = `${t.subject} — ${cleanName}`;
    const body = `${cleanMessage}\n\n— ${cleanName}\n${cleanEmail}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const hasMinMessage = message.trim().length >= MIN_MESSAGE;
  const field =
    "w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-fg outline-none transition-colors duration-200 placeholder:text-muted/70 hover:border-line-strong focus:border-accent-strong focus:ring-2 focus:ring-accent-strong/20";
  const label = "font-mono text-[11px] uppercase tracking-[0.12em] text-muted";

  const channels = [
    { key: t.phone, value: site.phone, href: site.phoneHref, icon: Phone },
    { key: "GitHub", value: `@${site.githubHandle}`, href: site.github, icon: Github },
    { key: "LinkedIn", value: "Juan Enríquez", href: site.linkedin, icon: Linkedin },
    { key: t.location, value: site.location, icon: MapPin },
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader id="contact" eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="flex flex-col gap-3 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-raised p-5 shadow-card">
              <span className={label}>{t.email}</span>
              <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 break-all font-medium text-fg transition-colors hover:text-accent">
                <Mail size={16} className="shrink-0 text-accent" />
                {site.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-fg"
              >
                {copied ? <Check size={13} className="text-teal" /> : <Copy size={13} />}
                <span aria-live="polite">{copied ? t.copied : t.copy}</span>
              </button>
            </div>

            <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-raised shadow-card">
              {channels.map(({ key, value, href, icon: Icon }) => {
                const inner = (
                  <>
                    <Icon size={16} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className={label}>{key}</span>
                      <span className="truncate text-fg">{value}</span>
                    </span>
                    {href && <ArrowUpRight size={15} className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />}
                  </>
                );
                return (
                  <li key={key}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-elevated"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 px-5 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <form
            data-reveal
            style={revealDelay(120)}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-2xl border border-line bg-raised p-5 shadow-lift md:p-8 lg:col-span-7"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">{t.formTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.formNote}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={label}>{t.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value.replace(/[^A-Za-zÁÉÍÓÚÜáéíóúüÑñ\s]/g, ""))}
                  placeholder={t.namePlaceholder}
                  required
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={label}>{t.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className={field}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="flex items-center justify-between gap-2">
                <span className={label}>{t.messageLabel}</span>
                <span className={`font-mono text-[11px] ${hasMinMessage ? "text-teal" : "text-muted"}`}>
                  {message.length} {t.chars} · {t.minChars}
                </span>
              </span>
              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={t.messagePlaceholder}
                rows={6}
                required
                className={`${field} resize-y`}
              />
            </label>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent-strong"
              >
                {t.send}
                <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p aria-live="polite" className="min-h-5 text-sm">
                {errorText && <span className="text-rose-600 dark:text-rose-400">{errorText}</span>}
                {opened && (
                  <span className="text-fg-2">
                    {t.opened}{" "}
                    <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                      {site.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
