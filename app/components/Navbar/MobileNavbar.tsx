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
        className='flex items-center justify-between px-6 py-2.5 text-[#BCBCBC] text-sm font-bold transition-colors hover:text-white'
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
          ${isOpen ? 'text-newGreen bg-[#1B1B1B] rounded-t-xl' : 'text-[#BCBCBC] hover:text-white'}`}
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
        className={`space-y-1 bg-[#151515] overflow-hidden transition-all duration-200 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        {item.items?.map((subItem, index) => (
          <Link
            key={index}
            href={subItem.link || '#'}
            className='block px-8 py-2 text-[#BCBCBC] text-sm font-bold transition-colors hover:text-white'
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
      className={`absolute inset-0 bg-neutral-950 transition-transform duration-300 ease-in-out ${
        isActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {title && (
        <div className='relative flex items-center justify-center py-2.5 mx-1'>
          <button
            onClick={goBack}
            className='absolute left-6 text-[#BCBCBC] hover:text-white'
          >
            <img src='/img/nav/FiArrowLeft.svg' alt='back button' />
          </button>
          <p className='text-[#BCBCBC] font-bold'>{title}</p>
          <button
            onClick={handleClose}
            className='absolute right-6 text-[#BCBCBC] hover:text-white'
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
          className='text-[#BCBCBC] hover:text-white transition-colors'
        >
          <X size={42} />
        </Link>
        <Link
          href='https://discord.gg/etherlink'
          target='_blank'
          className='text-[#BCBCBC] hover:text-white transition-colors'
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
        className='flex items-center justify-between px-6 py-3 text-[#BCBCBC] text-sm font-bold transition-colors hover:text-white'
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
      className='flex items-center justify-between w-full px-6 py-3 text-[#BCBCBC] text-sm font-bold hover:text-white'
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

  // To disable scroll when mobile navbar opened
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

  useEffect(() => {
    const checkViewport = () => {
      if (window.innerWidth >= 1024) {
        handleClose()
      }
    }

    window.addEventListener('resize', checkViewport)
    checkViewport()

    return () => window.removeEventListener('resize', checkViewport)
  }, [handleClose])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-30 
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />

      <div
        className={`fixed bottom-0 left-0 right-0 max-h-[80vh] bg-neutral-950 rounded-t-3xl shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {!currentMenu && (
          <button
            onClick={handleClose}
            className='absolute right-6 top-6 text-[#BCBCBC] hover:text-white'
          >
            <img src='/img/nav/close.svg' alt='close button' />
          </button>
        )}

        <div className={`${currentMenu ? 'mt-3' : 'mt-14'} relative`}>
          <div
            className={`transition-transform duration-300 ease-in-out ${
              currentMenu ? 'translate-x-[-100%]' : 'translate-x-0'
            }`}
          >
            <div className='flex flex-col'>
              {NAVBAR_ITEMS.map((item, index) => (
                <MainNavItem
                  key={index}
                  item={item}
                  handleClose={handleClose}
                  onNavigate={(items, title) =>
                    setCurrentMenu({ items, title })
                  }
                />
              ))}
            </div>
            <div className='h-[1px] bg-[#262626] w-[80%] mb-6 mt-8 mx-auto' />
            <div className='px-4 mb-6'>
              <HomeCta />
            </div>

            <div className='flex items-center justify-center gap-8 pb-8'>
              <Link
                href='https://twitter.com/etherlink'
                target='_blank'
                className='text-[#BCBCBC] hover:text-white transition-colors'
              >
                <X size={42} />
              </Link>
              <Link
                href='https://discord.gg/etherlink'
                target='_blank'
                className='text-[#BCBCBC] hover:text-white transition-colors'
              >
                <Discord size={42} />
              </Link>
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
              currentMenu ? 'translate-x-0' : 'translate-x-[100%]'
            }`}
          >
            {currentMenu && (
              <NavLevel
                items={currentMenu.items}
                handleClose={handleClose}
                goBack={() => setCurrentMenu(null)}
                title={currentMenu.title}
                isActive={!!currentMenu}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
