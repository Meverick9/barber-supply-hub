"use client"

import Link from "next/link"
import { Product } from "@/lib/data/products"
import { amazonDpUrl } from "@/lib/amazon"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const href = amazonDpUrl(product.asin)

  return (
    <div className="card productCard">
      <div className="productTop">
        <div>
          <h3 className="productTitle">
            <Link href={`/p/${product.slug}`}>{product.name}</Link>
          </h3>

          <div className="muted small">{product.brand}</div>
        </div>

        <div className="rating">⭐ {product.rating}</div>
      </div>

      <div className="hr" />

      <div className="specs">
        <div>
          <span className="muted">Power:</span> {product.power}
        </div>
        <div>
          <span className="muted">Battery:</span> {product.battery}
        </div>
      </div>

      <div className="hr" />

      <div className="productBottom">
        <div className="price">${product.price}</div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition"
          >
            Check Price on Amazon →
          </a>
        ) : (
          <span className="muted small">ASIN missing</span>
        )}
      </div>

      <div className="small muted">
        <Link href={`/picks/${product.category}`}>More {product.category}</Link>
      </div>
    </div>
  )
}
