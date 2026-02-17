"use client"

import { useState } from "react"
import { products } from "@/lib/data/products"

export default function ComparePage() {
  // Храним id как string (универсально безопасно)
  const [selected, setSelected] = useState<string[]>([])

  const toggleProduct = (id: string | number) => {
    const normalizedId = String(id)

    setSelected(prev =>
      prev.includes(normalizedId)
        ? prev.filter(p => p !== normalizedId)
        : [...prev, normalizedId]
    )
  }

  const compared = products.filter(p =>
    selected.includes(String(p.id))
  )

  return (
    <div className="container">
      <h1 className="h1">Compare Products</h1>

      {/* PRODUCT SELECT GRID */}
      <div className="grid2">
        {products.map(p => (
          <div key={`select-${p.id}`} className="card">
            <h3>{p.name}</h3>

            <button
              className="btn"
              onClick={() => toggleProduct(p.id)}
            >
              {selected.includes(String(p.id))
                ? "Remove"
                : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}
      {compared.length > 0 && (
        <>
          <div className="hr" />

          <table className="table">
            <thead>
              <tr>
                <th>Spec</th>
                {compared.map(p => (
                  <th key={`head-${p.id}`}>{p.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Price</td>
                {compared.map(p => (
                  <td key={`price-${p.id}`}>${p.price}</td>
                ))}
              </tr>

              <tr>
                <td>Rating</td>
                {compared.map(p => (
                  <td key={`rating-${p.id}`}>⭐ {p.rating}</td>
                ))}
              </tr>

              <tr>
                <td>Battery</td>
                {compared.map(p => (
                  <td key={`battery-${p.id}`}>{p.battery}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
