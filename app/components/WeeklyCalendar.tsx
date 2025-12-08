// components/WeeklyCalendar.tsx
"use client";

import { Weekday, WEEKDAY_LABEL } from "@/lib/workouts";

export interface CalendarDay {
  id: Weekday;
  label: string; // "Mon"
  dateNumber: number; // e.g. 8
}

interface WeeklyCalendarProps {
  days: CalendarDay[];
  selectedDay: Weekday;
  onSelectDay: (day: Weekday) => void;
}

export default function WeeklyCalendar({
  days,
  selectedDay,
  onSelectDay,
}: WeeklyCalendarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-1 pb-1">
      {days.map((day) => {
        const active = day.id === selectedDay;
        return (
          <button
            key={day.id}
            type="button"
            onClick={() => onSelectDay(day.id)}
            className={`flex h-10 shrink-0 items-center gap-2 rounded-lg px-4 text-sm transition
            ${
              active
                ? "bg-primary text-white font-semibold shadow-lg shadow-primary/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            <span>{WEEKDAY_LABEL[day.id]}</span>
            <span className={active ? "opacity-90" : "opacity-70"}>
              {day.dateNumber}
            </span>
          </button>
        );
      })}
    </div>
  );
}
