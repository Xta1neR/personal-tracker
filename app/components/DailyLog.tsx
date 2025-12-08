// components/DailyLog.tsx
"use client";

import { useLocalStorageState } from "./hooks";

export interface DailyLogData {
  weight: string;
  steps: string;
  water: string;
  sleep: string;
}

interface DailyLogProps {
  storageKey: string;
}

const emptyLog: DailyLogData = {
  weight: "",
  steps: "",
  water: "",
  sleep: "",
};

export default function DailyLog({ storageKey }: DailyLogProps) {
  const [log, setLog] = useLocalStorageState<DailyLogData>(
    storageKey,
    emptyLog
  );

  function updateField<K extends keyof DailyLogData>(key: K, value: string) {
    setLog({ ...log, [key]: value });
  }

  return (
    <section className="rounded-xl bg-white/5 p-5 space-y-3">
      <h2 className="text-sm font-semibold text-white tracking-tight">
        Daily Log
      </h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <LogField
          label="Weight"
          suffix="kg"
          value={log.weight}
          onChange={(v) => updateField("weight", v)}
        />
        <LogField
          label="Steps"
          suffix="steps"
          value={log.steps}
          onChange={(v) => updateField("steps", v)}
        />
        <LogField
          label="Water"
          suffix="L"
          value={log.water}
          onChange={(v) => updateField("water", v)}
        />
        <LogField
          label="Sleep"
          suffix="hrs"
          value={log.sleep}
          onChange={(v) => updateField("sleep", v)}
        />
      </div>
    </section>
  );
}

interface LogFieldProps {
  label: string;
  suffix: string;
  value: string;
  onChange: (value: string) => void;
}

function LogField({ label, suffix, value, onChange }: LogFieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-gray-300">
      <span>{label}</span>
      <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 px-2 py-1.5">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          placeholder="0"
        />
        <span className="text-[11px] text-gray-500">{suffix}</span>
      </div>
    </label>
  );
}
