import { getProjectById, getAllProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const htmlContent = marked(project.content);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {project.image && (
            <div className="h-96 overflow-hidden bg-gray-200">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {project.date}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.labels.map((label, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  <Tag size={14} />
                  {label}
                </span>
              ))}
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
