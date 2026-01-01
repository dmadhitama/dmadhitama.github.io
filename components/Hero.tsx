import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  bio: {
    basics: {
      name: string;
      label: string;
      summary: string;
      email: string;
      picture?: string;
      profiles?: { network: string; url: string }[];
    };
  };
}

export function Hero({ bio }: HeroProps) {
  const { name, label, summary, picture } = bio.basics;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-gray-950 transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-500/20" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent dark:from-purple-500/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {picture && (
            <div className="relative mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={picture}
                  alt={name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{name}</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium mb-8 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            {label}
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed italic">
            "{summary}"
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/projects"
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl overflow-hidden transition-all shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
              </span>
            </a>
            <a
              href="/resume"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
            >
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}

