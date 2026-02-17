// lib/amazon.ts

const DEFAULT_TAG = "barbersupply-20"

// Можно хранить тег в .env.local:
// NEXT_PUBLIC_AMAZON_TAG=barbersupply-20
export const AMAZON_TAG =
  (process.env.NEXT_PUBLIC_AMAZON_TAG || process.env.AMAZON_TAG || DEFAULT_TAG).trim()

export function amazonDpUrl(asin?: string) {
  const clean = (asin || "").trim().toUpperCase()
  if (!clean) return "" // важно: не падаем, просто вернем пусто
  return `https://www.amazon.com/dp/${clean}?tag=${encodeURIComponent(AMAZON_TAG)}`
}
