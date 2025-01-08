'use client'
import React, { useCallback, useState } from 'react'
import { type NavItem, NAVBAR_ITEMS } from './fixture'
import { X, Discord } from '../icons'
import Link from 'next/link'
import { useEffect } from 'react'
import { HomeCta } from './HomeCta'

const SubNavItem = ({
  item,
  handleClose
}: {
  item: NavItem
  handleClose: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.dropdown) {
    return (
      <Link
        href={item.link || '#'}
        className='flex items-center justify-between px-6 py-2.5 text-grey-100 text-sm font-bold transition-colors hover:text-white'
        onClick={handleClose}
        target={item.link?.startsWith('http') ? '_blank' : undefined}
      >
        <span>{item.name}</span>
        {item.link?.startsWith('http') && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-4 w-4 ml-2'
          >
            <path d='M7 17 17 7' />
            <path d='M7 7h10v10' />
          </svg>
        )}
      </Link>
    )
  }

  return (
    <div className='w-full'>
      <button
        className={`flex items-center justify-between w-full px-6 py-3 text-sm font-bold transition-colors
          ${isOpen ? 'text-neon-green-500 bg-grey-700 rounded-t-xl' : 'text-grey-100 hover:text-white'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.name}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d='m6 9 6 6 6-6' />
        </svg>
      </button>

      <div
        className={`space-y-1 bg-grey-800 overflow-hidden transition-all duration-200 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        {item.items?.map((subItem, index) => (
          <Link
            key={index}
            href={subItem.link || '#'}
            className='block px-8 py-2 text-grey-100 text-sm font-bold transition-colors hover:text-white'
            onClick={handleClose}
            target={subItem.link?.startsWith('http') ? '_blank' : undefined}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

const NavLevel = ({
  items,
  handleClose,
  goBack,
  title,
  isActive
}: {
  items: NavItem[]
  handleClose: () => void
  goBack: () => void
  title?: string
  isActive: boolean
}) => {
  return (
    <div
      className={` bg-grey-900 transition-transform duration-300 ease-in-out border ${
        isActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {title && (
        <div className='relative flex items-center justify-center py-2.5 mx-1'>
          <button
            onClick={goBack}
            className='absolute left-6 text-grey-100 hover:text-white'
          >
            <img src='/img/nav/FiArrowLeft.svg' alt='back button' />
          </button>
          <p className='text-grey-100 font-bold'>{title}</p>
          <button
            onClick={handleClose}
            className='absolute right-6 text-grey-100 hover:text-white'
          >
            <img src='/img/nav/close.svg' alt='close button' />
          </button>
        </div>
      )}

      <div className='mt-4 flex flex-col px-2'>
        {items.map((item, index) => (
          <SubNavItem key={index} item={item} handleClose={handleClose} />
        ))}
      </div>
      <div className='flex items-center justify-center gap-8 mt-2'>
        <Link
          href='https://twitter.com/etherlink'
          target='_blank'
          className='text-grey-100 hover:text-white transition-colors'
        >
          <X size={42} />
        </Link>
        <Link
          href='https://discord.gg/etherlink'
          target='_blank'
          className='text-grey-100 hover:text-white transition-colors'
        >
          <Discord size={42} />
        </Link>
      </div>
    </div>
  )
}

const MainNavItem = ({
  item,
  handleClose,
  onNavigate
}: {
  item: NavItem
  handleClose: () => void
  onNavigate: (items: NavItem[], title: string) => void
}) => {
  if (!item.dropdown) {
    return (
      <Link
        href={item.link || '#'}
        className='flex items-center justify-between px-6 py-3 text-grey-100 text-sm font-bold transition-colors hover:text-white'
        onClick={handleClose}
        target={item.link?.startsWith('http') ? '_blank' : undefined}
      >
        <span>{item.name}</span>
        {item.link?.startsWith('http') && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-4 w-4 ml-2'
          >
            <path d='M7 17 17 7' />
            <path d='M7 7h10v10' />
          </svg>
        )}
      </Link>
    )
  }

  return (
    <button
      className='flex items-center justify-between w-full px-6 py-3 text-grey-100 text-sm font-bold hover:text-white'
      onClick={() => item.items && onNavigate(item.items, item.name || '')}
    >
      <span>{item.name}</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4'
      >
        <path d='M9 18l6-6-6-6' />
      </svg>
    </button>
  )
}

export const MobileNavbar = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  const [currentMenu, setCurrentMenu] = useState<{
    items: NavItem[]
    title: string
  } | null>(null)
  const [animationState, setAnimationState] = useState<'idle' | 'fading'>(
    'idle'
  )

  // Disable body scroll
  const toggleBodyScroll = useCallback((disable: boolean) => {
    document.documentElement.style.overflow = disable ? 'hidden' : 'auto'
  }, [])

  useEffect(() => {
    toggleBodyScroll(isOpen)
    return () => toggleBodyScroll(false)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setCurrentMenu(null)
    }
  }, [isOpen])

  const checkViewport = useCallback(() => {
    if (window.innerWidth >= 1024 && isOpen) {
      handleClose()
    }
  }, [isOpen, handleClose])

  useEffect(() => {
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [checkViewport])

  const handleNavigate = (items: NavItem[], title: string) => {
    setAnimationState('fading') // Start fade-out animation
    setTimeout(() => {
      setCurrentMenu({ items, title })
      setAnimationState('idle') // Start fade-in animation
    }, 250) // Match the fadeOut animation duration
  }

  const handleBack = () => {
    setAnimationState('fading') // Start fade-out animation
    setTimeout(() => {
      setCurrentMenu(null)
      setAnimationState('idle') // Start fade-in animation
    }, 250) // Match the fadeOut animation duration
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-30 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />

      <div
        className={`fixed left-0 right-0 bottom-0 z-40 transform transition-transform duration-500 ease ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className='bg-grey-900 rounded-t-3xl shadow-xl border border-grey-600'>
          <div className='flex justify-center items-center pt-2'>
            <div className='bg-grey-500 rounded-3xl w-[39px] h-[1px]' />
          </div>

          <div>
            {!currentMenu ? (
              <div
                className={` ${
                  animationState === 'fading'
                    ? 'animate-fadeOut'
                    : 'animate-fadeIn'
                }`}
              >
                <button
                  onClick={handleClose}
                  className='absolute right-6 top-6 text-grey-100 hover:text-white'
                >
                  <img src='/img/nav/close.svg' alt='close button' />
                </button>

                <div className='flex flex-col pt-8'>
                  <MainNavItem
                    item={{ name: 'Home', link: '/' }}
                    handleClose={handleClose}
                    onNavigate={(items, title) => handleNavigate(items, title)}
                  />
                  {NAVBAR_ITEMS.map((item, index) => (
                    <MainNavItem
                      key={index}
                      item={item}
                      handleClose={handleClose}
                      onNavigate={(items, title) =>
                        handleNavigate(items, title)
                      }
                    />
                  ))}
                </div>

                <div className='h-[1px] bg-grey-500 w-[80%] mb-6 mt-8 mx-auto' />
                <div className='px-4 mb-6'>
                  <HomeCta />
                </div>

                <div className='flex items-center justify-center gap-8 pb-8'>
                  <Link
                    href='https://twitter.com/etherlink'
                    target='_blank'
                    className='text-grey-100 hover:text-white transition-colors'
                  >
                    <X size={42} />
                  </Link>
                  <Link
                    href='https://discord.gg/etherlink'
                    target='_blank'
                    className='text-grey-100 hover:text-white transition-colors'
                  >
                    <Discord size={42} />
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className={` ${
                  animationState === 'fading'
                    ? 'animate-fadeOut'
                    : 'animate-fadeIn'
                }`}
              >
                <div className='relative flex items-center justify-center py-2.5 mx-1'>
                  <button
                    onClick={handleBack}
                    className='absolute left-6 text-grey-100 hover:text-white'
                  >
                    <img src='/img/nav/FiArrowLeft.svg' alt='back button' />
                  </button>
                  <p className='text-grey-100 font-bold'>{currentMenu.title}</p>
                  <button
                    onClick={handleClose}
                    className='absolute right-6 text-grey-100 hover:text-white'
                  >
                    <img src='/img/nav/close.svg' alt='close button' />
                  </button>
                </div>

                <div className='mt-4 flex flex-col px-2'>
                  {currentMenu.items.map((item, index) => (
                    <SubNavItem
                      key={index}
                      item={item}
                      handleClose={handleClose}
                    />
                  ))}
                </div>

                <div className='flex items-center justify-center gap-8 mt-2 pb-8'>
                  <Link
                    href='https://twitter.com/etherlink'
                    target='_blank'
                    className='text-grey-100 hover:text-white transition-colors'
                  >
                    <X size={42} />
                  </Link>
                  <Link
                    href='https://discord.gg/etherlink'
                    target='_blank'
                    className='text-grey-100 hover:text-white transition-colors'
                  >
                    <Discord size={42} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
