import React from 'react'
import { ProjectCard } from './ProjectCard'
import Container from '../components/container'

const PROJECTS = [
  {
    title: 'T-Bill Savings',
    description: 'Stable savings on Etherlink.',
    images: '/img/defi/projects/t-bill.webp',
    tag: 'Supply',
    link: '/defi/t-bill-savings'
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  },
  {
    title: '',
    description: '',
    images: '',
    tag: '',
    link: ''
  }
]

export const ProjectSection = () => {
  return (
    <div className='relative' id='strategies'>
      <Container className='relative py-10 md:py-24'>
        <div className='flex flex-col justify-center items-start md:items-center mb-10'>
          <h2 className='text-[28px] md:text-4xl font-bold mb-2 text-grey-50'>
            <span className='text-neonGreen-500'>Start earning</span> in a few
            clicks
          </h2>
          <p className='text-grey-200 text-lg md:text-xl -tracking-[0.4px]'>
            Step-by-step guides to the top strategies on Etherlink
          </p>
        </div>
      </Container>
    </div>
  )
}
