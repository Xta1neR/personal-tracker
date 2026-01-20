"use client";

import React from "react";
import { useDailyMissions } from "./hooks/useDailyMissions";

// --- CONFIGURATION: Your 2x3 Grid Items ---
const DAILY_PROTOCOL = [
  { id: "m1", title: "20 Pushups", completed: false },
  { id: "m2", title: "20 Crunches", completed: false },
  { id: "m3", title: "20 Squats", completed: false },
  { id: "m4", title: "20 Calf Raises", completed: false },
  { id: "m5", title: "100 Jumping Jacks", completed: false },
  { id: "m6", title: "10 Min Meditation", completed: false },
];

interface TodoListProps {
  storageKey: string;
}

export default function TodoList({ storageKey }: TodoListProps) {
  // usage of version 'v2' to try and break cache, but manual reset is safer
  const { missions, setMissions, isLoaded } = useDailyMissions(
    `${storageKey}_daily_protocol_v2`, 
    DAILY_PROTOCOL
  );

  const toggleMission = (id: string) => {
    setMissions((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      )
    );
  };

  // --- NEW: Manual Reset Function ---
  const handleRefresh = () => {
    if (confirm("Reset daily protocol to default settings?")) {
      setMissions(DAILY_PROTOCOL); // Forces state to match the code
    }
  };

  if (!isLoaded) {
    return <div className="h-64 animate-pulse rounded-xl bg-gray-800/50"></div>;
  }

  const completedCount = missions.filter((m) => m.completed).length;
  const progress = Math.round((completedCount / missions.length) * 100);

  return (
    <div className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 backdrop-blur-sm h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Daily Protocol</h2>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-blue-400">
            {progress}%
          </span>
          
          {/* REFRESH BUTTON */}
          <button 
            onClick={handleRefresh}
            className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 transition-colors"
            title="Reset Protocol (Fixes stuck text)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
              <path d="M16 16h5v5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <div
          className="h-full bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2x3 GRID LAYOUT */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {missions.map((mission) => (
          <div
            key={mission.id}
            onClick={() => toggleMission(mission.id)}
            className={`group flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 text-center transition-all ${
              mission.completed
                ? "border-blue-500/30 bg-blue-500/10"
                : "border-gray-800 bg-gray-900/40 hover:border-gray-600 hover:bg-gray-800/60"
            }`}
          >
            {/* Checkbox Circle */}
            <div
              className={`mb-2 flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                mission.completed
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-600 group-hover:border-blue-400"
              }`}
            >
              {mission.completed && (
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            
            {/* Title */}
            <span
              className={`text-sm font-medium transition-colors ${
                mission.completed ? "text-gray-400 line-through" : "text-gray-200"
              }`}
            >
              {mission.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}