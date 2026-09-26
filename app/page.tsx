import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { getContentBySlug } from "@/lib/content";
import { getAllProjects } from "@/lib/data";
import { parseSkillGroups } from "@/lib/skills";
import { Hero } from "@/components/Hero";
import { Quote } from "@/components/Quote";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBoxes } from "@/components/SkillBoxes";

export default async function Home() {
  const bioContent = await getContentBySlug("bio");
  const skillsContent = await getContentBySlug("skills");
  const projects = getAllProjects().slice(0, 3);

  if (!bioContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Content not found. Please ensure bio.md exists in the content folder.</p>
      </div>
    );
  }

  const { name, label, email, summary, profiles, picture } = bioContent.frontmatter;
  const skillGroups = skillsContent ? parseSkillGroups(skillsContent.content) : [];
  const linkedin = profiles?.find((p: { network: string }) => p.network.toLowerCase() === "linkedin");
  const github = profiles?.find((p: { network: string }) => p.network.toLowerCase() === "github");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero name={name} label={label} summary={summary} picture={picture} />

      <Quote text="The best way to predict the future is to invent it." author="Alan Kay" />

      <section className="py-12">
        <SectionTitle title="projects" viewAllHref="/projects/" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {skillGroups.length > 0 && (
        <section className="py-12 relative">
          <SectionTitle title="skills" lineWidth="w-1/3" />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
            <div className="hidden lg:block relative h-72">
              <div className="absolute top-4 left-4 w-16 h-16 dots" />
              <div className="absolute top-12 right-8 w-24 h-24 border border-muted2" />
              <div className="absolute bottom-6 left-10 w-20 h-20 border border-muted2" />
              <div className="absolute bottom-16 right-2 w-16 h-16 dots" />
            </div>
            <SkillBoxes groups={skillGroups} />
          </div>
        </section>
      )}

      <section className="py-12">
        <SectionTitle title="about-me" lineWidth="w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white mb-4">Hello, I&apos;m {name.split(" ")[0]}!</p>
            <div className="prose mb-6" dangerouslySetInnerHTML={{ __html: bioContent.html.replace(/<h1[^>]*>.*?<\/h1>/, "") }} />
            <Link href="/resume/" className="btn-primary">
              Read more -&gt;
            </Link>
          </div>
          {picture && (
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -top-4 -left-4 w-20 h-20 dots" />
              <img src={picture} alt={name} className="relative z-10 w-full aspect-[3/4] object-cover border-b border-accent" />
              <div className="absolute bottom-10 -right-6 w-16 h-16 dots" />
            </div>
          )}
        </div>
      </section>

      <section id="contacts" className="py-12 scroll-mt-24">
        <SectionTitle title="contacts" lineWidth="w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <p className="text-muted2">
            I&apos;m interested in AI/ML engineering roles, research collaborations, and freelance opportunities.
            However, if you have other request or question, don&apos;t hesitate to contact me.
          </p>
          <div className="border border-muted2 p-4 md:justify-self-end w-full md:w-auto">
            <p className="text-white font-semibold mb-4">Message me here</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-2 nav-link">
                  <Mail size={20} /> {email}
                </a>
              </li>
              {linkedin && (
                <li>
                  <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 nav-link">
                    <Linkedin size={20} /> {linkedin.username}
                  </a>
                </li>
              )}
              {github && (
                <li>
                  <a href={github.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 nav-link">
                    <Github size={20} /> {github.username}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
