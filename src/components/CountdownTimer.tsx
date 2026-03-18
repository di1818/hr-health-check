import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DEADLINE_DAYS = 10;

function getDeadline() {
  const stored = localStorage.getItem("audit-deadline");
  if (stored) return new Date(stored);
  const d = new Date();
  d.setDate(d.getDate() + DEADLINE_DAYS);
  localStorage.setItem("audit-deadline", d.toISOString());
  return d;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "дней" },
    { value: timeLeft.hours, label: "часов" },
    { value: timeLeft.minutes, label: "минут" },
    { value: timeLeft.seconds, label: "секунд" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <motion.div
          key={u.label}
          className="card-glass px-3 py-2 sm:px-5 sm:py-3 text-center min-w-[60px] sm:min-w-[80px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-2xl sm:text-3xl font-bold text-foreground font-body">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground mt-1">{u.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
