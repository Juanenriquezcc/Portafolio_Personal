import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_10%_12%,rgba(74,222,128,0.24),transparent_30%),radial-gradient(circle_at_86%_28%,rgba(34,197,94,0.18),transparent_34%),linear-gradient(180deg,#f6fcf6_0%,#eef8ee_44%,#f8fdf8_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(rgba(16,32,20,0.12) 0.5px, transparent 0.5px)", backgroundSize: "3px 3px" }} />
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-emerald-300/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-64 h-72 w-72 rounded-full bg-green-400/22 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/20 blur-[120px]" />
      <Navbar />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-28 md:px-10">
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Footer />
      </main>
    </div>
  );
}
