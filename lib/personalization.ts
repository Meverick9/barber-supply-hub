export type UserProfile = {
  specialty: "Fades" | "Beards" | "All-round" | "Beginner";
  experience: "0-1" | "1-3" | "3-7" | "7+";
  shopType: "Home" | "Barbershop" | "High-volume";
};

export function matchScore(tool: any, user: UserProfile) {
  let score = 0;
  if ((tool.bestFor || []).includes(user.specialty)) score += 1;
  if (tool.skillLevel === "All" || tool.skillLevel === user.experience) score += 1;
  if (tool.workload === user.shopType) score += 1;
  return score; // 0-3
}

export function personalizedScore(tool: any, user: UserProfile) {
  const base = tool.finalScore * 0.6;
  const match = matchScore(tool, user) * 0.4;
  return base + match;
}
