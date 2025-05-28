'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const icons = [
  {
    origSrc: '/img/ecosystem/rarible.jpg',
    altSrc: '/img/ecosystem/superlend.jpg',
    position: 'absolute -top-6 left-[100px] -rotate-[18deg]'
  },
  {
    origSrc: '/img/ecosystem/thirdweb.png',
    altSrc: '/img/ecosystem/icon.png',
    position: 'absolute -top-2 left-[200px] rotate-[28deg]'
  },
  {
    origSrc: '/img/ecosystem/icon.png',
    altSrc: '/img/ecosystem/rarible.jpg',
    position: 'absolute -bottom-10 left-[140px] -rotate-[28deg]'
  },
  {
    origSrc: '/img/ecosystem/animated-icons/icon1.png',
    altSrc: '/img/ecosystem/superlend.jpg',
    position: 'absolute -top-6 right-[220px] -rotate-[27deg]'
  },
  {
    origSrc: '/img/ecosystem/thirdweb.png',
    altSrc: '/img/defi/icons/Hanji.svg',
    position: 'absolute -top-2 right-[120px] rotate-[28deg]'
  },
  {
    origSrc: '/img/ecosystem/superlend.jpg',
    altSrc: '/img/ecosystem/rarible.jpg',
    position: 'absolute -bottom-10 right-[170px] rotate-[14deg]'
  }
]

export const Hero = () => {
  const words = ['Discover', 'Build', 'Trade']
  const [showAlt, setShowAlt] = useState(false)
  const [phase, setPhase] = useState<'shrinking' | 'growing'>('growing')
  const [highlight, setHighlight] = useState(0)

  const ANIM_DURATION = 800

  useEffect(() => {
    let shrinkTimeout: number, nextCycleTimeout: number

    function cycle() {
      setPhase('shrinking')
      shrinkTimeout = window.setTimeout(() => {
        setShowAlt(v => !v)
        setHighlight(i => (i + 1) % words.length)
        setPhase('growing')

        nextCycleTimeout = window.setTimeout(cycle, ANIM_DURATION)
      }, ANIM_DURATION)
    }

    cycle()
    return () => {
      clearTimeout(shrinkTimeout)
      clearTimeout(nextCycleTimeout)
    }
  }, [words.length])

  return (
    <div className='flex flex-col justify-center mx-auto px-8'>
      <div className='relative mt-4'>
        {icons.map(({ origSrc, altSrc, position }, i) => (
          <img
            key={i}
            src={showAlt ? altSrc : origSrc}
            alt=''
            className={`
              hidden xl:block
              ${position}
              w-10 h-10 rounded-lg
              transform
              transition-transform duration-${ANIM_DURATION} ease-in-out
              ${phase === 'shrinking' ? 'scale-0' : 'scale-100'}
            `}
          />
        ))}

        <h1 className='text-[32px] md:text-[35px] text-start md:text-center font-bold mb-2'>
          {words.map((w, i) => (
            <span key={w} className={`${i < words.length - 1 ? 'mr-2' : ''}`}>
              {i === 2 && <span className='text-neonGreen-50'>&amp;</span>}{' '}
              <span
                className={`${
                  i === highlight
                    ? 'xl:text-neonGreen-600'
                    : 'text-neonGreen-50'
                }`}
              >
                {w}
              </span>
            </span>
          ))}{' '}
          <span className='text-neonGreen-50 xl:text-neonGreen-600'>
            on Etherlink
          </span>
        </h1>
      </div>

      <p className='hidden md:block text-[23px] text-center text-white-700 -tracking-[0.46px]'>
        A growing ecosystem of innovative projects, from DeFi to gaming and
        beyond.
      </p>
    </div>
  )
}
