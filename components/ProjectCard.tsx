import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const toPath = (src: string) => (src.startsWith("/") || src.startsWith("http") ? src : `/${src}`);
  const thumbnail = project.thumbnail ? toPath(project.thumbnail) : null;
  const logo = project.image && project.image !== project.thumbnail ? toPath(project.image) : null;

  return (
    <article className="border border-muted2 flex flex-col h-full">
      {thumbnail && (
        <div className="relative h-48 overflow-hidden border-b border-muted2 bg-ink">
          <img
            src={thumbnail}
            alt={project.title}
            className={`w-full h-full ${thumbnail.endsWith(".svg") ? "object-contain p-3" : "object-cover object-top"}`}
          />
          {logo && (
            <img
              src={logo}
              alt=""
              className="absolute top-2 left-2 w-9 h-9 object-contain bg-white p-1 border border-muted2"
            />
          )}
        </div>
      )}

      {project.labels.length > 0 && (
        <div className="border-b border-muted2 px-2 py-2 text-muted2 flex flex-wrap gap-x-2">
          {project.labels.slice(0, 4).map((label) => (
            <span key={label}>{label}</span>
          ))}
          {project.labels.length > 4 && <span>+{project.labels.length - 4}</span>}
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-2xl font-medium text-white mb-4">{project.title}</h3>
        <p className="text-muted2 mb-4 line-clamp-3 flex-1">{project.summary}</p>
        <div className="flex gap-4">
          <Link href={`/projects/${project.id}/`} className="btn-primary">
            Details &lt;~&gt;
          </Link>
        </div>
      </div>
    </article>
  );
}
