import React from 'react'
import { Tutorial } from '../fixture'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { GraditentLine } from '../../components/pages/RevampHome/Partners'
import ReactMarkdown from 'react-markdown'
import { SectionBgGradient } from '../../components/pages/Home/SectionBgGradient'

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
      id={`step${step}`}
      className={`mx-auto w-full max-w-[1064px] flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-6 md:gap-20`}
    >
      <div className='flex flex-col w-full md:w-[412px] md:flex-none'>
        <h3 className='text-2xl md:text-4xl font-bold text-neonGreen-500 leading-[32px] md:leading-[48px] mb-2'>
          <span className='text-white-500'>Step {step}:</span> {tutorial.title}
        </h3>
        <div className='relative text-grey-200 mb-6 md:mb-8'>
          <div className='relative -top-[100px]'>
            <SectionBgGradient />
          </div>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline'
                />
              )
            }}
          >
            {tutorial.description}
          </ReactMarkdown>
        </div>
        <PrimaryButton
          text={tutorial.button.text}
          href={tutorial.button.link}
          newTab
          icon={
            tutorial.button.link.includes('http') ? (
              <img src='/img/defi/FiArrowUpRight.svg' alt='external link' />
            ) : undefined
          }
          className='w-full md:w-fit'
        />
      </div>
      <div className='w-full md:max-w-[572px] md:flex-1 min-w-0'>
        <div className='aspect-[16/9] w-full md:max-w-[572px] md:max-h-[322px]'>
          {tutorial.video ? (
            <video
              src={tutorial.video}
              controls
              className='w-full h-full rounded-xl overflow-hidden object-cover'
            />
          ) : (
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className='w-full h-full rounded-xl overflow-hidden object-cover'
            />
          )}
        </div>
      </div>
    </div>
  )
}
