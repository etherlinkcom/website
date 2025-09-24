import { notFound } from 'next/navigation'
import Link from 'next/link'
import { STRATEGIES_DATA } from '../fixture'
import Container from '../../components/container'
import { Hero } from './Hero'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return STRATEGIES_DATA.map(s => ({ slug: s.id }))
}

export function generateMetadata({ params }: Props) {
  const s = STRATEGIES_DATA.find(s => s.id === params.slug)
  return s ? { title: `${s.name} — DeFi`, description: s.description } : {}
}

const Breadcrumbs = ({ strategy }: { strategy: string }) => {
  return (
    <nav aria-label='Breadcrumb' className='text-sm'>
      <ol className='flex items-center space-x-2 text-grey-200'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>›</li>
        <li>
          <Link href='/defi'>DeFi</Link>
        </li>
        <li>›</li>
        <li>{strategy}</li>
      </ol>
    </nav>
  )
}

export default function StrategyPage({ params }: Props) {
  const strategy = STRATEGIES_DATA.find(s => s.id === params.slug)
  if (!strategy) return notFound()

  return (
    <Container className='pt-10 md:pt-24'>
      <Breadcrumbs strategy={strategy.name} />
      <Hero strategy={strategy} />
    </Container>
  )
}
