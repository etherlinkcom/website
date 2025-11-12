import { notFound } from 'next/navigation'
import { STRATEGIES_DATA } from '../fixture'
import { ClientPage } from './ClientPage'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return STRATEGIES_DATA.map(s => ({ slug: s.id }))
}

export function generateMetadata({ params }: Props) {
  const s = STRATEGIES_DATA.find(s => s.id === params.slug)
  return s
    ? {
        title: `${s.name} — DeFi`,
        description: s.description,
        alternates: {
          canonical: `/defi/${s.id}`
        }
      }
    : {}
}

export default function StrategyPage({ params }: Props) {
  const strategy = STRATEGIES_DATA.find(s => s.id === params.slug)
  if (!strategy) return notFound()

  return <ClientPage strategy={strategy} />
}
