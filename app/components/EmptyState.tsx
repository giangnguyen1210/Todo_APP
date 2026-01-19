'use client';

export default function EmptyState() {
  return (
    <div className="text-center py-16 animate-fade-in-up">
      <svg
        className="w-20 h-20 mx-auto mb-6 opacity-30 text-[rgb(var(--text-muted))]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
      <h2 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[rgb(var(--text-secondary))] mb-2">
        Chưa có công việc nào
      </h2>
      <p className="text-sm text-[rgb(var(--text-muted))]">
        Hãy thêm công việc đầu tiên của bạn!
      </p>
    </div>
  );
}
