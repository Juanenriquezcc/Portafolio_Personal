import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "Juan José Enríquez Córdoba — Software Engineer";
const description =
  "Portafolio de Juan José Enríquez Córdoba, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Desarrollo web, productos digitales y proyectos reales.";

// icon.png, apple-icon.png, favicon.ico and opengraph-image.png in /app are picked up by Next.js file conventions.
export const metadata: Metadata = {
  title,
  description,
  applicationName: "Juan José / Dev",
  authors: [{ name: "Juan José Enríquez Córdoba", url: "https://github.com/Juanenriquezcc" }],
  keywords: ["Juan José Enríquez Córdoba", "Ingeniería de Software", "Software Engineer", "Desarrollo web", "Next.js", "TypeScript", "Portafolio"],
  openGraph: {
    type: "website",
    locale: "es_CO",
    title,
    description,
    siteName: "Juan José / Dev",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Stored choice wins; anything else (no value, "light", storage blocked) means light. The OS preference is never read.
const themeScript = `(function(){var d=false;try{d=localStorage.getItem("theme")==="dark"}catch(e){}document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light"})()`;

export const viewport: Viewport = {
  themeColor: "#f8f8f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script may add .dark before React hydrates.
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (light is the default). */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
