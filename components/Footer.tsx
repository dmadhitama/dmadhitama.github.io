import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { socialLinks } from "./socialLinks";

const icons = { Email: Mail, GitHub: Github, LinkedIn: Linkedin, Instagram: Instagram };

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted2 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-2 text-white font-bold">
                <Logo />
                Donny
              </span>
              <a href="mailto:dm.adhitama@gmail.com" className="nav-link">
                dm.adhitama@gmail.com
              </a>
            </div>
            <p className="text-white">AI/ML Engineer and Data Scientist</p>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-white mb-3">Media</h3>
            <div className="flex gap-2">
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
          </div>
        </div>

        <p className="mt-12 text-center text-muted2">
          &copy; Copyright {currentYear}. Made by Donny M. Adhitama
        </p>
      </div>
    </footer>
  );
}
