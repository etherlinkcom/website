import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { STRATEGIES_DATA, Strategy } from '../fixture'
import Container from '../../components/container'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'

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
      <div className='pb-10 pt-14 md:pt-20 md:pb-48'>
        <div className=''>
          <p className='text-sm font-bold text-neonGreen-500 mb-2 md:mb-4'>
            {strategy.strategyType}
          </p>
          <h1 className='text-4xl text-grey-50 md:text-[56px] font-bold -tracking-[0.72px] md:-tracking-[1.12px] mb-2 md:mb-4'>
            {strategy.name}
          </h1>
          <p className='text-grey-200 text-lg md:text-xl leading-[26px] mb-[140px] md:mb-20 max-w-[560px]'>
            {strategy.description}
          </p>
          <PrimaryButton
            href='#step1'
            text='Go to steps'
            className='w-full md:w-auto'
          />
        </div>
      </div>
    </Container>
  )
}
