import reviews from "@/lib/reviews.json";

type Review = {
  id: string;
  productId: string;
  name: string;
  role: "Barber" | "Shop Owner" | "Beginner";
  rating: number;
  text: string;
  date: string;
};

export default function Reviews({ productId }: { productId: string }) {
  const list = (reviews as Review[]).filter((r) => r.productId === productId);
  if (!list.length) return null;

  return (
    <div className="card" style={{ marginTop: 12 }}>
      <h3 style={{ marginTop: 0 }}>Barber reviews</h3>
      {list.map((r) => (
        <div key={r.id} style={{ marginBottom: 12 }}>
          <div className="small">⭐ {r.rating}/5 — {r.name} ({r.role}) · {r.date}</div>
          <p className="small" style={{ margin: "4px 0 0" }}>{r.text}</p>
        </div>
      ))}
    </div>
  );
}
