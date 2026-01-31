export function calcWear(tool: { daysInUse: number; maintained: boolean }, user: { shopType: string; specialty: string }) {
  const ageFactor = tool.daysInUse * 0.4;
  const workloadFactor = user.shopType === "High-volume" ? 10 : 5;
  const cutStress = user.specialty === "Fades" ? 8 : 4;
  const maintenance = tool.maintained ? 5 : 0;
  return ageFactor + workloadFactor + cutStress - maintenance;
}

export function wearStatus(score: number) {
  if (score < 20) return "OK";
  if (score < 35) return "WATCH";
  return "REPLACE_SOON";
}
