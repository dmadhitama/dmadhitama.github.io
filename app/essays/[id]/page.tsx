import { getEssayById, getAllEssays } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((essay) => ({
    id: essay.id,
  }));
}

export default async function EssayPage({ params }: { params: { id: string } }) {
  const essay = getEssayById(params.id);

  if (!essay) {
    notFound();
  }

  const htmlContent = await marked(essay.content);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/essays"
          className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-10 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Writing
        </Link>

        <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-16">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-500" />
                <span>{formatDate(essay.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-purple-500" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
              {essay.title}
            </h1>

            {essay.labels.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {essay.labels.map((label, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold uppercase tracking-widest"
                  >
                    {label}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose dark:prose-invert prose-blue max-w-none prose-headings:tracking-tight prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-img:rounded-3xl prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:italic prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          
          <footer className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Enjoyed this essay?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I regularly write about AI, engineering, and technology. 
                Follow me on LinkedIn to stay updated with my latest thoughts.
              </p>
              <Link 
                href="/resume" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-colors"
              >
                View My Experience
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

