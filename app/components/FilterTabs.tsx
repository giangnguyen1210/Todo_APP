'use client';

import { FilterType } from '../types';

interface FilterTabsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'active', label: 'Đang làm' },
  { value: 'completed', label: 'Hoàn thành' },
];

export default function FilterTabs({ currentFilter, onFilterChange }: FilterTabsProps) {
  return (
    <nav 
      className="flex gap-2 mb-6 glass glass-dark border border-[rgb(var(--border-color))] rounded-xl p-2 shadow-md animate-fade-in-up"
      style={{ animationDelay: '300ms' }}
      aria-label="Bộ lọc công việc"
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`flex-1 px-4 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 focus-visible:outline-offset-2 ${
            currentFilter === filter.value
              ? 'bg-cyan-600 text-white shadow-sm'
              : 'bg-transparent text-[rgb(var(--text-secondary))] hover:bg-cyan-600/10 hover:text-cyan-600'
          }`}
          aria-label={`Hiển thị ${filter.label.toLowerCase()}`}
          aria-pressed={currentFilter === filter.value}
        >
          {filter.label}
        </button>
      ))}
    </nav>
  );
}
