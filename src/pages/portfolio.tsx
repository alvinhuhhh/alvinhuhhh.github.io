import { differenceInYears } from "date-fns";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Alfred",
    category: "Telegram Bot | Golang/Vue",
    description:
      "A Telegram mini-app I designed and built from scratch to serve as a family butler — handling everyday admin tasks so my household doesn't have to.",
    link: "https://t.me/goalfredbot",
  },
  {
    id: "02",
    title: "Cross-border Payments Sanctions Screening",
    category: "Distributed Systems | Java",
    description:
      "Designed and maintained distributed backend microservices that screen 588,000+ SWIFT payment messages daily in real time, keeping cross-border transactions compliant with global financial regulations.",
    link: "https://github.com/alvinhuhhh",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const commencement = new Date("2021-07-01");
  const yoe = differenceInYears(new Date(), commencement);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-x-hidden">
      <div className="noise-bg" />

      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-80 hover:opacity-100 transition-opacity cursor-default">
          Alvin Tan / <span className="text-primary opacity-100">2026</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white">
          <a
            href="https://alvinhuhhh.github.io/cv/"
            className="hover:text-primary transition-colors"
          >
            CV
          </a>
          <a href="#work" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#050505] border-b border-primary/20 flex flex-col items-center py-8 gap-6 md:hidden animate-in slide-in-from-top-4 duration-300 shadow-2xl shadow-primary/5">
            <a
              href="https://alvinhuhhh.github.io/cv/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
            >
              CV
            </a>
            <a
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
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
            <div className="inline-block px-3 py-1.5 border border-primary/60 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-primary bg-primary/10">
              Available for new challenges
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase italic break-words text-white">
              Software <br />
              <span className="text-stroke">Engineer</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16 lg:gap-24 mt-8 md:mt-12">
              <div className="flex-1 space-y-6 md:space-y-10 pb-4">
                <p className="text-xl sm:text-2xl md:text-4xl font-normal leading-relaxed text-white max-w-3xl">
                  Building high-scale, mission-critical systems in banking and
                  gov.
                </p>
                <div className="grid grid-cols-2 lg:flex lg:gap-16 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/90 gap-y-6">
                  <div>
                    <span className="block text-primary mb-2 font-black">
                      YOE
                    </span>
                    {yoe} years
                  </div>
                  <div>
                    <span className="block text-primary mb-2 font-black">
                      Expertise
                    </span>
                    Fullstack / Backend / Frontend
                  </div>
                  <div>
                    <span className="block text-primary mb-2 font-black">
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
            <h2 className="text-xs uppercase tracking-[0.5em] text-primary font-bold text-center md:text-left">
              Selected Projects
            </h2>
            <div className="h-px w-full bg-white/20" />
          </div>

          <div className="space-y-0 border-t border-white/20">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block border-b border-white/20 py-10 md:py-20 transition-colors hover:bg-primary/[0.05]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 max-w-7xl mx-auto px-2">
                  <div className="flex items-start gap-4 md:gap-8 w-full md:w-auto">
                    <span className="text-xs md:text-sm font-bold font-mono text-primary mt-1 md:mt-2">
                      {project.id}
                    </span>
                    <div className="space-y-2 md:space-y-4 flex-1">
                      <h3 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter text-white group-hover:text-primary group-hover:translate-x-2 md:group-hover:translate-x-4 transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-white/90 font-bold">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-8 md:gap-12 mt-4 md:mt-0 w-full md:w-auto self-end md:self-auto">
                    <p className="hidden lg:block text-white/90 max-w-xs text-right leading-relaxed font-medium text-sm md:text-base">
                      {project.description}
                    </p>
                    <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white/60 group-hover:text-primary group-hover:rotate-45 transition-all duration-500 flex-shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Responsive Tech Stack */}
        <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/10">
          <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-20">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter opacity-30 text-primary">
              CORE_STACK
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/90">
              <div className="space-y-2 md:space-y-4">
                <span className="text-primary block text-sm md:text-base font-black">
                  Back
                </span>
                Java / Golang
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-primary block text-sm md:text-base font-black">
                  Front
                </span>
                Angular / Vue / React
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-primary block text-sm md:text-base font-black">
                  Cloud
                </span>
                AWS / Supabase / Openshift
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-primary block text-sm md:text-base font-black">
                  Data
                </span>
                MariaDB / PostgreSQL
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Fully Responsive */}
        <section
          id="contact"
          className="py-32 md:py-60 px-6 md:px-12 text-center bg-white text-black overflow-hidden"
        >
          <div className="mx-auto space-y-8 md:space-y-12">
            <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-black">
              Get in Touch
            </h2>
            <a
              href="mailto:alvin.tan1912@gmail.com"
              className="block text-4xl sm:text-5xl md:text-[7vw] font-black tracking-tighter hover:italic hover:text-primary transition-colors lowercase underline decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8 wrap-break-word leading-tight"
            >
              alvin.tan1912@gmail.com
            </a>
            <div className="flex justify-center gap-8 md:gap-12 pt-12 md:pt-20">
              <a
                href="https://github.com/alvinhuhhh"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black hover:opacity-50 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alvintan96/"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black hover:opacity-50 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-8 md:p-12 text-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/50 border-t border-white/10">
        Available for new challenges / Built in 2026
      </footer>
    </div>
  );
}
