import votes from "@/lib/votes.json";

export default function CommunityBadge({ productId }: { productId: string }) {
  const v = (votes as any[]).find((x) => x.productId === productId)?.votes || 0;
  return <span className="badge">👥 {v} voted</span>;
}
