import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export default function GuidePage({ params }: Props) {
  return notFound()
}