import React from 'react'
import { ProjectCard } from './ProjectCard'
import Container from '../components/container'
import { PROJECTS } from './fixture'

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </div>
  )
}
