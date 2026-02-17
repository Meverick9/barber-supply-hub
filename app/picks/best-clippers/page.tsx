import type { Metadata } from "next"
import { products } from "@/lib/data/products"
import ProductCard from "@/app/components/ProductCard"

export const metadata: Metadata = {
  title: "Best Hair Clippers 2026 | Barber Supply Hub",
  description:
    "Top professional hair clippers for barbers. Compare Wahl, BaByliss, Andis and more.",
  alternates: {
    canonical: "https://barbersupplyhub.com/picks/best-clippers",
  },
  openGraph: {
    title: "Best Hair Clippers 2026",
    description:
      "Top professional hair clippers for barbers. Ratings, specs and real reviews.",
    url: "https://barbersupplyhub.com/picks/best-clippers",
    siteName: "Barber Supply Hub",
    type: "website",
  },
}

export default function BestClippersPage() {
  const clippers = products.filter(
    (product) => product.category === "clippers"
  )

  return (
    <div className="container">
      <h1 className="pageTitle">Best Hair Clippers</h1>

      <div className="grid2">
        {clippers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}
