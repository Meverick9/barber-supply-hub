"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function ScarcityTimer({
  minutes = 35,
  label = "Trending today",
}: {
  minutes?: number;
  label?: string;
}) {
  const endAt = useMemo(() => Date.now() + minutes * 60_000, [minutes]);
  const [leftMs, setLeftMs] = useState(endAt - Date.now());

  useEffect(() => {
    const t = setInterval(() => setLeftMs(endAt - Date.now()), 1000);
    return () => clearInterval(t);
  }, [endAt]);

  const clamped = Math.max(0, leftMs);
  const totalSec = Math.floor(clamped / 1000);
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;

  return (
    <div className="badge" aria-live="polite">
      ⚡ {label} · {pad(mm)}:{pad(ss)}
    </div>
  );
}
