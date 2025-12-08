// lib/workouts.ts
export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface Exercise {
  name: string;
  setsReps?: string; // "4 × 12", "20 mins", etc.
  notes?: string;
  gif?: string; // placeholder path for future GIFs
}

export interface WorkoutDay {
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

export const WEEKDAY_ORDER: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const WEEKDAY_LABEL: Record<Weekday, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

export const WORKOUTS_BY_DAY: Record<Weekday, WorkoutDay> = {
  monday: {
    id: "monday",
    title: "THOR'S STRIKE (Push Focus)",
    goal: "Chest, Shoulders, Triceps, Face Fat",
    morningRitual: [
      { id: "mon-mr-1", label: "Wake Up (No Snooze)" },
      { id: "mon-mr-2", label: "500ml Water + Salt" },
      { id: "mon-mr-3", label: 'Mindset: "I bring the storm."' },
    ],
    arena: [
      {
        name: "Warmup: Arm Circles, Push-up Walkouts",
        setsReps: "5 mins",
        gif: "/gifs/warmup-upper.gif",
      },
      {
        name: "Chest Press",
        setsReps: "4 × 12 (Heavy)",
        gif: "/gifs/chest-press.gif",
      },
      {
        name: "Shoulder Press",
        setsReps: "4 × 12",
        gif: "/gifs/shoulder-press.gif",
      },
      {
        name: "Incline Flys",
        setsReps: "3 × 15",
        gif: "/gifs/incline-fly.gif",
      },
      {
        name: "Lateral Raises",
        setsReps: "5 × 15 (Strict form)",
        gif: "/gifs/lateral-raises.gif",
      },
      {
        name: "Tricep Overhead Extension",
        setsReps: "3 × 12",
        gif: "/gifs/tricep-overhead.gif",
      },
      {
        name: "Finisher: Pushups",
        setsReps: "To failure",
        gif: "/gifs/pushups.gif",
      },
    ],
    cardioCore: [
      {
        name: "HIIT – Treadmill / Track",
        setsReps: "1 min sprint / 1 min walk × 10",
      },
      { name: "Plank", setsReps: "3 × 60s" },
      { name: "Russian Twists", setsReps: "3 × 20" },
      { name: "Leg Raises", setsReps: "3 sets" },
    ],
    eveningRaid: [
      {
        id: "mon-er-1",
        label: "45 mins steady walk (post-dinner)",
      },
    ],
  },

  tuesday: {
    id: "tuesday",
    title: "ODIN'S PULL (Pull Focus)",
    goal: "Back Width, Biceps, V-Taper",
    morningRitual: [
      { id: "tue-mr-1", label: "Wake Up" },
      { id: "tue-mr-2", label: "500ml Water + Salt" },
    ],
    arena: [
      {
        name: "Warmup: Jumping Jacks, Arm Swings",
        setsReps: "5 mins",
        gif: "/gifs/warmup-cardio.gif",
      },
      { name: "One-Arm DB Row", setsReps: "4 × 12 / side" },
      { name: "Bent-Over Row", setsReps: "4 × 12" },
      { name: "DB Pullovers", setsReps: "3 × 15 (stretch lats)" },
      { name: "Rear Delt Flys", setsReps: "4 × 15" },
      { name: "Bicep Curls", setsReps: "3 × 12" },
      { name: "Hammer Curls", setsReps: "3 × 12" },
    ],
    cardioCore: [
      { name: "Incline Walk", setsReps: "Max incline, speed 4.5 – 20 mins" },
      { name: "Hanging Leg Raises", setsReps: "3 × 15" },
      { name: "Bicycle Crunches", setsReps: "3 sets" },
    ],
    eveningRaid: [
      { id: "tue-er-1", label: "45 mins steady walk (post-dinner)" },
    ],
  },

  wednesday: {
    id: "wednesday",
    title: "FENRIR'S LEGS",
    goal: "Legs, Glutes, Calorie Burn",
    morningRitual: [
      { id: "wed-mr-1", label: "Wake Up" },
      { id: "wed-mr-2", label: "500ml Water + Salt" },
    ],
    arena: [
      {
        name: "Warmup: Bodyweight Squats, High Knees",
        setsReps: "5 mins",
      },
      { name: "Goblet Squats", setsReps: "5 × 12 (deep)" },
      {
        name: "Walking Lunges",
        setsReps: "4 × 12 steps / leg",
      },
      { name: "DB Romanian Deadlift", setsReps: "4 × 12" },
      { name: "Step-Ups", setsReps: "3 × 12" },
      { name: "Calf Raises", setsReps: "5 × 20" },
    ],
    cardioCore: [
      { name: "Steady Jog", setsReps: "15 mins – moderate pace" },
      { name: "Mountain Climbers", setsReps: "3 × 45s" },
      { name: "Side Planks", setsReps: "3 sets / side" },
    ],
    eveningRaid: [
      { id: "wed-er-1", label: "45 mins steady walk (post-dinner)" },
    ],
  },

  thursday: {
    id: "thursday",
    title: "THE LONGSHIP ROW",
    goal: "Heavy Cardio & Core Resilience",
    morningRitual: [
      { id: "thu-mr-1", label: "Wake Up" },
      { id: "thu-mr-2", label: "500ml Water + Salt" },
    ],
    arena: [
      { name: "Warmup Walk", setsReps: "5 mins" },
      {
        name: "Viking Intervals",
        setsReps: "20 mins – 30s sprint / 30s rest",
      },
      { name: "Cooldown Incline Walk", setsReps: "15 mins" },
    ],
    cardioCore: [
      { name: "Plank", setsReps: "4 × 60s" },
      { name: "V-Ups", setsReps: "4 × 15" },
      { name: "Russian Twists", setsReps: "4 × 20" },
      { name: "Flutter Kicks", setsReps: "4 × 45s" },
      { name: "Superman Hold", setsReps: "4 × 45s" },
    ],
    eveningRaid: [
      { id: "thu-er-1", label: "45 mins steady walk (post-dinner)" },
    ],
  },

  friday: {
    id: "friday",
    title: "BERSERKER UPPER",
    goal: "Full Upper Body, Aesthetics",
    morningRitual: [
      { id: "fri-mr-1", label: "Wake Up" },
      { id: "fri-mr-2", label: "500ml Water + Salt" },
    ],
    arena: [
      {
        name: "Superset 1 – DB Floor Press + DB Rows",
        setsReps: "4 × 12 (each)",
      },
      {
        name: "Superset 2 – Arnold Press + Lateral Raises",
        setsReps: "4 × 15 (each)",
      },
      {
        name: "Superset 3 – Hammer Curls + Tricep Extensions",
        setsReps: "3 × 12 (each)",
      },
      { name: "Finisher – Pushups", setsReps: "50 total" },
    ],
    cardioCore: [
      { name: "Run / Walk Intervals", setsReps: "2 mins run / 2 mins walk × 5" },
    ],
    eveningRaid: [
      { id: "fri-er-1", label: "45 mins steady walk (post-dinner)" },
    ],
  },

  saturday: {
    id: "saturday",
    title: "VALKYRIE FLIGHT",
    goal: "Athletic Legs, Explosiveness",
    morningRitual: [
      { id: "sat-mr-1", label: "Wake Up" },
      { id: "sat-mr-2", label: "500ml Water + Salt" },
    ],
    arena: [
      { name: "Warmup: Jump Rope or Jacks", setsReps: "5 mins" },
      { name: "Jump Squats", setsReps: "4 × 15" },
      { name: "Reverse Lunges", setsReps: "4 × 12 / leg" },
      { name: "DB Thrusters", setsReps: "4 × 10" },
      { name: "Single-Leg Deadlift", setsReps: "3 × 12" },
      { name: "Farmer's Walk", setsReps: "3 × 60s (heavy)" },
    ],
    cardioCore: [
      {
        name: "Speed Pyramid",
        setsReps: "Increase speed every min to failure × 2 rounds",
      },
    ],
    eveningRaid: [
      { id: "sat-er-1", label: "45 mins steady walk (post-dinner)" },
    ],
  },

  sunday: {
    id: "sunday",
    title: "FEAST & RECOVER",
    goal: "Active Recovery, Planning",
    morningRitual: [
      { id: "sun-mr-1", label: "Hydrate (1 liter)" },
      { id: "sun-mr-2", label: "Sleep in (optional)" },
    ],
    arena: [
      {
        name: "The Long Scout",
        setsReps: "60 min outdoor walk or treadmill",
      },
      {
        name: "Deep Stretching",
        setsReps: "Deep squat hold, pigeon pose, doorway stretch",
      },
    ],
    cardioCore: [],
    eveningRaid: [],
    extraSections: [
      {
        label: "War Council",
        items: [
          { id: "sun-wc-1", label: "Weigh in (weekly check)" },
          { id: "sun-wc-2", label: "Grocery shop" },
          { id: "sun-wc-3", label: "Plan next week's schedule" },
        ],
      },
    ],
  },
};
