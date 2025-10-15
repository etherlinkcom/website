'use client'

import { useRef, useLayoutEffect } from 'react'
import { Hero } from './Hero'
import { OnBoard } from './OnBoard'
import Link from 'next/link'
import Container from '../components/container'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectSection } from './ProjectSection'
import { Faqs } from './Faqs'
import { PageInitTracker } from './PageInitTracker'
import { trackPostHog } from '../../utils/trackPostHog'

gsap.registerPlugin(ScrollTrigger)

export const DefiClient = () => {
  const pageRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-section]')

      sections.forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageInitTracker />
      <div ref={pageRef} className='bg-grey-900'>
        <div data-section>
          <Hero />
        </div>
        <div data-section>
          <ProjectSection />
        </div>
        <div data-section>
          <OnBoard />
        </div>
        <div data-section>
          <Faqs />
        </div>
        <div data-section>
          <Container className='pt-10 pb-16'>
            <Cta />
          </Container>
        </div>
      </div>
    </>
  )
}

export const Cta = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full gap-6 mx-auto items-center px-12 py-10
            lg:flex-nowrap rounded-[12px] bg-[url('/CTA-Mobile.png')] md:bg-[url('/CTA-bg.png')] bg-cover"
    >
      <div className='flex-grow text-grey-900'>
        <h2 className='font-bold -tracking-[0.48px] text-[28px] md:text-[35px]'>
          Start Earning Today!
        </h2>
        <p className='mt-2 leading-normal text-grey-700'>
          Pick your strategy, onboard, and grow your portfolio
        </p>
      </div>

      <button
        className={`relative px-5 py-2.5 bg-grey-700 shadow-[0px_0px_6px_rgba(51,232,142,0.4)] 
            rounded-[24px] cursor-pointer overflow-hidden group w-full md:w-auto  hover:bg-grey-600
            hover:shadow-[0px_0px_6px_rgba(51,232,142,0.8)]`}
        role='button'
      >
        <Link
          href='#onboard'
          onClick={() => trackPostHog('onboard:getxtz:click')}
        >
          <div className='flex justify-center items-center gap-2'>
            <span className='relative z-10 text-lg font-semibold text-neonGreen-200 hover:text-neonGreen-500'>
              Get XTZ
            </span>
          </div>
        </Link>
      </button>
    </div>
  )
}
