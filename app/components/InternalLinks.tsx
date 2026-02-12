import Link from "next/link";

const allPicks = [
  { slug: "best-clippers", label: "Best Clippers" },
  { slug: "best-trimmers", label: "Best Trimmers" },
  { slug: "starter-kit", label: "Starter Kit" },
];

type Props = {
  current: string;
};

export default function InternalLinks({ current }: Props) {
  const others = allPicks.filter((p) => p.slug !== current);

  if (others.length === 0) return null;

  return (
    <section className="card" style={{ marginTop: 16 }}>
      <h3 style={{ marginTop: 0 }}>More Picks</h3>
      <div className="row">
        {others.map((p) => (
          <Link key={p.slug} className="btn" href={`/picks/${p.slug}`}>
            {p.label}
          </Link>
        ))}
        <Link className="btn" href="/compare">
          Compare All
        </Link>
      </div>
    </section>
  );
}
