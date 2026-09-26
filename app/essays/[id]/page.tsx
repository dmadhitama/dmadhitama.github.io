import { getEssayById, getAllEssays } from "@/lib/data";
import { notFound } from "next/navigation";
import { marked } from "marked";
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link href="/essays/" className="nav-link inline-block mb-10">
        &lt;~~ back to essays
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
            <span className="text-accent">/</span>
            {essay.title}
          </h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-accent">{formatDate(essay.date)}</span>
            {essay.labels.map((label) => (
              <span key={label} className="border border-muted2 px-2">
                {label}
              </span>
            ))}
          </div>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />

        <footer className="mt-16 border border-muted2 p-6">
          <p className="text-white font-semibold mb-2">Enjoyed this essay?</p>
          <p className="mb-6">I regularly write about AI, engineering, and technology.</p>
          <Link href="/resume/" className="btn-primary">
            View my experience ~~&gt;
          </Link>
        </footer>
      </article>
    </div>
  );
}
