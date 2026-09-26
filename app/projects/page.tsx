import { getAllProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTitle, SectionTitle } from "@/components/SectionTitle";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <PageTitle title="projects" subtitle="List of my projects in AI, machine learning, and engineering" />

      <SectionTitle title="complete-apps" lineWidth="w-1/3" />
      {projects.length === 0 ? (
        <p className="border border-dashed border-muted2 p-12 text-center">No projects found in the projects folder.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
