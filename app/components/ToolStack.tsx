type Tool = {
  name: string;
  category: string;
  link?: string;
};

type Props = {
  barberName: string;
  tools: Tool[];
};

export default function ToolStack({ barberName, tools }: Props) {
  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h3 style={{ marginTop: 0 }}>{barberName}&apos;s Tool Stack</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tools.map((tool, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid #242428",
            }}
          >
            <div>
              <strong>{tool.name}</strong>
              <span className="small" style={{ marginLeft: 8 }}>{tool.category}</span>
            </div>
            {tool.link && (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ padding: "4px 10px", fontSize: 11 }}
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
