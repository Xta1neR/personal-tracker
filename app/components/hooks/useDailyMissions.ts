// app/components/hooks/useDailyMissions.ts
"use client";

import { useState, useEffect } from "react";

// Define what a Mission looks like so TypeScript is happy
export type Mission = {
  id: string;
  title: string;
  completed: boolean;
};

export function useDailyMissions(key: string, initialMissions: Mission[]) {
  const [missions, setMissions] = useState<Mission[]>(initialMissions);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Check if we are in the browser (Next.js SSR safety)
    if (typeof window === "undefined") return;

    try {
      const cached = localStorage.getItem(key);
      if (cached) {
        const parsed = JSON.parse(cached);
        const { date, data } = parsed;
        const today = new Date().toDateString();

        // 2. SMART RESET LOGIC:
        // If the saved date matches TODAY, load the progress.
        // If the date is old (yesterday), we do nothing, which leaves
        // the state as 'initialMissions' (all unchecked).
        if (date === today) {
          setMissions(data);
        } else {
            console.log("New day detected: Daily Protocol reset.");
        }
      }
    } catch (error) {
      console.error("Error loading daily missions:", error);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  // 3. Save to storage whenever 'missions' changes
  useEffect(() => {
    if (isLoaded) {
      const payload = {
        date: new Date().toDateString(),
        data: missions,
      };
      localStorage.setItem(key, JSON.stringify(payload));
    }
  }, [missions, key, isLoaded]);

  return { missions, setMissions, isLoaded };
}