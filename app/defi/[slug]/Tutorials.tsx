import React from 'react'
import { Tutorial } from '../fixture'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { GraditentLine } from '../../components/pages/RevampHome/Partners'

export const Tutorials = ({ tutorials }: { tutorials: Tutorial[] }) => {
  return (
    <>
      <div className='flex flex-col gap-[50px] md:gap-[100px] py-14 md:py-[144px]'>
        {tutorials.map((t, i) => (
          <div
            key={t.title}
            className={`mb-20 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <TutorialCard tutorial={t} step={i + 1} reverse={i % 2 === 1} />
          </div>
        ))}
      </div>
      <GraditentLine className='left-[50%] -translate-x-[56%]' />
    </>
  )
}

const TutorialCard = ({
  tutorial,
  step,
  reverse
}: {
  tutorial: Tutorial
  step: number
  reverse?: boolean
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-6 md:gap-20 md:items-center justify-center`}
      id={`step${step}`}
    >
      <div className='flex flex-col flex-1 min-w-0'>
        <h3 className='text-2xl md:text-4xl font-bold text-neonGreen-500 leading-[32px] md:leading-[48px] mb-2'>
          <span className='text-white-500'>Step {step}:</span> {tutorial.title}
        </h3>
        <p className='text-grey-200 mb-6 md:mb-8 md:max-w-[412px]'>
          {tutorial.description}
        </p>
        <PrimaryButton
          text={tutorial.button.text}
          href={tutorial.button.link}
          className='w-full md:w-fit'
        />
      </div>
      <div className='flex-1 min-w-0'>
        <video
          src={tutorial.video}
          controls
          className='w-full h-auto rounded-xl overflow-hidden'
        />
      </div>
    </div>
  )
}
