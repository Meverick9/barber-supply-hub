import barbers from "@/lib/barbers.json";

export default function UsedByBarbers({ productId }: { productId: string }) {
  const users = (barbers as any[]).filter((b) => (b.favoriteTools || []).includes(productId));
  if (!users.length) return null;

  return (
    <div className="small">
      Used by:{" "}
      {users.map((u) => (
        <a key={u.id} href={`/barbers/${u.id}`} style={{ marginRight: 8 }}>
          {u.name}
        </a>
      ))}
    </div>
  );
}
