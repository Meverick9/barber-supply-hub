import { notFound } from "next/navigation"
import { products } from "@/lib/data"

type Props = {
  params: { slug: string }
}

export default function ReviewPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) return notFound()

  return (
    <main className="container article">
      <h1>{product.name} Review (2026)</h1>

      <p>{product.description}</p>

      <h2>Performance for Fades</h2>
      <p>
        Designed for precision blending and consistent torque under load.
      </p>

      <h2>Specifications</h2>
      <ul>
        <li>Power: {product.power}</li>
        <li>Battery: {product.battery}</li>
        <li>Rating: ⭐ {product.rating}</li>
      </ul>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btnAccent"
      >
        Check Price on Amazon
      </a>
    </main>
  )
}
