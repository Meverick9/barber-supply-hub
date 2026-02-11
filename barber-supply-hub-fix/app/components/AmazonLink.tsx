"use client";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AmazonLink({ href, children }: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "outbound_click", {
        event_category: "affiliate",
        event_label: href,
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        display: "inline-block",
        background: "#FFD814",
        padding: "10px 18px",
        borderRadius: "6px",
        fontWeight: 600,
        textDecoration: "none",
        color: "#111",
        marginTop: "10px",
      }}
    >
      {children}
    </a>
  );
}
