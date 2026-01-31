"use client";

import { trackAmazonClick } from "../lib/ga";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AmazonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener"
      onClick={() => {
        trackAmazonClick(href);
      }}
    >
      {children}
    </a>
  );
}
