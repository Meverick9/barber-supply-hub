import barbers from "@/lib/barbers.json";
import picks from "@/lib/picks-data.json";
import ProductCard from "@/app/components/ProductCard";
import ToolStack from "@/app/components/ToolStack";
import { getBarberLevel } from "@/lib/reputation";

export function generateStaticParams() {
  return (barbers as any[]).map((b) => ({ id: b.id }));
}

export default function BarberProfile({ params }: { params: { id: string } }) {
  const barber: any = (barbers as any[]).find((b) => b.id === params.id);
  if (!barber) return <div>Not found</div>;

  const level = getBarberLevel(barber.id);

  const allProducts = Object.values(picks as any).flatMap((p: any) => p.products);
  const fav = allProducts.filter((p: any) => (barber.favoriteTools || []).includes(p.id));

  return (
    <>
      <section className="hero">
        <h1 className="h1">{barber.name}</h1>
        <p className="lead">{barber.bio}</p>
        <div className="row">
          <span className="badge">✂ {barber.specialty}</span>
          <span className="badge">⏳ {barber.experience}</span>
          <span className="badge">🌍 {barber.country}</span>
          <span className="badge">🏆 {level}</span>
        </div>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Favorite tools</h2>
        <div className="grid2">
          {fav.map((p: any) => (
            <ProductCard key={p.id} product={p} placement="barber_profile" />
          ))}
        </div>
      </section>

      <ToolStack barberId={barber.id} />
    </>
  );
}
