interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--track-strong)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        {title}
      </h2>
      {children && <div className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{children}</div>}
    </header>
  );
}
