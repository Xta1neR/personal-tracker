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
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196384/799be440-32e3-4694-9fd7-31e8da818693.png",
      },
      {
        name: "Chest Press",
        setsReps: "4 × 12 (Heavy)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195569/chestPress_vzyhag.gif",
      },
      {
        name: "Shoulder Press",
        setsReps: "4 × 12",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195569/shoulderPress_oamdgz.gif",
      },
      {
        name: "Incline Flys",
        setsReps: "3 × 15",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195569/Incline-dumbbell-Fly_ikxg8u.gif",
      },
      {
        name: "Lateral Raises",
        setsReps: "5 × 15 (Strict form)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195568/Dumbbell-Lateral-Raise_s7gnf2.gif",
      },
      {
        name: "Tricep Overhead Extension",
        setsReps: "3 × 12",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195568/triceps_zvlxzs.gif",
      },
      {
        name: "Finisher: Pushups",
        setsReps: "To failure",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195570/pushups_asc7qu.gif",
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
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195575/jacks_etc5j4.gif",
      },
      { name: "One-Arm DB Row", setsReps: "4 × 12 / side", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195577/singlearmrow_ph3f2b.gif" },
      { name: "Bent-Over Row", setsReps: "4 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195573/bentRow_c5t95g.gif"},
      { name: "DB Pullovers", setsReps: "3 × 15 (stretch lats)", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195575/pullOvers_xhyiin.gif" },
      { name: "Rear Delt Flys", setsReps: "4 × 15", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195575/rearDelt_kgkv8t.gif" },
      { name: "Bicep Curls", setsReps: "3 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195573/Dumbbell-Curl_d45wzo.gif" },
      { name: "Hammer Curls", setsReps: "3 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195574/hammercurl_rq9igw.gif"},
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
        setsReps: "5 mins", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196927/069a3884-a0e5-4153-a21e-28122f28f8d0.png"
      },
      { name: "Goblet Squats", setsReps: "5 × 12 (deep)", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196869/squats_xoanxd.gif" },
      {
        name: "Walking Lunges",
        setsReps: "4 × 12 steps / leg", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196867/Dumbbell-Lunge_brrllt.gif",
      },
      { name: "DB Romanian Deadlift", setsReps: "4 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196869/deadlifts_ssvw3x.gif" },
      { name: "Step-Ups", setsReps: "3 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196870/WEI_STEP_UP_mprohk.gif" },
      { name: "Calf Raises", setsReps: "5 × 20", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765196870/Single-Leg-Standing-Calf-Raise_xpygco.gif" },
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
      { name: "Warmup Walk", setsReps: "5 mins", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197315/fe896f51-45e9-49aa-82bf-96b1be4a0093.png"},
      {
        name: "Viking Intervals",
        setsReps: "20 mins – 30s sprint / 30s rest", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197255/37af5169-47e2-457b-a593-023c3438a215.png"
      },
      { name: "Cool down Incline Walk", setsReps: "15 mins", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197315/fe896f51-45e9-49aa-82bf-96b1be4a0093.png"},
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
        name: "DB Floor Press",
        setsReps: "4 × 12 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197404/dumbbell-floor-press_i3ji53.gif"
      },
      {
        name: "DB Rows",
        setsReps: "4 × 12 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197405/Dumbbell-Row_xgx2ii.gif"
      },
      {
        name: "Arnold Press",
        setsReps: "4 × 15 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197402/arnold-press_tajxj0.gif"
      },
      {
        name: "Lateral Raises",
        setsReps: "4 × 15 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197404/Dumbbell-Lateral-Raise_o8sals.webp"
      },
      {
        name: "Hammer Curls",
        setsReps: "3 × 12 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197406/Hammer-curl_uesaol.webp"
      },
      {
        name: "Tricep Extensions",
        setsReps: "3 × 12 (each)",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197408/seated-dumbbell-triceps-extension_rxovxa.gif"
      },
      { name: "Finisher – Pushups", setsReps: "50 total",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197407/Push-Up_xzytfl.gif"
       },
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
      { name: "Warmup: Jump Rope or Jacks", setsReps: "5 mins", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765195575/jacks_etc5j4.gif" },
      { name: "Jump Squats", setsReps: "4 × 15", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197829/jumpSquats_aqiqwi.gif" },
      { name: "Reverse Lunges", setsReps: "4 × 12 / leg", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197830/bodyweight-reverse-lunge_sr0vch.gif" },
      { name: "DB Thrusters", setsReps: "4 × 10", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197829/dumbbell-thruster_ihvkj0.webp" },
      { name: "Single-Leg Deadlift", setsReps: "3 × 12", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197831/single_leg_deadlift_zl0bm2.webp" },
      { name: "Farmer's Walk", setsReps: "3 × 60s (heavy)", gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197828/benefits-of-farmers-walks_yzkwwm.gif" },
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
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765197965/25d40fd6-5838-4e94-98ec-3ea7e26ba4ce.png"
      },
      {
        name: "Deep Stretching",
        setsReps: "Deep squat hold, pigeon pose, doorway stretch",
        gif: "https://res.cloudinary.com/dtkpfqtzk/image/upload/v1765198111/69f012c1-ee2c-4841-b346-e806f65bd0cd.png"
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
