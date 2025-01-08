'use client'
import React, { useState } from 'react'
import { PHASES } from './constants'
import { Fade } from 'react-awesome-reveal'
import { Progress } from 'flowbite-react'
import { MobileRoadmap } from './MobileRoadmap'
import { Phases } from './constants'
import type { CustomFlowbiteTheme } from 'flowbite-react'

// flowbite-react 0.9 bug, need to include all these to style to show
export const customProgressTheme: CustomFlowbiteTheme['progress'] = {
  base: 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
  label: 'mb-1 flex justify-between font-medium dark:text-white',
  bar: 'space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100',
  color: {
    newGreen: 'bg-neon-green-500'
  },
  size: {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  }
}

export const calculateProgress = (currentPhase: number, phases: Phases) => {
  const total = phases[currentPhase - 1].length
  let done = 0

  phases[currentPhase - 1].forEach(p => {
    if (p.done) done += 1
  })

  return (done / total) * 100
}

export const Roadmap = () => {
  const [currentPhase, setCurrentPhase] = useState(2)

  const BUTTONS = [
    {
      text: 'Q1',
      phase: 1
    },
    {
      text: 'Q2',
      phase: 2
    },
    {
      text: 'Q3',
      phase: 3
    }
  ]

  return (
    <div className='relative max-w-7xl mx-auto bg-midBlack md:px-20 py-10 md:py-20 rounded mt-4 mb-20'>
      <div className='flex items-center justify-between gap-4 mb-10 md:mb-20'>
        <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-6xl mx-auto md:mx-0 text-center'>
          Etherlink <span className='text-neon-green-500'>Roadmap</span>
        </h1>

        <div className='hidden md:flex gap-2'>
          {BUTTONS.map((data, index) => (
            <Button
              {...data}
              setCurrentPhase={setCurrentPhase}
              currentPhase={currentPhase}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className='hidden md:flex flex-col min-h-[250px]'>
        <Fade delay={200} triggerOnce key={currentPhase}>
          <div className='md:flex justify-between'>
            <div className='flex flex-col'>
              {PHASES.map((phase, index) => (
                <ul
                  className={`${currentPhase === index + 1 ? '' : 'hidden'} ml-8`}
                  key={index}
                >
                  {phase.map((detail, index) => (
                    <div className='flex items-center gap-2' key={index}>
                      {detail.done ? (
                        <img
                          src='/img/home/square-check.svg'
                          alt='check icon'
                        />
                      ) : (
                        <img src='/img/home/square.svg' alt='square icon' />
                      )}
                      <p
                        className={`${detail.done ? 'text-neon-green-500' : 'text-white'} font-light text-lg`}
                      >
                        {detail.name}
                      </p>
                    </div>
                  ))}
                </ul>
              ))}
            </div>

            <div className='hidden md:flex flex-col items-end'>
              <h1 className='text-9xl font-semibold text-neon-green-500'>
                Q{currentPhase}
              </h1>
              <p className='text-3xl'>2024</p>
            </div>
          </div>
        </Fade>
      </div>
      <MobileRoadmap />
      <Progress
        color='newGreen'
        className='hidden md:block'
        progress={calculateProgress(currentPhase, PHASES)}
        theme={customProgressTheme}
      />
    </div>
  )
}

const Button = ({
  text,
  phase,
  setCurrentPhase,
  currentPhase
}: {
  text: string
  phase: number
  setCurrentPhase: (phase: number) => void
  currentPhase: number
}) => {
  return (
    <button
      className={`font-semibold text-2xl py-2 lg:py-4 px-5 lg:px-9 rounded-xl 
        ${currentPhase === phase ? 'bg-darkGreen text-black border-2 border-darkGreen' : 'border-2 text-white'} 
        hover:bg-neon-green-500 hover:border-neon-green-500 hover:text-black ease-in-out duration-200`}
      onClick={() => setCurrentPhase(phase)}
    >
      {text}
    </button>
  )
}
