'use client'
import React, { useState } from 'react'
import Container from '../components/container'
import { ProjectCard } from './ProjectCard'
import { projects } from './fixture'

export const ProjectList = () => {
  const [numToShow, setNumToShow] = useState(18)

  const totalProjects = projects.length

  const handleClick = () =>
    setNumToShow((prev: number) => {
      const remaining = totalProjects - prev
      if (remaining > 6) return prev + 6
      return prev + remaining
    })

  return (
    <Container>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-xl md:text-2xl font-bold'>Projects</h1>
        <p className='text-sm text-gray-300'>
          <span className='font-semibold'>{totalProjects}</span> results
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
        {projects.slice(0, numToShow).map((p, index) => (
          <ProjectCard {...p} key={index} />
        ))}
      </div>
      <p className='text-center text-sm mb-4'>
        Displaying <span className='font-semibold'>{numToShow}</span> of{' '}
        <span className='font-semibold'>{totalProjects}</span> projects
      </p>
      <div className='flex justify-center'>
        {numToShow < totalProjects && <LoadMoreButton onClick={handleClick} />}
      </div>
    </Container>
  )
}

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      className='flex items-center gap-1 border border-white rounded-xl px-5 py-2 h-[48px]
        text-base font-semibold hover:bg-lightGreen hover:text-black hover:border-lightGreen transition-all duration-300'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Load more{' '}
      <img
        src={hover ? '/load-black.svg' : '/load-white.svg'}
        alt='load more'
        className='w-5'
      />
    </button>
  )
}
