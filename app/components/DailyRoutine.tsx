// components/DailyRoutine.tsx
"use client";

interface RoutineBlock {
  id: string;
  label: string;
  timeLabel: string;
  startMinutes: number; // minutes from 00:00
  endMinutes: number;   // can go beyond 1440 for after-midnight blocks
  icon: string;         // emoji icon
}

const BLOCKS: RoutineBlock[] = [
  {
    id: "wake",
    label: "Wake Up",
    timeLabel: "07:00",
    startMinutes: 7 * 60,
    endMinutes: 7 * 60 + 15,
    icon: "🌅",
  },
  {
    id: "breakfast",
    label: "Breakfast & Get Ready",
    timeLabel: "07:15 – 08:00",
    startMinutes: 7 * 60 + 15,
    endMinutes: 8 * 60,
    icon: "🍳",
  },
  {
    id: "study1",
    label: "Study Session 1",
    timeLabel: "08:00 – 12:00",
    startMinutes: 8 * 60,
    endMinutes: 12 * 60,
    icon: "📚",
  },
  {
    id: "workout",
    label: "Workout",
    timeLabel: "12:00 – 14:00",
    startMinutes: 12 * 60,
    endMinutes: 14 * 60,
    icon: "🏋️",
  },
  {
    id: "lunch",
    label: "Lunch",
    timeLabel: "14:00 – 15:00",
    startMinutes: 14 * 60,
    endMinutes: 15 * 60,
    icon: "🍽️",
  },
  {
    id: "study2",
    label: "Study Session 2",
    timeLabel: "15:00 – 19:00",
    startMinutes: 15 * 60,
    endMinutes: 19 * 60,
    icon: "📚",
  },
  {
    id: "walk",
    label: "Brisk Walking / Dinner",
    timeLabel: "19:00 – 21:00",
    startMinutes: 19 * 60,
    endMinutes: 21 * 60,
    icon: "🚶",
  },
  {
    id: "family",
    label: "Family Time",
    timeLabel: "21:00 – 22:00",
    startMinutes: 21 * 60,
    endMinutes: 22 * 60,
    icon: "👨‍👩‍👦",
  },
  {
    id: "study3",
    label: "Study Session 3",
    timeLabel: "22:00 – 02:00",
    startMinutes: 22 * 60,
    endMinutes: 26 * 60, // crosses midnight
    icon: "📚",
  },
  {
    id: "sleep",
    label: "Sleep",
    timeLabel: "02:00 – 07:00",
    startMinutes: 26 * 60,
    endMinutes: 31 * 60,
    icon: "😴",
  },
];

function getActiveBlockId(now: Date | null): string | null {
  if (!now) return null;

  let minutes = now.getHours() * 60 + now.getMinutes();
  // Between midnight and 4am, treat as "next day" for the cross-midnight logic
  const extendedMinutes = minutes < 4 * 60 ? minutes + 24 * 60 : minutes;

  for (const block of BLOCKS) {
    const start = block.startMinutes;
    const end =
      block.endMinutes <= block.startMinutes
        ? block.endMinutes + 24 * 60
        : block.endMinutes;

    if (extendedMinutes >= start && extendedMinutes < end) {
      return block.id;
    }
  }
  return null;
}

interface DailyRoutineProps {
  currentTime: Date | null;
}

export default function DailyRoutine({ currentTime }: DailyRoutineProps) {
  const activeId = getActiveBlockId(currentTime);

  return (
    <section className="rounded-xl bg-white/5 p-5">
      <h2 className="mb-4 text-lg font-semibold text-white tracking-tight">
        Daily Routine
      </h2>

      <div className="relative space-y-2">
        <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px" />
        {BLOCKS.map((block) => {
          const active = block.id === activeId;
          return (
            <div
              key={block.id}
              className={`relative flex items-start gap-4 rounded-lg px-3 py-2
              ${active ? "bg-primary/20 border border-primary/60" : ""}
            `}
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30">
                <span className={active ? "text-lg" : "text-base"}>
                  {block.icon}
                </span>
              </div>
              <div className="flex-1">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wide ${
                    active ? "text-primary/90" : "text-gray-400"
                  }`}
                >
                  {block.timeLabel}
                </p>
                <p className="text-sm font-medium text-white">{block.label}</p>
              </div>

              {active && (
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background-dark" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
