"use client";

import { useState } from "react";

export default function AddToStackButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);

  const add = async () => {
    setAdded(true);
    await fetch("/api/add-tool", { method: "POST", body: JSON.stringify({ productId }) });
  };

  return (
    <button className="btn" onClick={add} disabled={added}>
      {added ? "Added ✓" : "Add to stack"}
    </button>
  );
}
