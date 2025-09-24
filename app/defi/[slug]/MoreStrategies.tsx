import React from 'react'
import { ProjectCard } from '../ProjectCard'
import { PROJECTS } from '../fixture'

export const MoreStrategies = ({ id }: { id: string }) => {
  return (
    <div className='pb-10 pt-14 md:pt-20 md:pb-28' id='onboard'>
      <div className='text-start md:text-center mb-10 md:mb-16'>
        <h3 className='text-[28px] md:text-4xl font-bold leading-[32px] md:leading-[48px] text-white-500 mb-2'>
          <span className='text-neonGreen-500'>More earning</span> strategies
        </h3>
        <p className='text-grey-200 text-lg md:text-xl'>
          Step-by-step guides to the top strategies on Etherlink
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
        {PROJECTS.filter(p => p.id !== id).map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
