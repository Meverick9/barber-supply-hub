type Score = { power: number; ergonomics: number; durability: number; value: number };

export function calcWeightedScore(s: Score) {
  // Transparent rubric:
  // Power 30%, Ergonomics 25%, Durability 25%, Value 20%
  return s.power * 0.3 + s.ergonomics * 0.25 + s.durability * 0.25 + s.value * 0.2;
}

export function toComparisonRows(products: any[]) {
  return products.map((p: any) => ({
    id: p.id,
    name: p.name,
    forWhat: p.forWhat ?? "General use",
    weight: Math.round(calcWeightedScore(p.score) * 10),
    amazonUrl: p.amazonUrl,
    priceText: p.priceText,
    priceDropPercent: p.priceDropPercent,
  }));
}
