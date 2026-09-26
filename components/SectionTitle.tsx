import Link from "next/link";

interface SectionTitleProps {
  title: string;
  lineWidth?: string;
  viewAllHref?: string;
}

export function SectionTitle({ title, lineWidth = "w-1/2", viewAllHref }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-12">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-3xl font-medium text-white whitespace-nowrap">
          <span className="text-accent">#</span>
          {title}
        </h2>
        <div className={`h-px bg-accent ${lineWidth} hidden sm:block`} />
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="text-white hover:text-accent transition-colors whitespace-nowrap">
          View all ~~&gt;
        </Link>
      )}
    </div>
  );
}

export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-16">
      <h1 className="text-4xl font-semibold text-white mb-3">
        <span className="text-accent">/</span>
        {title}
      </h1>
      <p className="text-muted2">{subtitle}</p>
    </div>
  );
}
