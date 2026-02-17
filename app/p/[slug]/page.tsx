import { notFound } from "next/navigation"
import { products } from "@/lib/data/products"
import type { Product } from "@/lib/data/products"

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find(
    (p) => p.slug === params.slug
  )

  if (!product) return notFound()

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p className="muted">{product.brand}</p>

      <div className="card" style={{ marginTop: 20 }}>
        <p>{product.description}</p>

        <div className="hr" />

        <div>Power: {product.power}</div>
        <div>Battery: {product.battery}</div>

        <div className="hr" />

        <div className="price">${product.price}</div>

        <a
          href={product.affiliateUrl}
          target="_blank"
          className="btn btnAccent"
        >
          Check Price
        </a>
      </div>
    </div>
  )
}
