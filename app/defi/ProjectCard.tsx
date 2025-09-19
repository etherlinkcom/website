import React, { useRef } from 'react'
import Link from 'next/link'

interface ProjectCardProps {
  link: string
  title: string
  description: string
  image: string
  video: string
  tag: string
}

export const ProjectCard = (props: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Link href={props.link} passHref>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='hover:cursor-pointer flex flex-col h-full hover:rounded-lg
        hover:bg-grey-500 hover:shadow-[0_0_6px_0_rgba(56,255,156,0.40)] hover:backdrop-blur-[6px]'
      >
        <div className='relative w-full'>
          {/* Thumbnail image (shows before hover if no video) */}
          <img
            src={props.image}
            alt={props.title}
            className='w-full object-cover rounded-t-lg'
          />

          {/* Video (hidden until hover) */}
          {props.video && (
            <video
              ref={videoRef}
              muted
              playsInline
              className='absolute top-0 left-0 w-full h-full object-cover rounded-t-lg'
            >
              <source src={props.video} type='video/mp4' />
            </video>
          )}
        </div>

        <div className='grey-700 p-6 border-l border-r border-b border-black-400 rounded-b-lg flex flex-col flex-grow'>
          <div className='flex items-center justify-between mb-1'>
            <h3 className='text-2xl font-semibold text-neonGreen-500'>
              {props.title}
            </h3>
            <img src='/img/defi/arrow-up-right-green.svg' alt='Arrow icon' />
          </div>
          <p className='text-grey-200 mb-4 flex-grow'>{props.description}</p>
          <span className='text-sm text-grey-50 px-2 py-1 rounded-full bg-grey-400 self-start'>
            {props.tag}
          </span>
        </div>
      </div>
    </Link>
  )
}
