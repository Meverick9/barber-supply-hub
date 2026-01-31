import AmazonLink from "./AmazonLink";
import BestValueBadge from "./BestValueBadge";
import PriceDropBadge from "./PriceDropBadge";

type ComparisonRow = {
  id: string;
  name: string;
  forWhat: string;
  weight: number;
  amazonUrl: string;
  priceText?: string;
  priceDropPercent?: number;
};

function pickBestValue(rows: ComparisonRow[]) {
  return rows.reduce((best, r) => (r.weight > best.weight ? r : best), rows[0]);
}

export default function ProductComparison({
  title = "Quick comparison",
  rows,
  placement = "comparison",
  variant,
}: {
  title?: string;
  rows: ComparisonRow[];
  placement?: string;
  variant?: string;
}) {
  const best = pickBestValue(rows);

  return (
    <section className="card">
      <h2 style={{ margin: "0 0 8px" }}>{title}</h2>
      <p className="small" style={{ marginTop: 0 }}>
        Picks are ranked by a transparent score rubric. We may earn affiliate commissions.
      </p>

      <table className="table" role="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Best for</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const isBest = r.id === best.id;
            return (
              <tr key={r.id}>
                <td>
                  <div className="row" style={{ gap: 8 }}>
                    <span style={{ fontWeight: 800 }}>{r.name}</span>
                    {isBest ? <BestValueBadge /> : null}
                    {r.priceDropPercent ? <PriceDropBadge percent={r.priceDropPercent} /> : null}
                  </div>
                  <div className="small">{r.priceText ?? "Check price"}</div>
                </td>
                <td>{r.forWhat}</td>
                <td className="small">{r.weight}</td>
                <td style={{ textAlign: "right" }}>
                  <AmazonLink
                    href={r.amazonUrl}
                    productId={r.id}
                    productName={r.name}
                    placement={placement}
                    variant={variant}
                    className="btn"
                  >
                    See →
                  </AmazonLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
