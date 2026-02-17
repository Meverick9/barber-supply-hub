"use client"

import { useState } from "react"
import { products } from "@/lib/data/products"

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleProduct = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    )
  }

  const compared = products.filter(p => selected.includes(p.id))

  return (
    <div className="container">
      <h1 className="h1">Compare Products</h1>

      <div className="grid2">
        {products.map(p => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <button
              className="btn"
              onClick={()=>toggleProduct(p.id)}
            >
              {selected.includes(p.id) ? "Remove" : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {compared.length > 0 && (
        <>
          <div className="hr" />

          <table className="table">
            <thead>
              <tr>
                <th>Spec</th>
                {compared.map(p => (
                  <th key={p.id}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {compared.map(p => (
                  <td key={p.id}>${p.price}</td>
                ))}
              </tr>
              <tr>
                <td>Rating</td>
                {compared.map(p => (
                  <td key={p.id}>⭐ {p.rating}</td>
                ))}
              </tr>
              <tr>
                <td>Battery</td>
                {compared.map(p => (
                  <td key={p.id}>{p.battery}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
