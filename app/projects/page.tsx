import { getAllProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTitle, SectionTitle } from "@/components/SectionTitle";

export default function ProjectsPage() {
  const all = getAllProjects();
  const work = all.filter((p) => p.type === "project");
  const side = all.filter((p) => p.type === "side-project");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <PageTitle title="projects" subtitle="List of my projects in AI, machine learning, and engineering" />

      <SectionTitle title="complete-apps" lineWidth="w-1/3" />
      {work.length === 0 ? (
        <p className="border border-dashed border-muted2 p-12 text-center">No projects found in the projects folder.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {work.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {side.length > 0 && (
        <div className="mt-16">
          <SectionTitle title="side-projects" lineWidth="w-1/3" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {side.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
