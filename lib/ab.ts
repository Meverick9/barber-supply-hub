export type Variant = "A" | "B";
const KEY = "bsh_ab_variant_v1";

export function getVariant(): Variant {
  if (typeof window === "undefined") return "A";
  const saved = window.localStorage.getItem(KEY);
  if (saved === "A" || saved === "B") return saved;

  const v: Variant = Math.random() < 0.5 ? "A" : "B";
  window.localStorage.setItem(KEY, v);
  return v;
}
