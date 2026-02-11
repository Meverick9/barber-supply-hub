"use client";

type Props = {
  productId: string;
  productName: string;
  href: string;
};

export default function StickyCTA({ productName, href }: Props) {
  return (
    <div className="stickyCta">
      <div className="container stickyRow">
        <span style={{ fontSize: 14 }}>
          <strong>Top Pick:</strong> {productName}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btnAccent"
          style={{ padding: "8px 16px", fontSize: 13 }}
        >
          Check Price &rarr;
        </a>
      </div>
    </div>
  );
}
