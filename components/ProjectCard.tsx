import Link from "next/link";
import { Project } from "@/lib/types";
import { Calendar, Tag } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {project.image && (
          <div className="h-48 overflow-hidden bg-gray-200">
            <img
              src={`/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.labels.slice(0, 3).map((label, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                <Tag size={12} />
                {label}
              </span>
            ))}
            {project.labels.length > 3 && (
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                +{project.labels.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
