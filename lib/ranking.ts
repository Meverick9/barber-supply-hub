export function calcToolScore(tool: {
  votes: number;
  avgRep: number;
  stackCount: number;
  trend: number;
  editorScore: number;
}) {
  return (
    tool.votes * 0.25 +
    tool.avgRep * 0.30 +
    tool.stackCount * 0.25 +
    tool.trend * 0.10 +
    tool.editorScore * 0.10
  );
}
