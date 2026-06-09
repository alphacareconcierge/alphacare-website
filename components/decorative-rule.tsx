export function DecorativeRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-gold/55" />
      <span className="font-serif text-2xl leading-none text-gold">✦</span>
      <span className="h-px flex-1 bg-gold/55" />
    </div>
  );
}
