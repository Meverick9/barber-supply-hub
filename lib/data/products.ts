// lib/data/products.ts

export type Category = "clippers" | "trimmers" | "kits" | "other"

export type Product = {
  name: string
  slug: string
  brand: string
  category: Category

  power: string
  battery: string

  rating: number
  reviews: number
  price: number

  // ВАЖНО: теперь источник для Amazon только ASIN
  asin?: string
}

export const products: Product[] = [
  {
    name: "Wahl Professional 5-Star Magic Clip",
    slug: "wahl-5-star-magic-clip",
    brand: "Wahl",
    category: "clippers",
    power: "Cordless",
    battery: "90 min",
    rating: 4.7,
    reviews: 22739,
    price: 89,
    asin: "B0009J8XSS",
  },
  {
    name: "BaBylissPRO GoldFX Clipper",
    slug: "babylisspro-goldfx-clipper",
    brand: "BaBylissPRO",
    category: "clippers",
    power: "Ferrari Motor",
    battery: "120 min",
    rating: 4.8,
    reviews: 12000,
    price: 149,
    asin: "B07H9ZFGXG",
  },
  {
    name: "Andis Master Cordless Clipper",
    slug: "andis-master-cordless",
    brand: "Andis",
    category: "clippers",
    power: "Rotary Motor",
    battery: "90 min",
    rating: 4.6,
    reviews: 5000,
    price: 199,
    asin: "B01M0LZK3I",
  },
]
