"use client";

import { useState } from "react";
import { products } from "@/lib/data/products";
import { amazonDpUrl } from "@/lib/amazon";

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleProduct = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((p) => p !== slug) : [...prev, slug]
    );
  };

  const compared = products.filter((p) => selected.includes(p.slug));

  return (
    <div className="container">
      <h1 className="h1">Compare Products</h1>

      <div className="grid2">
        {products.map((p) => (
          <div key={p.slug} className="card">
            <h3>{p.name}</h3>
            <p className="muted small">{p.brand} &middot; ${p.price}</p>
            <button
              className={selected.includes(p.slug) ? "btn btnAccent" : "btn"}
              onClick={() => toggleProduct(p.slug)}
            >
              {selected.includes(p.slug) ? "Remove" : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {compared.length > 0 && (
        <>
          <div className="hr" />
          <h2>Comparison</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Spec</th>
                {compared.map((p) => (
                  <th key={`h-${p.slug}`}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {compared.map((p) => (
                  <td key={`price-${p.slug}`}>${p.price}</td>
                ))}
              </tr>
              <tr>
                <td>Rating</td>
                {compared.map((p) => (
                  <td key={`rat-${p.slug}`}>&#11088; {p.rating}</td>
                ))}
              </tr>
              <tr>
                <td>Buy</td>
                {compared.map((p) => {
                  const href = amazonDpUrl(p.asin);
                  return (
                    <td key={`buy-${p.slug}`}>
                      {href ? (
                        <a href={href} target="_blank" rel="nofollow sponsored noopener noreferrer" className="btn btnAccent" style={{ fontSize: 12, padding: "6px 12px" }}>
                          Amazon &rarr;
                        </a>
                      ) : "-"}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}