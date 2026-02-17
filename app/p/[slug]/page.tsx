import { notFound } from "next/navigation"
import { products } from "@/lib/data/products"
import { amazonDpUrl } from "@/lib/amazon"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.name} Review | Barber Supply Hub`,
    description: `Full professional breakdown of ${product.name}.`
  }
}

export default async function ProductPage(
  { params }: Props
) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) return notFound()

  return (
    <main className="container article">
      <h1>{product.name}</h1>

      <p className="muted">{product.brand}</p>

      <div className="hr" />

      <p><strong>Power:</strong> {product.power}</p>
      <p><strong>Battery:</strong> {product.battery}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>

      {product.asin && (
        <a
          href={amazonDpUrl(product.asin)}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition"
        >
          Check Price on Amazon →
        </a>
      )}
    </main>
  )
}
