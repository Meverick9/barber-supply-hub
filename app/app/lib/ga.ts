export function trackAmazonClick(url: string) {
  if (typeof window === "undefined") return;
  if (!("gtag" in window)) return;

  // @ts-ignore
  window.gtag("event", "outbound_click", {
    event_category: "affiliate",
    event_label: "amazon",
    destination: url,
  });
}
