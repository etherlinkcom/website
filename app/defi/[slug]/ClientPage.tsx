'use client'

import React from 'react'
import Link from 'next/link'
import { Strategy } from '../fixture'
import Container from '../../components/container'
import { Hero } from './Hero'
import { Tutorials } from './Tutorials'
import { MoreStrategies } from './MoreStrategies'
import { Faqs } from '../Faqs'
import { Cta } from '../DefiClient'

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

export const ClientPage = ({ strategy }: { strategy: Strategy }) => {
  return (
    <Container className='pt-10 md:pt-24'>
      <Breadcrumbs strategy={strategy.name} />
      <Hero strategy={strategy} />
      <Tutorials tutorials={strategy.tutorials} />
      <MoreStrategies id={strategy.id} />
      <Faqs />
      <Cta />
    </Container>
  )
}
