import { products } from "@/lib/data/products"
import ProductCard from "@/app/components/ProductCard"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params

  return {
    title: `Best ${category} 2026 | Barber Supply Hub`,
    description: `Top rated ${category} ranked by performance and price.`
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params

  const filtered = products.filter(
    p => p.category === category
  )

  return (
    <div className="container">
      <h1>Best {category}</h1>

      <div className="grid2">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
