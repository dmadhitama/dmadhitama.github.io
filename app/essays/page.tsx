import { getAllEssays } from "@/lib/data";
import Link from "next/link";
import { Calendar, Tag, BookOpen, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold text-sm mb-6">
            <BookOpen size={16} />
            <span>Writing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Essays & Thoughts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Reflections on technology, machine learning, and the intersection of engineering and life.
          </p>
        </div>

        {essays.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No essays found yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {essays.map((essay) => (
              <Link key={essay.id} href={`/essays/${essay.id}`} className="block group">
                <article className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-xl group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Calendar size={16} className="text-blue-500" />
                      </div>
                      <span>{formatDate(essay.date)}</span>
                    </div>
                    
                    {essay.labels.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {essay.labels.map((label, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {essay.title}
                  </h2>

                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    Read Full Essay
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

