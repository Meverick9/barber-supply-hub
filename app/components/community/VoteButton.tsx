"use client";

import { useState } from "react";

export default function VoteButton({ productId }: { productId: string }) {
  const [voted, setVoted] = useState(false);

  const vote = async () => {
    setVoted(true);
    await fetch("/api/vote", { method: "POST", body: JSON.stringify({ productId }) });
  };

  return (
    <button className="btn" onClick={vote} disabled={voted}>
      {voted ? "Voted ✓" : "Vote"}
    </button>
  );
}
