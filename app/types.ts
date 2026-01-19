export interface Todo {
  _id: string;  // Changed from id: number to match MongoDB
  text: string;
  status: 'todo' | 'in-progress' | 'done';  // Match backend status values
  createdAt: string;
  updatedAt: string;  // Added updatedAt from backend
}

export type TodoStatus = 'todo' | 'in-progress' | 'done';  // Match backend

export type FilterType = 'all' | 'active' | 'completed';
