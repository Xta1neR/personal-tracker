// components/WorkoutSection.tsx
"use client";

import { WorkoutDay } from "@/lib/workouts";

interface WorkoutSectionProps {
  day: WorkoutDay;
}

export default function WorkoutSection({ day }: WorkoutSectionProps) {
  return (
    <section className="rounded-xl bg-white/5 p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white tracking-tight">
            The Arena – {day.title}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Goal: <span className="text-gray-100">{day.goal}</span>
          </p>
        </div>
        <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300">
          {day.id.toUpperCase()}
        </span>
      </div>

      {/* Morning Ritual */}
      <div className="rounded-lg bg-black/25 p-3 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 p-2">
          Morning Ritual – 06:00
        </p>
        <div className="space-y-2">
          {day.morningRitual.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 text-xs text-gray-200"
            >
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-white/25 bg-black/60 text-primary focus:ring-primary/50"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Arena exercises */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
          Main Battle
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {day.arena.map((ex) => (
            <div
              key={ex.name}
              className="flex flex-col gap-2 rounded-lg bg-black/25 p-3"
            >
              <div className="aspect-video w-full overflow-hidden rounded-md bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-[11px] text-gray-300">
                {ex.gif ? (
                  <span className="opacity-80">
                    GIF placeholder for <strong>{ex.name}</strong>
                  </span>
                ) : (
                  <span className="opacity-70">Add GIF here</span>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{ex.name}</p>
                {ex.setsReps && (
                  <p className="text-xs text-gray-400">{ex.setsReps}</p>
                )}
                {ex.notes && (
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {ex.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cardio & Core */}
      {day.cardioCore.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Cardio &amp; Core
          </p>
          <ul className="space-y-1 text-xs text-gray-200">
            {day.cardioCore.map((ex) => (
              <li key={ex.name}>
                <span className="text-primary mr-1">•</span>
                <span className="font-medium">{ex.name}</span>
                {ex.setsReps && <span className="text-gray-400"> — {ex.setsReps}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Evening Raid & extras */}
      {(day.eveningRaid.length > 0 || day.extraSections) && (
        <div className="grid gap-3 md:grid-cols-2">
          {day.eveningRaid.length > 0 && (
            <div className="rounded-lg bg-black/25 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 mb-1">
                Evening Raid
              </p>
              <ul className="space-y-1 text-xs text-gray-200">
                {day.eveningRaid.map((item) => (
                  <li key={item.id}>
                    <span className="text-primary mr-1">•</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {day.extraSections?.map((section) => (
            <div key={section.label} className="rounded-lg bg-black/25 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400 mb-1">
                {section.label}
              </p>
              <ul className="space-y-1 text-xs text-gray-200">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <span className="text-primary mr-1">•</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
