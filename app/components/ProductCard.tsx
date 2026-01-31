import AmazonLink from "./AmazonLink";
import BestValueBadge from "./BestValueBadge";
import PriceDropBadge from "./PriceDropBadge";
import ScarcityTimer from "./ScarcityTimer";
import CommunityBadge from "./community/CommunityBadge";
import VoteButton from "./community/VoteButton";
import Reviews from "./community/Reviews";
import UsedByBarbers from "./community/UsedByBarbers";
import StackPopularity from "./community/StackPopularity";
import AddToStackButton from "./community/AddToStackButton";

export type Product = {
  id: string;
  name: string;
  short: string;
  priceText?: string;
  amazonUrl: string;
  bestValue?: boolean;
  priceDropPercent?: number;
  stockLeft?: number;
};

export default function ProductCard({
  product,
  placement,
  variant,
}: {
  product: Product;
  placement: string;
  variant?: string;
}) {
  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="row">
          {product.bestValue ? <BestValueBadge /> : null}
          {product.priceDropPercent ? <PriceDropBadge percent={product.priceDropPercent} /> : null}
          {product.stockLeft ? <span className="badge">⚡ {product.stockLeft} left</span> : null}
          <StackPopularity productId={product.id} />
        </div>
        <ScarcityTimer minutes={25} />
      </div>

      <h3 style={{ margin: "10px 0 6px" }}>{product.name}</h3>
      <p className="small" style={{ margin: 0 }}>{product.short}</p>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 10 }}>
        <div className="row">
          <CommunityBadge productId={product.id} />
          <VoteButton productId={product.id} />
          <AddToStackButton productId={product.id} />
        </div>
        <UsedByBarbers productId={product.id} />
      </div>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 12 }}>
        <div className="price">{product.priceText ?? "Check price"}</div>

        <AmazonLink
          href={product.amazonUrl}
          productId={product.id}
          productName={product.name}
          placement={placement}
          variant={variant}
          className="btn btnAccent"
        >
          View on Amazon →
        </AmazonLink>
      </div>

      <Reviews productId={product.id} />
    </div>
  );
}
