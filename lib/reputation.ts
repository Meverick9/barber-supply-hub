import repData from "@/lib/barberReputation.json";

export function calcRep(b: any) {
  return b.reviews * 2 + b.stacks * 3 + b.upvotes + (b.verified ? 10 : 0);
}

export function getLevel(score: number) {
  if (score > 40) return "Top Expert";
  if (score > 25) return "Verified Pro";
  if (score > 10) return "Active Barber";
  return "Member";
}

export function getBarberLevel(barberId: string) {
  const r = (repData as any[]).find((x) => x.barberId === barberId);
  const score = r ? calcRep(r) : 0;
  return getLevel(score);
}
