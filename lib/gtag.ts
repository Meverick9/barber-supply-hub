declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function pageview(url: string) {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_location: url,
    page_path: url,
  });
}

export function event(name: string, params: Record<string, any>) {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", name, params);
}
