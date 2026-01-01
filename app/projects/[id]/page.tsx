import { getProjectById, getAllProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Calendar, Tag, ArrowLeft, Globe, Github as GithubIcon } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-10 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          {project.image && (
            <div className="relative h-64 md:h-[400px] overflow-hidden">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div>
          )}

          <div className="p-8 md:p-12">
            {!project.image && (
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
                {project.title}
              </h1>
            )}

            <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
                <Calendar size={18} className="text-blue-500" />
                {project.date}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.labels.map((label, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    <Tag size={12} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="prose dark:prose-invert prose-blue max-w-none prose-headings:tracking-tight prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-img:rounded-2xl prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

