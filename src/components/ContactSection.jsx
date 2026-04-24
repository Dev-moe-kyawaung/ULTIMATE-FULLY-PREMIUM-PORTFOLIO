import portfolioData from "@/data/portfolio";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur-xl md:p-10"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            Let&apos;s create something exceptional.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Whether you want to collaborate, hire, or connect professionally, feel
            free to send a message. I am always open to meaningful opportunities.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p>Email: {portfolioData.profile.email}</p>
            <p>GitHub: {portfolioData.profile.github}</p>
            <p>Location: {portfolioData.profile.location}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
