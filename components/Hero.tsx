import { Bio } from "@/lib/types";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  bio: Bio;
}

export function Hero({ bio }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {bio.basics.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-blue-100">
              {bio.basics.label}
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
              {bio.basics.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                View Projects
              </a>
              <a
                href="/resume"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={bio.basics.picture}
                  alt={bio.basics.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 rounded-full p-4 shadow-lg">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
