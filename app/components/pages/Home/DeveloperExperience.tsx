'use client'
import React, { useState } from 'react'
import { EXPERIENCE, ExperienceProps, FeatureTitle } from './constants'
import Container from '../../container'
import { SectionBgGradient } from './SectionBgGradient'

export const DeveloperExperience = () => {
  return (
    <Container className='relative pb-32'>
      <SectionBgGradient />
      <div className='mb-[104px]'>
        <h2 className='text-neon-green-500 font-bold text-3xl md:text-6xl text-center mb-1 -tracking-[1.1px]'>
          <span className='text-white'>Developer</span> Experience
        </h2>
        <p className='text-center mt-2 font-light md:text-[23px] text-[#9B9B9B] -tracking-[0.46px]'>
          Effortless Deployment, Maximum Impact
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        {EXPERIENCE.map((data, index) => (
          <Accordian {...data} key={index} />
        ))}
      </div>
    </Container>
  )
}

const Accordian = ({ title, subTitle, desc }: ExperienceProps) => {
  const [clicked, setClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative hover:cursor-pointer p-6 rounded-3xl shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)]
        border border-transparent bg-[#1B1B1B] backdrop-blur-md group hover:border hover:border-neon-green-500'
      onClick={() => setClicked(!clicked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex flex-col justify-start md:p-6'>
        <div className='flex items-start justify-between'>
          <FeatureTitle title={title} subTitle={subTitle} />
          <div className=''>
            {clicked ? (
              isHovered ? (
                <AccordianIcon
                  img='/img/home/black-chevoron-up.svg'
                  alt='accordian-up'
                />
              ) : (
                <AccordianIcon
                  img='/img/home/accordian-up.svg'
                  alt='accordian-up'
                />
              )
            ) : isHovered ? (
              <AccordianIcon
                clasName='rotate-180'
                img='/img/home/black-chevoron-up.svg'
                alt='accordian-down'
              />
            ) : (
              <AccordianIcon
                img='/img/home/accordian-down.svg'
                alt='accordian-down'
              />
            )}
          </div>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden
            ${clicked ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} p-[10px]`}
        >
          <p className='text-[#9B9B9B] md:max-w-[85%] text-[14px] md:text-[18px] -tracking-[0.36px] font-normal'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

const AccordianIcon = ({
  img,
  alt,
  clasName
}: {
  img: string
  alt: string
  clasName?: string
}) => {
  return (
    <img
      className={`shadow-[0px_0px_6px_0px_rgba(56,255,156,0.40)] backdrop-blur-md 
          rounded p-[6px] ${clasName} group-hover:bg-neon-green-500 group-hover:shadow-[0px_0px_6px_0px_rgba(51, 232, 142, 0.80)] transition-colors duration-300`}
      src={img}
      alt={alt}
    />
  )
}
