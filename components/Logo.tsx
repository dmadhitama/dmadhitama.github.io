export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`w-4 h-4 fill-current ${className}`} aria-hidden="true">
      <path d="M0 0h6v1H1v4H0V0Zm10 0h6v5h-1V1h-5V0ZM4 4h8v8H4V4Zm2 2v4h4V6H6ZM0 11h1v4h5v1H0v-5Zm15 0h1v5h-6v-1h5v-4Z" />
    </svg>
  );
}
