// components/Dashboard.tsx
"use client";

import Header from "./Header";
import WeeklyCalendar, { CalendarDay } from "./WeeklyCalendar";
import TodoList from "./TodoList";
import DailyRoutine from "./DailyRoutine";
import WorkoutSection from "./WorkoutSection";
import DailyLog from "./DailyLog";
import { useCurrentTime } from "./hooks";
import {
  WORKOUTS_BY_DAY,
  WEEKDAY_ORDER,
  Weekday,
} from "@/lib/workouts";

function getWeekDaysForCalendar(today: Date | null): CalendarDay[] {
  const base = today ?? new Date();
  const jsDay = base.getDay(); // 0=Sun,...6=Sat
  const mondayOffset = ((jsDay + 6) % 7) * -1; // days to subtract to reach Monday

  const monday = new Date(
    base.getFullYear(),
    base.getMonth(),
    base.getDate() + mondayOffset
  );

  return WEEKDAY_ORDER.map((id, idx) => {
    const date = new Date(
      monday.getFullYear(),
      monday.getMonth(),
      monday.getDate() + idx
    );
    return {
      id,
      label: id.slice(0, 3),
      dateNumber: date.getDate(),
    };
  });
}

export default function Dashboard() {
  const now = useCurrentTime();
  const weekDays = getWeekDaysForCalendar(now);
  const todayId = (() => {
    if (!now) return "monday" as Weekday;
    const d = now.getDay(); // 0=Sun
    const map: Record<number, Weekday> = {
      0: "sunday",
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
    };
    return map[d] ?? "monday";
  })();

  const [selectedDay, setSelectedDay] = React.useState<Weekday>(todayId);

  // when now changes (first load / day change), keep selection in sync if user
  // hasn't manually changed anything – simple heuristic could be added later
  React.useEffect(() => {
    setSelectedDay(todayId);
  }, [todayId]);

  const selectedConfig = WORKOUTS_BY_DAY[selectedDay];

  // find actual Date object for the currently selected day in the displayed week
  const selectedDateInWeek = (() => {
    if (!now) return new Date();
    const match = weekDays.find((d) => d.id === selectedDay);
    if (!match) return now;
    const candidate = new Date(now);
    candidate.setDate(match.dateNumber);
    return candidate;
  })();

  const dailyLogKey = `valhalla-daily-log-${selectedDateInWeek.toISOString().slice(0, 10)}`;
  const todoStorageKey = `valhalla-todos-${selectedDay}`;

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Header currentTime={now} userName="Xta1neR" />
        <WeeklyCalendar
          days={weekDays}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        <main className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <TodoList storageKey={todoStorageKey} />
            <WorkoutSection day={selectedConfig} />
            <DailyLog storageKey={dailyLogKey} />
          </div>

          <div className="space-y-6">
            <DailyRoutine currentTime={now} />
          </div>
        </main>
      </div>
    </div>
  );
}

import React from "react";
