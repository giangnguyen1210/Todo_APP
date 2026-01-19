'use client';

import { useMemo } from 'react';
import StatsCard from './components/StatsCard';
import TodoInput from './components/TodoInput';
import KanbanBoard from './components/KanbanBoard';
import EmptyState from './components/EmptyState';
import { useTodosAPI } from './hooks/useTodosAPI';

export default function Home() {
  const { todos, isLoading, error, addTodo, updateTodoStatus, deleteTodo } = useTodosAPI();

  // Calculate statistics
  const stats = useMemo(() => {
    const total = todos.length;
    const todoCount = todos.filter((t) => t.status === 'todo').length;
    const inProgressCount = todos.filter((t) => t.status === 'in-progress').length;
    const doneCount = todos.filter((t) => t.status === 'done').length;
    return { total, todoCount, inProgressCount, doneCount };
  }, [todos]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-cyan-600 text-lg font-semibold">
          Đang tải...
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg font-semibold mb-2">
            ❌ Lỗi: {error}
          </div>
          <p className="text-[rgb(var(--text-muted))]">
            Vui lòng kiểm tra API server đang chạy tại http://localhost:3001
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-8 animate-fade-in-down">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-cyan-600 dark:text-cyan-400 mb-2 tracking-tight">
          ✨ Todo Kanban Board
        </h1>
        <p className="text-base text-[rgb(var(--text-secondary))] font-medium">
          Quản lý công việc của bạn với Kanban - kéo thả dễ dàng
        </p>
      </header>

      {/* Statistics Cards */}
      <section 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        aria-label="Thống kê công việc"
      >
        <StatsCard value={stats.total} label="Tổng số" delay={100} />
        <StatsCard value={stats.todoCount} label="Todo" delay={150} />
        <StatsCard value={stats.inProgressCount} label="In Progress" delay={200} />
        <StatsCard value={stats.doneCount} label="Done" delay={250} />
      </section>

      {/* Input Form */}
      <TodoInput onAddTodo={addTodo} />

      {/* Kanban Board or Empty State */}
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <KanbanBoard
          todos={todos}
          onStatusChange={updateTodoStatus}
          onDelete={deleteTodo}
        />
      )}

      {/* Keyboard Shortcut Hint */}
      <div className="mt-8 text-center text-sm text-[rgb(var(--text-muted))] opacity-60">
        💡 Tip: Nhấn <kbd className="px-2 py-1 bg-white/50 dark:bg-slate-800/50 rounded border border-[rgb(var(--border-color))]">Ctrl+K</kbd> để focus vào ô nhập
      </div>
    </div>
  );
}
