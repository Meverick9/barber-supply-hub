import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export const metadata: Metadata = {
  title: "Best Professional Hair Clippers 2025",
  description:
    "Compare the best professional hair clippers for barbers. Side-by-side specs, expert reviews, and real-world performance analysis.",
  alternates: {
    canonical: "https://barbersupplyhub.com/picks/best-clippers",
  },
};

const products = [
  {
    id: "wahl-magic-clip",
    name: "Wahl 5-Star Cordless Magic Clip",
    price: 89.99,
    rating: 4.7,
    image: "/images/wahl-magic-clip.jpg",
    description: "Professional cordless clipper with 90+ minute runtime and precision fade blade",
    brand: "Wahl",
    affiliateUrl: "https://amazon.com/dp/B0XXXXX?tag=yourtag"
  },
  {
    id: "andis-master",
    name: "Andis Master Adjustable Blade Clipper",
    price: 119.99,
    rating: 4.8,
    image: "/images/andis-master.jpg",
    description: "Powerful magnetic motor clipper with carbon-steel blade for all hair types",
    brand: "Andis",
    affiliateUrl: "https://amazon.com/dp/B0YYYYY?tag=yourtag"
  },
  {
    id: "babyliss-goldfx",
    name: "BaBylissPRO GoldFX",
    price: 199.99,
    rating: 4.7,
    image: "/images/babyliss-goldfx.jpg",
    description: "Premium brushless motor clipper with gold titanium blades",
    brand: "BaBylissPRO",
    affiliateUrl: "https://amazon.com/dp/B0ZZZZZ?tag=yourtag"
  },
  {
    id: "oster-fast-feed",
    name: "Oster Fast Feed Adjustable Clipper",
    price: 79.99,
    rating: 4.6,
    image: "/images/oster-fast-feed.jpg",
    description: "Fast cutting clipper with adjustable blade for professional barbers",
    brand: "Oster",
    affiliateUrl: "https://amazon.com/dp/B0AAAAA?tag=yourtag"
  },
  {
    id: "wahl-senior",
    name: "Wahl 5-Star Senior",
    price: 109.99,
    rating: 4.8,
    image: "/images/wahl-senior.jpg",
    description: "Heavy-duty corded clipper with V9000 electromagnetic motor",
    brand: "Wahl",
    affiliateUrl: "https://amazon.com/dp/B0BBBBB?tag=yourtag"
  }
];

export default function BestClippersPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Best Professional Hair Clippers 2025
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Expert-tested professional clippers for barbers. Compare specs, performance, and find the perfect clipper for your shop.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What makes a professional clipper different?</h3>
            <p className="text-gray-400">Professional clippers feature more powerful motors, durable metal bodies, sharper blades that stay sharp longer, and are designed for continuous daily use.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Should I buy cordless or corded clippers?</h3>
            <p className="text-gray-400">Cordless offers mobility and convenience. Corded provides consistent power. Many professionals keep both for different situations.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">How often should I replace clipper blades?</h3>
            <p className="text-gray-400">Professional barbers typically replace blades every 3-6 months depending on usage. Signs include pulling hair, uneven cuts, or requiring multiple passes.</p>
          </div>
        </div>
      </section>

    </main>
  );
}