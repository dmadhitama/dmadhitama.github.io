import { getBio, getAllProjects } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Home() {
  const bio = getBio();
  const projects = getAllProjects().slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero bio={bio} />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Explore my latest work in AI, ML, and Data Science</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {projects.length > 0 && (
            <div className="text-center mt-12">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interests</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {bio.interests.map((interest, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                {interest.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bio.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.name}</h3>
                <p className="text-gray-600">{skill.keywords.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating or have a question? Feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${bio.basics.email}`}
              className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            {bio.basics.profiles.map((profile) => {
              const Icon = profile.network === "github" ? Github : 
                          profile.network === "linkedin" ? Linkedin : Instagram;
              return (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                  aria-label={profile.network}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
