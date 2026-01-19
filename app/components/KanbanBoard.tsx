'use client';

import { useState } from 'react';
import { Todo, TodoStatus } from '../types';

interface KanbanColumnProps {
  title: string;
  status: TodoStatus;
  todos: Todo[];
  onStatusChange: (id: string, newStatus: TodoStatus) => void;
  onDelete: (id: string) => void;
  colorClass: string;
}

function KanbanColumn({ title, status, todos, onStatusChange, onDelete, colorClass }: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const todoId = e.dataTransfer.getData('todoId');
    if (todoId) {
      onStatusChange(todoId, status);
    }
  };

  const handleDragStart = (e: React.DragEvent, todoId: string) => {
    e.dataTransfer.setData('todoId', todoId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa công việc này?')) {
      onDelete(id);
    }
  };

  return (
    <div
      className={`flex-1 min-w-[280px] glass glass-dark border-2 rounded-xl p-4 transition-all duration-200 ${
        isDragOver ? 'border-cyan-400 bg-cyan-50/50 dark:bg-cyan-900/20 scale-[1.02]' : 'border-[rgb(var(--border-color))]'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[rgb(var(--border-color))]">
        <h2 className={`text-lg font-bold font-[family-name:var(--font-heading)] ${colorClass}`}>
          {title}
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClass} bg-opacity-10`}>
          {todos.length}
        </span>
      </div>

      {/* Todo Items */}
      <div className="space-y-3 min-h-[200px]">
        {todos.length === 0 ? (
          <div className="text-center py-8 text-[rgb(var(--text-muted))] text-sm">
            Trống
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              draggable
              onDragStart={(e) => handleDragStart(e, todo._id)}
              className="group bg-white dark:bg-slate-900 border-2 border-[rgb(var(--border-color))] rounded-lg p-3 cursor-move transition-all duration-200 hover:shadow-lg hover:border-cyan-400 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-[rgb(var(--text-primary))] font-medium text-sm leading-relaxed break-words">
                    {todo.text}
                  </p>
                  <span className="text-xs text-[rgb(var(--text-muted))] mt-1 block">
                    {new Date(todo.createdAt).toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(todo._id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-[rgb(var(--text-muted))] hover:text-red-600"
                  aria-label="Xóa"
                  title="Xóa công việc"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
              
              {/* Drag indicator */}
              <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-50 transition-opacity">
                <svg className="w-4 h-4 text-[rgb(var(--text-muted))]" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="9" cy="6" r="1.5" />
                  <circle cx="15" cy="6" r="1.5" />
                  <circle cx="9" cy="12" r="1.5" />
                  <circle cx="15" cy="12" r="1.5" />
                  <circle cx="9" cy="18" r="1.5" />
                  <circle cx="15" cy="18" r="1.5" />
                </svg>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

interface KanbanBoardProps {
  todos: Todo[];
  onStatusChange: (id: string, newStatus: TodoStatus) => void;
  onDelete: (id: string) => void;
}

export default function KanbanBoard({ todos, onStatusChange, onDelete }: KanbanBoardProps) {
  const todoTodos = todos.filter((t) => t.status === 'todo');
  const inProgressTodos = todos.filter((t) => t.status === 'in-progress');
  const doneTodos = todos.filter((t) => t.status === 'done');

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      {/* Instructions */}
      <div className="mb-4 p-3 glass glass-dark border border-cyan-200 dark:border-cyan-800 rounded-lg text-sm text-[rgb(var(--text-secondary))]">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">Kéo và thả công việc giữa các cột để thay đổi trạng thái</span>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KanbanColumn
          title="📝 Todo"
          status="todo"
          todos={todoTodos}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          colorClass="text-slate-600 dark:text-slate-400"
        />
        <KanbanColumn
          title="⚡ In Progress"
          status="in-progress"
          todos={inProgressTodos}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          colorClass="text-cyan-600 dark:text-cyan-400"
        />
        <KanbanColumn
          title="✅ Done"
          status="done"
          todos={doneTodos}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          colorClass="text-green-600 dark:text-green-400"
        />
      </div>
    </div>
  );
}
