const AMAZON_TAG = "barbersupply-20";

export function amazonDpUrl(asin?: string) {
  if (!asin) return "#";

  const clean = asin.trim().toUpperCase();

  return `https://www.amazon.com/dp/${clean}?tag=${AMAZON_TAG}`;
}
