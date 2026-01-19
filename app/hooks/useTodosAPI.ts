'use client';

import { useState, useEffect } from 'react';

// API Types
interface Todo {
  _id: string;
  text: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  updatedAt: string;
}

interface CreateTodoDto {
  text: string;
}

interface UpdateTodoDto {
  text?: string;
  status?: 'todo' | 'in-progress' | 'done';
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function useTodosAPI() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/todos`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  // Load todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Create a new todo
  const addTodo = async (text: string) => {
    try {
      const dto: CreateTodoDto = { text: text.trim() };
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });
      
      if (!response.ok) throw new Error('Failed to create todo');
      
      const newTodo = await response.json();
      setTodos((prev) => [newTodo, ...prev]);
      return newTodo;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create todo');
      throw err;
    }
  };

  // Update todo status
  const updateTodoStatus = async (id: string, status: Todo['status']) => {
    try {
      const dto: UpdateTodoDto = { status };
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });
      
      if (!response.ok) throw new Error('Failed to update todo');
      
      const updatedTodo = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
      return updatedTodo;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      throw err;
    }
  };

  // Update todo text
  const updateTodoText = async (id: string, text: string) => {
    try {
      const dto: UpdateTodoDto = { text };
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });
      
      if (!response.ok) throw new Error('Failed to update todo');
      
      const updatedTodo = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
      return updatedTodo;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo');
      throw err;
    }
  };

  // Delete a todo
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete todo');
      
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo');
      throw err;
    }
  };

  // Delete all todos
  const deleteAllTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete all todos');
      
      setTodos([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete all todos');
      throw err;
    }
  };

  return {
    todos,
    isLoading,
    error,
    addTodo,
    updateTodoStatus,
    updateTodoText,
    deleteTodo,
    deleteAllTodos,
    refetch: fetchTodos,
  };
}
