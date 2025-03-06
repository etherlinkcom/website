'use client'

import React, { useState, useEffect } from 'react'
import { PrimaryButton } from './buttons/PrimaryButton'
import { GhostButton } from './buttons/GhostButton'
import Cookies from 'js-cookie'

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent')
    if (!cookieConsent) {
      setIsVisible(true)
      document.documentElement.classList.add('overflow-hidden')
    }
    return () => {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 })
    setIsVisible(false)
    document.documentElement.classList.remove('overflow-hidden')
  }

  const handleNecessaryOnly = () => {
    Cookies.set('cookie_consent', 'necessary', { expires: 365 })
    setIsVisible(false)
    document.documentElement.classList.remove('overflow-hidden')
  }

  return isVisible ? (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-end z-50'>
      <div className='w-full max-w-[1200px] p-10 md:p-6 bg-grey-700 rounded-3xl shadow-[0_0_6px_0_rgba(56,255,156,0.4)] mb-0 md:mb-10 mx-0 md:mx-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-center md:text-left text-white-50'>
            <p>This site uses cookies to make your experience better.</p>
            {/* <a href='/privacy' className='block font-bold underline'>
              Cookie Policy
            </a> */}
          </div>
          <div className='flex flex-col md:flex-row gap-[18px] w-full md:w-auto'>
            <PrimaryButton
              className='w-full md:w-auto'
              text='Accept Cookies'
              onClick={handleAccept}
            />
            <GhostButton
              className='w-full md:w-auto'
              text='Necessary Only'
              onClick={handleNecessaryOnly}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null
}
