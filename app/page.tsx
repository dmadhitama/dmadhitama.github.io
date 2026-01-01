import { getContentBySlug } from "@/lib/content";
import { getAllProjects } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Rocket, Brain, Code } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const bioContent = await getContentBySlug("bio");
  const skillsContent = await getContentBySlug("skills");
  const interestsContent = await getContentBySlug("interests");
  const projects = getAllProjects().slice(0, 6);

  if (!bioContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium">Content not found. Please ensure bio.md exists in the content folder.</p>
      </div>
    );
  }

  const { name, label, email, summary, profiles, picture } = bioContent.frontmatter;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero bio={{ basics: { name, label, summary, email, profiles, picture } }} />
      
      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">
                <Rocket size={16} />
                <span>Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              A selection of my recent work in AI, Machine Learning, and Engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {projects.length > 0 && (
            <div className="mt-16 text-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl text-purple-600 dark:text-purple-400">
                  <Brain size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Expertise</h2>
              </div>
              
              <div 
                className="prose dark:prose-invert prose-purple max-w-none prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-ul:pl-0 prose-li:list-none prose-li:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-400"
                dangerouslySetInnerHTML={{ __html: skillsContent?.html || "" }}
              />
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-2xl text-red-600 dark:text-red-400">
                  <Sparkles size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Interests</h2>
              </div>
              
              <div 
                className="prose dark:prose-invert prose-red max-w-none prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-400"
                dangerouslySetInnerHTML={{ __html: interestsContent?.html || "" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-900 dark:bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Let's build something <span className="text-blue-400">extraordinary</span>.
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Whether you have a specific project in mind or just want to explore the possibilities of AI, I'm always open to discussing new opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-blue-400 hover:text-white transition-all shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            {profiles?.map((profile: any) => {
              if (profile.network.toLowerCase() === "linkedin") {
                return (
                  <a
                    key={profile.network}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

