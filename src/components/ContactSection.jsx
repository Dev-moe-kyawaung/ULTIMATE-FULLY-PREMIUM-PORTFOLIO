import portfolioData from "@/data/portfolio";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur-xl md:p-12"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s create something exceptional.
          </h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Whether you want to collaborate, hire, or connect professionally, feel
            free to send a message. I am always open to meaningful opportunities.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm transition hover:border-cyan-400/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-cyan-400/10 text-cyan-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="mt-0.5 font-medium text-white">{portfolioData.profile.email}</p>
              </div>
            </a>

            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm transition hover:border-cyan-400/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-cyan-400/10 text-cyan-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">GitHub</p>
                <p className="mt-0.5 font-medium text-white">@Dev-moe-kyawaung</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-cyan-400/10 text-cyan-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="mt-0.5 font-medium text-white">{portfolioData.profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
