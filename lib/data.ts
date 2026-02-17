export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: "clippers" | "trimmers"
  rating: number
  price: number
  asin: string
}

export const products: Product[] = [
  {
    id: "wahl-magic-clip",
    slug: "wahl-magic-clip-cordless",
    name: "Wahl 5-Star Cordless Magic Clip",
    brand: "Wahl",
    category: "clippers",
    rating: 4.7,
    price: 89,
    asin: "B00UK8WFQO",
  },
  {
    id: "babyliss-goldfx",
    slug: "babylisspro-goldfx-clipper",
    name: "BaBylissPRO GoldFX Clipper",
    brand: "BaBylissPRO",
    category: "clippers",
    rating: 4.8,
    price: 149,
    asin: "B07H9ZFGXG",
  },
  {
    id: "andis-master",
    slug: "andis-master-cordless",
    name: "Andis Master Cordless Clipper",
    brand: "Andis",
    category: "clippers",
    rating: 4.6,
    price: 199,
    asin: "B01M0LZK3I",
  },
  {
    id: "wahl-senior",
    slug: "wahl-5star-senior",
    name: "Wahl 5-Star Senior Clipper",
    brand: "Wahl",
    category: "clippers",
    rating: 4.8,
    price: 119,
    asin: "B07H8R8KPB",
  },
  {
    id: "oster-76",
    slug: "oster-classic-76",
    name: "Oster Classic 76 Clipper",
    brand: "Oster",
    category: "clippers",
    rating: 4.7,
    price: 199,
    asin: "B0000A0U0K",
  },
]
