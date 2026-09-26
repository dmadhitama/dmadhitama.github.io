import Link from "next/link";
import { getAllEssays } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { PageTitle, SectionTitle } from "@/components/SectionTitle";

export default function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <PageTitle title="essays" subtitle="Reflections on technology, machine learning, and life" />

      <SectionTitle title="writings" lineWidth="w-1/3" />
      {essays.length === 0 ? (
        <p className="border border-dashed border-muted2 p-12 text-center">No essays found yet. Stay tuned!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essays.map((essay) => (
            <article key={essay.id} className="border border-muted2 flex flex-col">
              <div className="border-b border-muted2 px-2 py-2 flex flex-wrap gap-x-2">
                <span className="text-accent">{formatDate(essay.date)}</span>
                {essay.labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-2xl font-medium text-white mb-6 flex-1">{essay.title}</h2>
                <div>
                  <Link href={`/essays/${essay.id}/`} className="btn-primary">
                    Read &lt;~&gt;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
