import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "High-Volume Transaction Processor",
    category: "Distributed Systems / Java",
    description:
      "Designed a Spring Boot microservice handling 500k+ daily financial operations with 99.99% uptime.",
    link: "https://github.com/alvinhuhhh",
  },
  {
    id: "02",
    title: "Healthcare Data Pipeline",
    category: "Data Engineering / Python",
    description:
      "Automated ETL pipeline reducing manual processing time by 80% via Apache Airflow and Snowflake.",
    link: "https://github.com/alvinhuhhh",
  },
  {
    id: "03",
    title: "GovTech Portal Modernization",
    category: "Fullstack / React",
    description:
      "Led migration of legacy government portal to a modern React-based design system with 98% accessibility.",
    link: "https://github.com/alvinhuhhh",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <div className="noise-bg" />

      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-transparent">
        <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity cursor-default">
          Alvin Tan / 2026
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#work" className="hover:text-neutral-400 transition-colors">
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden animate-in slide-in-from-top-4 duration-300">
            <a
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs uppercase tracking-[0.3em]"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs uppercase tracking-[0.3em]"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Responsive Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 md:pt-20">
          <div className="max-w-6xl w-full mx-auto space-y-8 md:space-y-12">
            <div className="inline-block px-3 py-1 border border-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/60">
              Available for new challenges
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase italic break-words text-white">
              Software <br />
              <span className="text-stroke">Engineer</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16 lg:gap-24 mt-8 md:mt-12">
              <div className="flex-1 space-y-6 md:space-y-10 pb-4">
                <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-white max-w-3xl">
                  Building high-scale, mission-critical systems in banking, gov,
                  and healthcare sectors.
                </p>
                <div className="grid grid-cols-2 lg:flex lg:gap-16 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/70 gap-y-6">
                  <div>
                    <span className="block text-white mb-1 font-semibold">
                      Scale
                    </span>
                    500K+ Daily TXNS
                  </div>
                  <div>
                    <span className="block text-white mb-1 font-semibold">
                      Expertise
                    </span>
                    Backend / AWS
                  </div>
                  <div>
                    <span className="block text-white mb-1 font-semibold">
                      Base
                    </span>
                    Singapore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section - Mobile Optimized Vertical List */}
        <section
          id="work"
          className="py-24 md:py-40 px-6 md:px-12 space-y-16 md:space-y-32"
        >
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 text-center md:text-left">
              Selected Projects
            </h2>
            <div className="h-px w-full bg-white/10" />
          </div>

          <div className="space-y-0 border-t border-white/10">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block border-b border-white/10 py-10 md:py-20 transition-colors hover:bg-neutral-900/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 max-w-7xl mx-auto px-2">
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="text-[10px] md:text-xs font-mono text-white/20 mt-1 md:mt-2">
                      {project.id}
                    </span>
                    <div className="space-y-2 md:space-y-4">
                      <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-[9px] md:text-sm uppercase tracking-[0.2em] text-white/40">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-8 md:gap-12 mt-4 md:mt-0">
                    <p className="hidden lg:block text-neutral-500 max-w-xs text-right leading-relaxed font-light text-sm">
                      {project.description}
                    </p>
                    <ArrowUpRight className="w-6 h-6 md:w-12 md:h-12 text-white/10 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Responsive Tech Stack */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-neutral-950">
          <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-20">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter opacity-10">
              CORE_STACK
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-neutral-500">
              <div className="space-y-2 md:space-y-4">
                <span className="text-white block">Java</span>
                Spring Boot / Kafka
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-white block">Cloud</span>
                AWS Architect Cert
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-white block">Front</span>
                React / TS / Tailwind
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-white block">Data</span>
                Postgres / Snowflake
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Fully Responsive */}
        <section
          id="contact"
          className="py-32 md:py-60 px-6 md:px-12 text-center bg-white text-black overflow-hidden"
        >
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-bold">
              Get in Touch
            </h2>
            <a
              href="mailto:contact@example.com"
              className="block text-3xl sm:text-5xl md:text-[7vw] font-black tracking-tighter hover:italic transition-all duration-500 lowercase underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8 break-words leading-tight"
            >
              hello@alvinhuhhh.com
            </a>
            <div className="flex justify-center gap-8 md:gap-12 pt-12 md:pt-20">
              <a
                href="https://github.com/alvinhuhhh"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alvinhuhhh"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-8 md:p-12 text-center text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 border-t border-white/5">
        Designed for scale / Built in 2026
      </footer>
    </div>
  );
}
