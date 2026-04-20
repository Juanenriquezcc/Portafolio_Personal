"use client";

import { FormEvent, useRef, useState } from "react";
import { Github, Linkedin, Mail, MessageSquare, Send, Sparkles, User } from "lucide-react";

type Locale = "es" | "en";

const copy = {
  es: {
    tag: "Contacto",
    title: "Conectemos",
    phone: "Teléfono",
    location: "Ubicación",
    github: "Ver perfil y repositorios",
    linkedin: "Ver perfil profesional",
    formTitle: "Envíame un mensaje",
    formDescription: "Completa tus datos y el mensaje llegará directamente a mi correo.",
    formTitleAccent: "Respuesta rápida",
    nameLabel: "Usuario",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tucorreo@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    send: "Enviar mensaje",
    required: "Todos los campos son obligatorios.",
    minChars: "Mínimo 12 caracteres",
    chars: "caracteres",
    onlyLettersInName: "El nombre solo permite letras.",
    onlyLettersNumbersInMessage: "El mensaje solo permite letras y números.",
  },
  en: {
    tag: "Contact",
    title: "Let's connect",
    phone: "Phone",
    location: "Location",
    github: "View profile and repositories",
    linkedin: "View professional profile",
    formTitle: "Send me a message",
    formDescription: "Fill in your details and the message will be sent directly to my email.",
    formTitleAccent: "Quick response",
    nameLabel: "User",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "youremail@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send message",
    required: "All fields are required.",
    minChars: "Minimum 12 characters",
    chars: "characters",
    onlyLettersInName: "Name only allows letters.",
    onlyLettersNumbersInMessage: "Message only allows letters and numbers.",
  },
};

interface ContactSectionProps {
  locale: Locale;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSuccessTimer = () => {
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
      successTimerRef.current = null;
    }
  };

  const handleNameChange = (value: string) => {
    // Only letters and spaces for the user name field.
    const sanitized = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
    setName(sanitized);
  };

  const handleMessageChange = (value: string) => {
    // Message accepts only letters, numbers, and spaces/new lines.
    const sanitized = value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]/g, "");
    setMessage(sanitized);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorText(copy[locale].required);
      setSuccessText("");
      return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(cleanName)) {
      setErrorText(copy[locale].onlyLettersInName);
      setSuccessText("");
      return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/.test(cleanMessage)) {
      setErrorText(copy[locale].onlyLettersNumbersInMessage);
      setSuccessText("");
      return;
    }

    if (cleanMessage.length < 12) {
      setErrorText(copy[locale].minChars);
      setSuccessText("");
      return;
    }

    setErrorText("");
    setSuccessText("");
    clearSuccessTimer();
    setIsSending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://formsubmit.co/ajax/juan.enriquezc@campusucc.edu.co", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSuccessText(locale === "es" ? "Mensaje enviado con éxito." : "Message sent successfully.");
      clearSuccessTimer();
      successTimerRef.current = setTimeout(() => {
        setSuccessText("");
        successTimerRef.current = null;
      }, 4000);
    } catch {
      setErrorText(locale === "es" ? "No se pudo enviar el mensaje. Inténtalo de nuevo." : "The message could not be sent. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  const messageCount = message.length;
  const hasMinMessage = message.trim().length >= 12;

  return (
    <section id="contacto" className="fade-in-soft scroll-mt-24 space-y-6 md:scroll-mt-28 md:space-y-7 lg:scroll-mt-32">
      <div className="text-center">
        <p className="text-sm text-[#8ef0df]">{copy[locale].tag}</p>
        <h3 className="text-2xl font-bold text-slate-100 md:text-[1.75rem] lg:text-3xl">{copy[locale].title}</h3>
      </div>

      <div className="frosted-panel grid grid-cols-1 gap-4 rounded-2xl p-4 md:grid-cols-2 md:gap-5 md:rounded-3xl md:p-6 lg:grid-cols-4 lg:p-7">
        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 transition-all duration-300 hover:-translate-y-0.5 md:rounded-2xl md:p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].phone}</p>
          <a href="tel:+573157614544" className="mt-2 block text-base font-semibold text-slate-100 hover:text-[#22e2c2] md:text-lg">
            +57 315 7614 544
          </a>
        </article>

        <article className="rounded-xl border border-[#2ee3c3]/20 bg-[#16263a]/70 p-4 transition-all duration-300 hover:-translate-y-0.5 md:rounded-2xl md:p-5">
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

      <article className="contact-message-card frosted-panel relative overflow-hidden rounded-2xl p-4 md:rounded-3xl md:p-6 lg:p-7">
        <span className="contact-card-orb contact-card-orb-top pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full" aria-hidden="true" />
        <span className="contact-card-orb contact-card-orb-bottom pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full" aria-hidden="true" />

        <div className="relative z-10 text-center md:text-left">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8ef0df]">
            <Sparkles size={14} />
            {copy[locale].formTitleAccent}
          </p>
          <h4 className="mt-1 text-xl font-bold text-slate-100 md:text-2xl">{copy[locale].formTitle}</h4>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-300 md:mx-0 md:text-sm md:leading-7">{copy[locale].formDescription}</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 mt-5 grid grid-cols-1 gap-3.5 md:mt-6 md:grid-cols-2 md:gap-4.5">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value={locale === "es" ? "Nuevo mensaje desde el portafolio" : "New message from portfolio"}
          />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].nameLabel}</span>
            <div className="contact-input-shell group flex items-center gap-2 rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 transition-all duration-300 focus-within:border-[#22e2c2] focus-within:shadow-[0_0_0_2px_rgba(34,226,194,0.16)]">
              <User size={15} className="text-[#8ef0df] transition-colors duration-300 group-focus-within:text-[#22e2c2]" />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => handleNameChange(event.target.value)}
                placeholder={copy[locale].namePlaceholder}
                required
                className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
              />
            </div>
          </label>

          <label className="space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].emailLabel}</span>
            <div className="contact-input-shell group flex items-center gap-2 rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 transition-all duration-300 focus-within:border-[#22e2c2] focus-within:shadow-[0_0_0_2px_rgba(34,226,194,0.16)]">
              <Mail size={15} className="text-[#8ef0df] transition-colors duration-300 group-focus-within:text-[#22e2c2]" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder={copy[locale].emailPlaceholder}
                required
                className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
              />
            </div>
          </label>

          <label className="space-y-1.5 md:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8ef0df]">{copy[locale].messageLabel}</span>
              <span className={`text-[11px] font-semibold ${hasMinMessage ? "text-[#8ef0df]" : "text-amber-300"}`}>
                {messageCount} {copy[locale].chars} • {copy[locale].minChars}
              </span>
            </div>
            <div className="contact-input-shell group rounded-xl border border-[#2ee3c3]/25 bg-[#16263a]/70 px-3 py-2.5 transition-all duration-300 focus-within:border-[#22e2c2] focus-within:shadow-[0_0_0_2px_rgba(34,226,194,0.16)]">
              <div className="mb-1.5 flex items-center gap-2">
                <MessageSquare size={15} className="text-[#8ef0df] transition-colors duration-300 group-focus-within:text-[#22e2c2]" />
                <span className="text-[11px] text-slate-300">{locale === "es" ? "Tu mensaje" : "Your message"}</span>
              </div>
              <textarea
                name="message"
                value={message}
                onChange={(event) => handleMessageChange(event.target.value)}
                placeholder={copy[locale].messagePlaceholder}
                rows={5}
                required
                className="w-full resize-y bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-400"
              />
            </div>
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSending}
              className="contact-send-button flex w-full items-center justify-center gap-2 rounded-xl border border-[#2ee3c3]/35 bg-linear-to-r from-[#17304a] via-[#1b3754] to-[#1f3f60] px-4 py-2.5 text-sm font-semibold text-[#9efaf0] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={15} />
              {isSending ? (locale === "es" ? "Enviando..." : "Sending...") : copy[locale].send}
            </button>
            {errorText && <p className="mt-2 text-center text-xs text-rose-300">{errorText}</p>}
            {successText && <p className="mt-2 text-center text-xs text-[#8ef0df]">{successText}</p>}
          </div>
        </form>
      </article>
    </section>
  );
}
