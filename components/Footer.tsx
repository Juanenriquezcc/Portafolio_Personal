type Locale = "es" | "en";

const copy = {
  es: "© 2026 Juan Jose Enriquez Cordoba · Ingenieria de Software · Universidad Cooperativa de Colombia",
  en: "© 2026 Juan Jose Enriquez Cordoba · Software Engineering · Universidad Cooperativa de Colombia",
};

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="rounded-3xl border border-[#2ee3c3]/20 bg-[#182334]/80 px-6 py-6 text-center backdrop-blur">
      <p className="text-sm text-slate-300">{copy[locale]}</p>
    </footer>
  );
}
