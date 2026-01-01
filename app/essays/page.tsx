import { getAllEssays } from "@/lib/data";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Essays</h1>
          <p className="text-xl text-gray-600">
            Thoughts and reflections on technology, engineering, and life
          </p>
        </div>

        {essays.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No essays found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {essays.map((essay) => (
              <Link key={essay.id} href={`/essays/${essay.id}`}>
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{formatDate(essay.date)}</span>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {essay.title}
                  </h2>

                  {essay.labels.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {essay.labels.map((label, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          <Tag size={12} />
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
