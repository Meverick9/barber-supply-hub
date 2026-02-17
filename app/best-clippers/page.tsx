"use client"

import { useState } from "react"
import { products } from "@/lib/data/products"
import ProductCard from "@/components/ProductCard"

export default function BestClippers() {
  const [minRating, setMinRating] = useState(0)
  const [maxPrice, setMaxPrice] = useState(999)

  const clippers = products
    .filter(p => p.category === "clippers")
    .filter(p => p.rating >= minRating)
    .filter(p => p.price <= maxPrice)

  return (
    <div className="container">
      <h1 className="h1">Best Hair Clippers 2026</h1>

      <div className="filters card">
        <div className="row">
          <div>
            <label>Min Rating:</label>
            <select onChange={(e)=>setMinRating(Number(e.target.value))}>
              <option value="0">All</option>
              <option value="4">4+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>

          <div>
            <label>Max Price:</label>
            <select onChange={(e)=>setMaxPrice(Number(e.target.value))}>
              <option value="999">All</option>
              <option value="100">Under $100</option>
              <option value="150">Under $150</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid2">
        {clippers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
