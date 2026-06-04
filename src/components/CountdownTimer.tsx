import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date
  className?: string;
  compact?: boolean;
}

const calc = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: diff === 0 };
};

const CountdownTimer = ({ targetDate, className = "", compact = false }: CountdownTimerProps) => {
  const target = new Date(targetDate).getTime();
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (time.done) {
    return (
      <div className={`text-center font-bold text-primary ${className}`}>
        Submissions Closed
      </div>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  const sizes = compact
    ? { box: "px-3 py-2 min-w-[60px]", num: "text-2xl", label: "text-[10px]" }
    : { box: "px-4 py-3 min-w-[80px]", num: "text-4xl md:text-5xl", label: "text-xs" };

  return (
    <div className={`flex justify-center gap-2 md:gap-3 ${className}`}>
      {units.map((u) => (
        <div
          key={u.label}
          className={`border-4 border-primary bg-card shadow-bold ${sizes.box} text-center`}
        >
          <div className={`${sizes.num} font-bold tabular-nums leading-none`}>
            {String(u.value).padStart(2, "0")}
          </div>
          <div className={`${sizes.label} font-semibold tracking-wider uppercase mt-1 text-muted-foreground`}>
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
