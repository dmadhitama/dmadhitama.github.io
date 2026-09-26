import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks } from "@/components/socialLinks";

const icons = { Email: Mail, GitHub: Github, LinkedIn: Linkedin, Instagram: Instagram };

export function MediaSidebar() {
  return (
    <div className="hidden xl:flex fixed top-0 left-4 z-40 flex-col items-center gap-2">
      <div className="w-px h-48 bg-muted2" />
      {socialLinks.map(({ label, href }) => {
        const Icon = icons[label];
        return (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="p-1 text-muted2 hover:text-white transition-colors"
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}
