import stacks from "@/lib/toolStacks.json";

export default function StackPopularity({ productId }: { productId: string }) {
  const count = (stacks as any[]).filter((s) => (s.stack || []).some((t: any) => t.productId === productId)).length;
  return <span className="badge">🧰 In {count} stacks</span>;
}
