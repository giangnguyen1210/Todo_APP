'use client';

interface StatsCardProps {
  value: number;
  label: string;
  delay?: number;
}

export default function StatsCard({ value, label, delay = 0 }: StatsCardProps) {
  return (
    <div 
      className="glass glass-dark border-2 border-[rgb(var(--border-color))] rounded-xl p-4 shadow-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-xl hover:bg-white/95 dark:hover:bg-slate-800/95 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold font-[family-name:var(--font-heading)] text-cyan-600 dark:text-cyan-400 leading-none mb-2">
        {value}
      </div>
      <div className="text-sm text-[rgb(var(--text-secondary))] font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
