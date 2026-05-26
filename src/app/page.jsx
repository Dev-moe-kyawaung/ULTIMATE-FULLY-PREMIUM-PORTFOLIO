import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import FeatureCard from "@/components/FeatureCard";
import GithubLiveStats from "@/components/GithubLiveStats";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import portfolioData from "@/data/portfolio";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);

  return (
    <>
      <AnimatedHero />

      <div className="mx-auto max-w-7xl space-y-24 px-6 pb-24">
        {/* About & Skills */}
        <AboutSection />

        {/* Features */}
        <section>
          <SectionTitle
            label="Why This Portfolio"
            title="Built With Purpose"
            subtitle="Every detail of this portfolio is crafted to demonstrate real frontend quality — from design to performance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioData.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <SectionTitle
              label="Work"
              title="Featured Projects"
              subtitle="A selection of recent work that reflects my approach to building high-quality web experiences."
            />
            <Link
              href="/projects"
              className="shrink-0 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              View all projects
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* GitHub Live Stats */}
        <section>
          <SectionTitle
            label="GitHub"
            title="Live Activity"
            subtitle="Real-time stats pulled directly from the GitHub API."
          />
          <div className="mt-10">
            <GithubLiveStats />
          </div>
        </section>

        {/* Contact */}
        <ContactSection />
      </div>
    </>
  );
}
