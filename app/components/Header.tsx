// components/Header.tsx
"use client";

import { formatFullDateTime } from "./hooks";

interface HeaderProps {
  currentTime: Date | null;
  userName?: string;
}

export default function Header({ currentTime, userName = "Rituraj" }: HeaderProps) {
  const dateLabel = formatFullDateTime(currentTime);
  const initials = userName
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 rounded-xl bg-black/10">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
          {/* simple "helmet" glyph */}
          <span className="text-lg font-bold">ᛟ</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">
            Project: Valhalla Ascension
          </h1>
          <p className="text-base font-semibold text-white leading-tight p-2">
            Daily Discipline Dashboard
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <p className="text-sm font-medium text-gray-300">{dateLabel}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-200"
          aria-label="Settings (coming soon)"
        >
          <span className="text-xl">⚙️</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-sm font-semibold text-white">
            {initials}
          </div>
          <span className="hidden sm:block text-sm font-medium text-white">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
}
