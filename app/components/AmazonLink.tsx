"use client"

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function AmazonLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
