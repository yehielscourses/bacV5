import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

export function Card({ children, className = "", highlight = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        highlight
          ? "border-[var(--track-accent)] bg-[var(--track-soft)]"
          : "border-slate-200/90 bg-white dark:border-slate-700 dark:bg-slate-900"
      } ${className}`}
    >
      {children}
    </div>
  );
}
