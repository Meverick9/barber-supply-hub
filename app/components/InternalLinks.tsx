export default function InternalLinks({ current }: { current: string }) {
  const pages = [
    { slug: "best-clippers", label: "Best Clippers" },
    { slug: "best-trimmers", label: "Best Trimmers" },
    { slug: "starter-kit", label: "Starter Kit" },
  ];

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h3 style={{ marginTop: 0 }}>You may also like</h3>
      <div className="row">
        {pages
          .filter((p) => p.slug !== current)
          .map((p) => (
            <a key={p.slug} href={`/picks/${p.slug}`} className="btn">
              {p.label}
            </a>
          ))}
      </div>
    </div>
  );
}
