export function Quote({ text, author }: { text: string; author: string }) {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="relative max-w-2xl w-full">
        <span className="absolute -top-4 left-3 bg-ink px-2 text-5xl leading-none text-muted2">&ldquo;</span>
        <blockquote className="border border-muted2 p-8 text-xl md:text-2xl font-medium text-white">
          {text}
        </blockquote>
        <div className="flex justify-end">
          <div className="border border-t-0 border-muted2 px-4 py-4 text-xl text-white">- {author}</div>
        </div>
        <span className="absolute bottom-[3.2rem] right-3 bg-ink px-2 text-5xl leading-none text-muted2">&rdquo;</span>
      </div>
    </section>
  );
}
