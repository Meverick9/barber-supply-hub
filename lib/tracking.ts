import { event } from "./gtag";

export type OutboundClickPayload = {
  url: string;
  productId?: string;
  productName?: string;
  placement?: string;
  variant?: string;
};

export function trackOutboundClick(p: OutboundClickPayload) {
  event("outbound_click", {
    link_url: p.url,
    product_id: p.productId ?? "",
    product_name: p.productName ?? "",
    placement: p.placement ?? "",
    variant: p.variant ?? "",
  });
}

export function trackSelectProduct(p: OutboundClickPayload) {
  event("select_item", {
    item_id: p.productId ?? "",
    item_name: p.productName ?? "",
    item_list_name: p.placement ?? "",
    link_url: p.url,
    variant: p.variant ?? "",
  });
}

export function trackScrollDepth(depth: 50 | 90, page: string) {
  event("scroll_depth", { depth, page });
}
