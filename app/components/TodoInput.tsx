'use client';

import { FormEvent, useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    
    onAddTodo(text);
    setInputValue('');
  };

  return (
    <section 
      className="glass glass-dark border-2 border-[rgb(var(--border-color))] rounded-2xl p-6 mb-8 shadow-xl animate-fade-in-up"
      style={{ animationDelay: '200ms' }}
      aria-label="Thêm công việc mới"
    >
      <form onSubmit={handleSubmit} className="flex gap-3">
        <label htmlFor="todo-input" className="sr-only">
          Nhập công việc mới
        </label>
        <input
          type="text"
          id="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-3.5 border-2 border-[rgb(var(--border-color))] rounded-lg text-base text-[rgb(var(--text-primary))] bg-white dark:bg-slate-900 transition-all duration-200 outline-none focus:border-[rgb(var(--border-focus))] focus:shadow-[0_0_0_3px_rgba(165,243,252,0.3)] placeholder:text-[rgb(var(--text-muted))]"
          placeholder="Thêm công việc mới..."
          aria-label="Nhập công việc mới"
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold font-[family-name:var(--font-heading)] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-3 focus-visible:outline-cyan-200 focus-visible:outline-offset-2 inline-flex items-center justify-center gap-2"
          aria-label="Thêm công việc"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Thêm</span>
        </button>
      </form>
    </section>
  );
}
