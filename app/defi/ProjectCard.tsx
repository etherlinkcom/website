import React from 'react'
import Link from 'next/link'

interface ProjectCardProps {
  link: string
  title: string
  description: string
  image: string
  tag: string
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={props.link} passHref>
      <div className='hover:cursor-pointer'>
        <img src={props.image} alt={props.title} />
        <div className='grey-700 p-6 border-l border-r border-b border-black-400 rounded-b-lg'>
          <div className='flex items-center justify-between mb-1'>
            <h3 className='text-2xl font-semibold text-neonGreen-500'>
              {props.title}
            </h3>
            <img src='/img/defi/arrow-up-right-green.svg' alt='Arrow icon' />
          </div>
          <p className='text-grey-200 mb-4'>{props.description}</p>
          <span className='text-sm text-grey-50 px-2 py-1 rounded-full bg-grey-400'>
            {props.tag}
          </span>
        </div>
      </div>
    </Link>
  )
}
