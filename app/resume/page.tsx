import { getContentBySlug } from "@/lib/content";
import { parseSkillGroups } from "@/lib/skills";
import { PageTitle, SectionTitle } from "@/components/SectionTitle";
import { SkillBoxes } from "@/components/SkillBoxes";
import { Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";

const stripH1 = (html: string) => html.replace(/<h1[^>]*>.*?<\/h1>/, "");

export default async function ResumePage() {
  const bio = await getContentBySlug("bio");
  const experience = await getContentBySlug("experience");
  const education = await getContentBySlug("education");
  const skills = await getContentBySlug("skills");
  const interests = await getContentBySlug("interests");

  if (!bio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Content not found. Please ensure bio.md exists in the content folder.</p>
      </div>
    );
  }

  const { name, label, email, summary, location, profiles, picture } = bio.frontmatter;
  const skillGroups = skills ? parseSkillGroups(skills.content) : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <PageTitle title="resume" subtitle="Who am I?" />

      <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-2">{name}</h2>
          <p className="text-accent mb-6">{label}</p>
          {summary && <p className="mb-6 leading-relaxed">{summary}</p>}
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${email}`} className="flex items-center gap-2 nav-link">
                <Mail size={18} /> {email}
              </a>
            </li>
            {location && (
              <li className="flex items-center gap-2">
                <MapPin size={18} /> {location.city}, {location.countryCode}
              </li>
            )}
            {profiles?.map((profile: { network: string; url: string; username: string }) => (
              <li key={profile.network}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 nav-link">
                  {profile.network.toLowerCase() === "github" ? (
                    <Github size={18} />
                  ) : profile.network.toLowerCase() === "linkedin" ? (
                    <Linkedin size={18} />
                  ) : (
                    <Globe size={18} />
                  )}
                  {profile.username}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {picture && (
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -top-4 -right-4 w-20 h-20 dots" />
            <img src={picture} alt={name} className="relative z-10 w-full aspect-square object-cover border-b border-accent" />
          </div>
        )}
      </section>

      {experience && (
        <section className="mb-20">
          <SectionTitle title="experience" lineWidth="w-1/3" />
          <div className="prose" dangerouslySetInnerHTML={{ __html: stripH1(experience.html) }} />
        </section>
      )}

      {education && (
        <section className="mb-20">
          <SectionTitle title="education" lineWidth="w-1/3" />
          <div className="prose" dangerouslySetInnerHTML={{ __html: stripH1(education.html) }} />
        </section>
      )}

      {skillGroups.length > 0 && (
        <section className="mb-20">
          <SectionTitle title="skills" lineWidth="w-1/3" />
          <SkillBoxes groups={skillGroups} />
        </section>
      )}

      {interests && (
        <section>
          <SectionTitle title="interests" lineWidth="w-1/3" />
          <div className="prose" dangerouslySetInnerHTML={{ __html: stripH1(interests.html) }} />
        </section>
      )}
    </div>
  );
}
