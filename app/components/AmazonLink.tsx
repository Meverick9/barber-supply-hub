"use client";

import { trackOutboundClick, trackSelectProduct } from "@/lib/tracking";

type Props = {
  href: string;
  children: React.ReactNode;
  productId?: string;
  productName?: string;
  placement?: string;
  variant?: string;
  className?: string;
};

export default function AmazonLink({
  href,
  children,
  productId,
  productName,
  placement,
  variant,
  className,
}: Props) {
  const onClick = () => {
    trackOutboundClick({ url: href, productId, productName, placement, variant });
    trackSelectProduct({ url: href, productId, productName, placement, variant });
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
