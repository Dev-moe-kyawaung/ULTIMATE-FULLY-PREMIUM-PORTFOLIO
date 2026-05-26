import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import portfolioData from "@/data/portfolio";

export const metadata = {
  title: "Projects — Moe Kyaw Aung",
  description: "Browse all projects by Moe Kyaw Aung — full-stack web applications, UI components, and developer tools.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <SectionTitle
        label="Portfolio"
        title="All Projects"
        subtitle="A complete collection of my work across full-stack applications, UI engineering, and developer tools."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
