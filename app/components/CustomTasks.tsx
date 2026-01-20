// app/components/CustomTasks.tsx
"use client";

import React, { useState, useEffect } from "react";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function CustomTasks({ storageKey }: { storageKey: string }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(`${storageKey}_custom`);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, [storageKey]);

  // Save to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(`${storageKey}_custom`, JSON.stringify(tasks));
    }
  }, [tasks, storageKey, isLoaded]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  if (!isLoaded) return null;

  return (
    <div className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 backdrop-blur-sm h-full">
      <h2 className="text-xl font-bold text-white mb-4">Quest Log</h2>
      
      {/* Input Field */}
      <form onSubmit={addTask} className="mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new quest..."
          className="flex-1 rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 active:scale-95 transition-all"
        >
          Add
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 && (
          <p className="text-center text-gray-500 italic">No active quests.</p>
        )}
        
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`group flex items-center justify-between rounded-lg border p-3 transition-all ${
              task.completed
                ? "border-green-900 bg-green-900/10"
                : "border-gray-800 bg-gray-900/40"
            }`}
          >
            <div 
              className="flex items-center gap-3 flex-1 cursor-pointer"
              onClick={() => toggleTask(task.id)}
            >
              <div className={`h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                task.completed ? "bg-green-600 border-green-600" : "border-gray-600"
              }`}>
                {task.completed && <span className="text-white text-xs">✓</span>}
              </div>
              <span className={task.completed ? "text-gray-500 line-through" : "text-gray-200"}>
                {task.text}
              </span>
            </div>

            {/* Delete Button (Trash Icon) */}
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
              title="Delete Task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}