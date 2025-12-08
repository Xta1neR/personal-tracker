# ⚔️ Valhalla Ascension – 30-Day Protocol

A Norse-themed **Daily Discipline Dashboard** built with **Next.js, TypeScript, and Tailwind CSS**.

This app turns a strict 30-day training protocol into an interactive dashboard:
track your workouts, daily missions, routine, and physical stats – all in one
place.

> "Project: Valhalla Ascension" – for when you want your life to feel like a disciplined raid, not a loose plan.

---

## ✨ Features

### Implemented

- **Live Header**
  - Project title: `VALHALLA ASCENSION`
  - Live date & time (auto updates every second)
  - User avatar & settings icon (placeholder)

- **Weekly Calendar Strip**
  - Monday → Sunday view
  - Click to select a day
  - Selected day highlights with accent color
  - Switching day updates:
    - Workout plan
    - Todo list storage key
    - Daily log key

- **Workout Engine ("The Arena")**
  - Strong TypeScript model for all workouts
  - Each weekday has:
    - Title and goal (e.g. *THOR'S STRIKE (Push Focus)*)
    - Morning Ritual checklist
    - Main Arena exercises (cards with GIF placeholders + sets/reps)
    - Cardio & Core list
    - Evening Raid checklist
    - Extra sections (e.g. Sunday War Council)
  - Single source of truth: `WORKOUTS_BY_DAY` config

- **Todo List – "Today’s Missions"**
  - Add tasks with an input + button
  - Mark complete / incomplete
  - Delete tasks
  - Progress summary: `X / Y tasks done` + progress bar
  - **Persisted via `localStorage` per weekday**:
    - Key format: `valhalla-todos-{weekday}`

- **Daily Routine Timeline**
  - Fixed daily schedule with time blocks:
    - Wake, Study Sessions, Workout, Meals, Walk, Family, Late-night Study, Sleep
  - Vertical timeline with icons for each block
  - Active block is auto-highlighted based on **current time**
  - Cross-midnight logic for 22:00–02:00 & 02:00–07:00

- **Daily Log**
  - Inputs for:
    - Weight (kg)
    - Steps
    - Water intake (L)
    - Sleep (hours)
  - Stored by **calendar date** using `localStorage`:
    - Key format: `valhalla-daily-log-YYYY-MM-DD`

- **Infrastructure**
  - Next.js App Router (`app` directory)
  - TypeScript everywhere
  - Tailwind CSS with custom colors (`primary`, `background-dark`)
  - Reusable hooks:
    - `useCurrentTime` – live clock
    - `useLocalStorageState` – generic state persistence

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React + Tailwind CSS
- **State & Persistence:** React hooks + `localStorage`
- **Fonts:** Inter via next/font

---

## 🗂️ Project Structure

```txt
.
├─ app
│  ├─ layout.tsx        # Root layout, font + theme setup
│  ├─ page.tsx          # Home page, renders Dashboard
│  └─ globals.css       # Tailwind base + global styles
│
├─ components
│  ├─ Dashboard.tsx     # Main screen composition
│  ├─ Header.tsx        # Top bar with title, date/time, user
│  ├─ WeeklyCalendar.tsx# Day strip (Mon–Sun)
│  ├─ TodoList.tsx      # Today's Missions (per-day todos)
│  ├─ DailyRoutine.tsx  # Timeline of fixed daily schedule
│  ├─ WorkoutSection.tsx# The Arena – exercises & rituals
│  ├─ DailyLog.tsx      # Weight / steps / water / sleep log
│  └─ hooks.ts          # useCurrentTime & useLocalStorageState
│
├─ lib
│  └─ workouts.ts       # Workout types & Valhalla config
│
├─ public
│  └─ gifs/             # (optional) exercise GIF placeholders
│
├─ tailwind.config.ts   # Tailwind theme config
├─ postcss.config.mjs   # PostCSS + Tailwind
└─ tsconfig.json        # TypeScript config

🚀 Getting Started
Prerequisites

Node.js 18+

pnpm / npm / yarn (examples use pnpm, adjust if needed)

1. Clone the repo
git clone https://github.com/<your-username>/valhalla-ascension.git
cd valhalla-ascension

2. Install dependencies
pnpm install
# or
npm install
# or
yarn

3. Run the dev server
pnpm dev
# or
npm run dev
# or
yarn dev


Then open http://localhost:3000
 in your browser.

⚙️ Tailwind & Global Styling

app/globals.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global theme tokens */
:root {
  color-scheme: dark;
}

/* Minimal global reset for the dashboard */
body {
  background-color: #101622; /* background-dark */
  color: #ffffff;
  margin: 0;
}


tailwind.config.ts:

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "background-dark": "#101622",
      },
    },
  },
  plugins: [],
};

export default config;

🧠 Architecture Notes
Workout Data Model
type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface ChecklistItem {
  id: string;
  label: string;
}

interface Exercise {
  name: string;
  setsReps?: string;
  notes?: string;
  gif?: string;
}

interface WorkoutDay {
  id: Weekday;
  title: string;
  goal: string;
  morningRitual: ChecklistItem[];
  arena: Exercise[];
  cardioCore: Exercise[];
  eveningRaid: ChecklistItem[];
  extraSections?: {
    label: string;
    items: ChecklistItem[];
  }[];
}

declare const WORKOUTS_BY_DAY: Record<Weekday, WorkoutDay>;


This lets the UI remain simple: WorkoutSection just receives a WorkoutDay and maps over the arrays.

Local Storage Hook
function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(key);
    if (stored) setValue(JSON.parse(stored));
  }, [key]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}


Used by:

TodoList → valhalla-todos-{weekday}

DailyLog → valhalla-daily-log-YYYY-MM-DD

🗺️ Roadmap

Planned / nice-to-have improvements:

 Exercise-level logging (weights, reps, RPE)

 30-day challenge layer with “Day X / 30”

 Progress charts for weight, steps, sleep

 Streak / discipline scoring

 Framer Motion animations and micro-interactions

 PWA support for offline usage

 Authentication & cloud sync (NextAuth + DB)

 Social sharing & accountability features

 Accessibility and i18n enhancements

 Unit + E2E tests

🤝 Contributing

PRs and feature suggestions are welcome.
If you want to experiment:

Fork the repo.

Create a new branch: feat/my-idea.

Implement your changes.

Open a pull request.

📄 License

MIT – do what you want, just don’t claim you fought Odin alone.

🧬 Extending the Project

Real GIFs:
Add exercise GIFs under public/gifs/... and set gif paths in WORKOUTS_BY_DAY.

Authentication:
Add NextAuth, then key todo/log data by userId or persist in a real DB.

30-Day View:
Introduce a challengeDay state (1–30) and map it to dates and workouts, then use that for keys like valhalla-todos-day-{n} and valhalla-log-day-{n}.