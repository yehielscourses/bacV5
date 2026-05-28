interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>{label ?? "Progression"}</span>
        <span>{Math.round(safeValue)}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-[var(--track-accent)] transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}
