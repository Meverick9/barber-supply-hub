import stacks from "@/lib/toolStacks.json";
import picks from "@/lib/picks-data.json";
import ProductCard from "./ProductCard";

export default function ToolStack({ barberId }: { barberId: string }) {
  const stack: any = (stacks as any[]).find((s) => s.barberId === barberId);
  if (!stack) return null;

  const allProducts = Object.values(picks as any).flatMap((p: any) => p.products);

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h2 style={{ marginTop: 0 }}>Tool Stack</h2>
      <div className="small">Updated: {stack.updated}</div>

      <div className="grid2" style={{ marginTop: 12 }}>
        {stack.stack.map((item: any, i: number) => {
          const product = allProducts.find((p: any) => p.id === item.productId);
          if (!product) return null;

          return (
            <div key={i}>
              <ProductCard product={product} placement="tool_stack" />
              <div className="small" style={{ marginTop: 6 }}>
                <b>{item.role}</b> — {item.why}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
