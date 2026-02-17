import { products } from "@/lib/data/products"
import ProductCard from "@/app/components/ProductCard"
import type { Metadata } from "next"

type Props = {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Best ${params.category} 2026 | Barber Supply Hub`,
    description: `Top rated ${params.category} ranked by performance and price.`
  }
}

export default function CategoryPage({ params }: Props) {
  const filtered = products.filter(
    p => p.category === params.category
  )

  return (
    <div className="container">
      <h1>Best {params.category}</h1>

      <div className="grid2">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
