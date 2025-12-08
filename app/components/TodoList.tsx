// components/TodoList.tsx
"use client";

import { useLocalStorageState } from "./hooks";

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  storageKey: string;
}

export default function TodoList({ storageKey }: TodoListProps) {
  const [todos, setTodos] = useLocalStorageState<TodoItem[]>(storageKey, []);
  const [input, setInput] = React.useState("");

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;
  const completionPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  function addTodo() {
    const value = input.trim();
    if (!value) return;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    setTodos([...todos, { id, text: value, completed: false }]);
    setInput("");
  }

  function toggleTodo(id: string) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  }

  return (
    <section className="rounded-xl bg-white/5 p-5 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-white tracking-tight">
          Today&apos;s Missions
        </h2>
        <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          30-Day Protocol
        </span>
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-11 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 text-sm text-white placeholder:text-gray-500 focus:border-primary/60 focus:outline-none focus:ring-0"
          placeholder="Add a new mission..."
        />
        <button
          type="button"
          onClick={addTodo}
          className="h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.length === 0 && (
          <p className="text-xs text-gray-400">
            No missions yet. Forge your first quest for today.
          </p>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-4 w-4 rounded border-white/30 bg-black/40 text-primary focus:ring-primary/50"
            />
            <p
              className={`flex-1 text-sm ${
                todo.completed ? "text-gray-500 line-through" : "text-gray-100"
              }`}
            >
              {todo.text}
            </p>
            <button
              type="button"
              onClick={() => removeTodo(todo.id)}
              className="text-xs text-gray-500 hover:text-red-400"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-1 pt-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Tasks completed</span>
          <span className="text-gray-100 font-semibold">
            {completedCount}/{totalCount || 0} ({completionPercent}%)
          </span>
        </div>
        <div className="h-2 rounded-full bg-black/40 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-200"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
