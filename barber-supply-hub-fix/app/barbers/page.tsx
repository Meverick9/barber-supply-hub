import Link from "next/link";

export const metadata = {
  title: "Featured Barbers | Barber Supply Hub",
  description: "Meet professional barbers and see their recommended tool stacks.",
};

export default function BarbersPage() {
  return (
    <>
      <section className="hero">
        <h1 className="h1" style={{ fontSize: 36 }}>Featured Barbers</h1>
        <p className="lead">Meet the pros and see what tools they trust.</p>
      </section>

      <div className="card" style={{ textAlign: "center" }}>
        <p className="muted">Barber profiles coming soon. Want to be featured?</p>
        <p className="small">We&apos;re building profiles for real barbers with their tool stacks, tips, and recommendations.</p>
      </div>

      <div className="row" style={{ marginTop: 16 }}>
        <Link className="btn" href="/picks/best-clippers">Best Clippers</Link>
        <Link className="btn" href="/compare">Compare Tools</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </>
  );
}
