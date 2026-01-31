"use client";

import AmazonLink from "./AmazonLink";

export default function StickyCTA({
  productId,
  productName,
  href,
  variant,
}: {
  productId: string;
  productName: string;
  href: string;
  variant?: string;
}) {
  return (
    <div className="stickyCta">
      <div className="container stickyRow">
        <div>
          <div style={{ fontWeight: 800 }}>{productName}</div>
          <div className="small">Editor top pick · Limited promos may apply</div>
        </div>

        <AmazonLink
          href={href}
          productId={productId}
          productName={productName}
          placement="sticky"
          variant={variant}
          className="btn btnAccent"
        >
          Check on Amazon →
        </AmazonLink>
      </div>
    </div>
  );
}
