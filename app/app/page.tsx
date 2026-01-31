import AmazonLink from "./components/AmazonLink";

export default function PicksPage() {
  const product = {
    name: "Wahl 5-Star Cordless Magic Clip",
    img: "/picks/magic-clip.jpg",
    url: "https://www.amazon.com/dp/B00UK8WFQO?tag=barbersupp044-20",
  };

  return (
    <main>
      <AmazonLink href={product.url}>
        <span
          style={{
            display: "inline-block",
            background: "#000",
            color: "#fff",
            padding: "18px 24px",
            borderRadius: 14,
            fontWeight: 700,
          }}
        >
          Check today’s price on Amazon →
        </span>
      </AmazonLink>
    </main>
  );
}
