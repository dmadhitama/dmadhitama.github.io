import Link from "next/link";

interface HeroProps {
  name: string;
  label: string;
  summary: string;
  picture?: string;
}

export function Hero({ name, label, summary, picture }: HeroProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 pb-16">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug mb-8">
          {name.split(" ")[0]} is an{" "}
          <span className="text-accent">AI/ML engineer</span> and{" "}
          <span className="text-accent">data scientist</span>
        </h1>
        <p className="text-muted2 mb-8 leading-relaxed">{summary}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#contacts" className="btn-primary">
            Contact me !!
          </a>
          <Link href="/resume/" className="btn-secondary">
            Resume ~~&gt;
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute top-10 -left-2 w-20 h-20 border border-accent" />
        <div className="absolute bottom-16 -right-2 w-20 h-20 dots" />
        {picture && (
          <img
            src={picture}
            alt={name}
            className="relative z-10 w-full aspect-square object-cover grayscale-[20%] border-b border-accent"
          />
        )}
        <div className="relative z-10 border border-muted2 bg-ink px-2 py-2 flex items-center gap-2 text-muted2">
          <span className="w-4 h-4 bg-accent inline-block shrink-0" />
          <span>
            Currently working as <span className="text-white font-semibold">{label}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
