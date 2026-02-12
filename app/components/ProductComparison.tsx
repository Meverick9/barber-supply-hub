"use client";

type ComparisonRow = {
  id: string;
  name: string;
  forWhat: string;
  weight: number;
  amazonUrl: string;
  priceText?: string;
  priceDropPercent?: number;
};

type Props = {
  title: string;
  rows: ComparisonRow[];
};

export default function ProductComparison({ title, rows }: Props) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Best For</th>
              <th>Score</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ fontWeight: 600 }}>{row.name}</td>
                <td className="small">{row.forWhat}</td>
                <td>
                  <span style={{ color: "#ffd400", fontWeight: 700 }}>{row.weight}/10</span>
                </td>
                <td>
                  {row.priceText || "—"}
                  {row.priceDropPercent && row.priceDropPercent > 0 && (
                    <span style={{ color: "#22c55e", fontSize: 11, marginLeft: 6 }}>
                      &darr;{row.priceDropPercent}%
                    </span>
                  )}
                </td>
                <td>
                  <a
                    href={row.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ padding: "6px 12px", fontSize: 12 }}
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
