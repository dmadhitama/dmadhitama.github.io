import { getEssayById, getAllEssays } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((essay) => ({
    id: essay.id,
  }));
}

export default function EssayPage({ params }: { params: { id: string } }) {
  const essay = getEssayById(params.id);

  if (!essay) {
    notFound();
  }

  const htmlContent = marked(essay.content);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/essays"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Essays
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Calendar size={16} />
            <span>{formatDate(essay.date)}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {essay.title}
          </h1>

          {essay.labels.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {essay.labels.map((label, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  <Tag size={14} />
                  {label}
                </span>
              ))}
            </div>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </div>
    </div>
  );
}
