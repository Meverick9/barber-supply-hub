"use client";

import { useState, useEffect } from "react";

type Props = {
  label?: string;
};

export default function ScarcityTimer({ label = "Deal expires" }: Props) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const update = () => {
      const now = new Date();
      const diff = endOfDay.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Expired");
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${h}h ${m}m ${s}s`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <span style={{ fontSize: 12, color: "#f97316" }}>
      {label}: {timeLeft}
    </span>
  );
}
