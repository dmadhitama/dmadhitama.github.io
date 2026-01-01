import Link from "next/link";
import { Project } from "@/lib/types";
import { Calendar, Tag, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Ensure image path is correct (handle leading slash)
  const imagePath = project.image 
    ? (project.image.startsWith('/') ? project.image : `/${project.image}`)
    : null;

  return (
    <Link href={`/projects/${project.id}`} className="group h-full">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-blue-500/30 dark:group-hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col">
        {imagePath && (
          <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img
              src={imagePath}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </div>
        )}
        
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Calendar size={16} className="text-blue-500" />
            </div>
            <span>{project.date}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.labels.slice(0, 3).map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-[10px] font-bold uppercase tracking-wider"
              >
                {label}
              </span>
            ))}
            {project.labels.length > 3 && (
              <span className="inline-flex items-center px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-[10px] font-bold uppercase">
                +{project.labels.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm mt-auto">
            View Details
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

