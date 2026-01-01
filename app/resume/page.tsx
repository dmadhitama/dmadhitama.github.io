import { getContentBySlug } from "@/lib/content";
import { Mail, MapPin, Globe, Briefcase, GraduationCap, Code, Heart, Github, Linkedin } from "lucide-react";

export default async function ResumePage() {
  const bio = await getContentBySlug("bio");
  const experience = await getContentBySlug("experience");
  const education = await getContentBySlug("education");
  const skills = await getContentBySlug("skills");
  const interests = await getContentBySlug("interests");

  if (!bio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium">Content not found. Please ensure bio.md exists in the content folder.</p>
      </div>
    );
  }

  const { name, label, email, website, summary, location, profiles } = bio.frontmatter;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-800 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
                {name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                {label}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Mail size={18} />
                  </div>
                  <a href={`mailto:${email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {email}
                  </a>
                </div>
                {location && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                      <MapPin size={18} />
                    </div>
                    <span>{location.city}, {location.countryCode}</span>
                  </div>
                )}
                {website && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                      <Globe size={18} />
                    </div>
                    <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Portfolio
                    </a>
                  </div>
                )}
              </div>
            </div>

            {profiles && (
              <div className="flex gap-3">
                {profiles.map((profile: any, index: number) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all shadow-sm"
                    title={profile.network}
                  >
                    {profile.network.toLowerCase() === "github" ? <Github size={20} /> : 
                     profile.network.toLowerCase() === "linkedin" ? <Linkedin size={20} /> : 
                     <span className="text-xs font-bold uppercase">{profile.network.slice(0, 2)}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>

          {summary && (
            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{summary}"
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            {experience && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl text-blue-600 dark:text-blue-400">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Experience</h2>
                </div>
                <div 
                  className="prose dark:prose-invert prose-blue max-w-none prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-2 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:text-gray-600 dark:prose-li:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: experience.html }}
                />
              </section>
            )}

            {/* Education Section */}
            {education && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-2xl text-green-600 dark:text-green-400">
                    <GraduationCap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Education</h2>
                </div>
                <div 
                  className="prose dark:prose-invert prose-green max-w-none prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-2 prose-p:text-gray-600 dark:prose-p:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: education.html }}
                />
              </section>
            )}
          </div>

          <div className="space-y-8">
            {/* Skills Section */}
            {skills && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 border border-gray-100 dark:border-gray-800 h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl text-purple-600 dark:text-purple-400">
                    <Code size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Skills</h2>
                </div>
                <div 
                  className="prose dark:prose-invert prose-purple max-w-none prose-h2:text-lg prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-2 prose-ul:pl-0 prose-li:list-none prose-li:mb-4"
                  dangerouslySetInnerHTML={{ __html: skills.html }}
                />
              </section>
            )}

            {/* Interests Section */}
            {interests && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm p-8 border border-gray-100 dark:border-gray-800 h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-2xl text-red-600 dark:text-red-400">
                    <Heart size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Interests</h2>
                </div>
                <div 
                  className="prose dark:prose-invert prose-red max-w-none prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-2 prose-li:text-gray-600 dark:prose-li:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: interests.html }}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
