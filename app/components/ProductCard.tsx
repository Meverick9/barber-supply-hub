"use client";
import AmazonLink from "./AmazonLink";

export type Product = {
  id: string;
  name: string;
  price: number;
  currency?: string;
  rating: number;
  reviews: number;
  amazonUrl: string;
  image?: string;
  shortDesc: string;
  fullDesc?: string;
  motor?: string;
  blade?: string;
  power?: string;
  weight?: string;
  bestFor?: string;
  badge?: string;
};

type Props = {
  product: Product;
  placement?: string;
};

export default function ProductCard({ product, placement }: Props) {
  return (
    <div
      style={{
        background: "#1a1a1e",
        border: "1px solid #242428",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "16px",
      }}
    >
      {product.badge && (
        <span
          style={{
            display: "inline-block",
            background: "#ffd400",
            color: "#000",
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "6px",
            marginBottom: "8px",
          }}
        >
          {product.badge}
        </span>
      )}

      <h3 style={{ margin: "0 0 6px" }}>{product.name}</h3>

      <p style={{ margin: "0 0 6px", fontSize: "14px", color: "#a7a7ad" }}>
        <span>&star; {product.rating}</span>
        <span> ({product.reviews.toLocaleString()} reviews)</span>
        <span style={{ marginLeft: 12, fontWeight: 700, color: "#ffd400" }}>
          {product.currency || "$"}{product.price}
        </span>
      </p>

      {product.motor && (
        <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#888" }}>
          {product.motor} &middot; {product.blade} &middot; {product.power} &middot; {product.weight}
        </p>
      )}

      <p style={{ opacity: 0.8, fontSize: "14px", margin: "4px 0 12px" }}>
        {product.shortDesc}
      </p>

      <AmazonLink href={product.amazonUrl}>Check Price on Amazon &rarr;</AmazonLink>
    </div>
  );
}
