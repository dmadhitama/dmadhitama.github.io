import { getProjectById, getAllProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const htmlContent = await marked(project.content);

  const imagePath = project.image
    ? (project.image.startsWith("/") ? project.image : `/${project.image}`)
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link href="/projects/" className="nav-link inline-block mb-10">
        &lt;~~ back to projects
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            <span className="text-accent">/</span>
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted2">
            <span className="text-accent">{project.date}</span>
            {project.labels.map((label) => (
              <span key={label} className="border border-muted2 px-2">
                {label}
              </span>
            ))}
          </div>
        </header>

        {imagePath && (
          <div className="border border-muted2 mb-10">
            <img src={imagePath} alt={project.title} className="w-full max-h-[420px] object-cover" />
          </div>
        )}

        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </div>
  );
}
