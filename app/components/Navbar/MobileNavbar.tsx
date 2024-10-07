'use client'
import React, { useEffect, useState } from 'react'
import { NAVBAR_ITEMS, Item } from './fixture'
import Image from 'next/image'
import Link from 'next/link'
import { X, Discord } from '../icons'
import { Drawer, CustomFlowbiteTheme } from 'flowbite-react'
import { isExternalLink } from '.'
import { EtherlinkLogo } from '../EtherlinkLogo'

const customDrawerTheme: CustomFlowbiteTheme['drawer'] = {
  root: {
    base: 'fixed z-40 overflow-y-auto bg-white p-4 transition-transform duration-300 pt-8 bg-darkBlack',
    backdrop: '',
    edge: 'bottom-16',
    position: {
      right: {
        on: 'right-0 top-0 h-screen w-full transform-none',
        off: 'right-0 top-0 h-screen w-80 translate-x-full'
      }
    }
  },
  header: {
    inner: {
      closeButton:
        'absolute end-6 top-9 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-white hover:bg-darkBlack',
      closeIcon: 'h-6 w-6'
    }
  },
  items: {
    base: ''
  }
}
export const MobileNavbar = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) handleClose()
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      theme={customDrawerTheme}
      position='right'
    >
      <Drawer.Header titleIcon={() => <EtherlinkLogo />} />
      <div className='flex flex-col w-full gap-4'>
        {NAVBAR_ITEMS.map((item, index) => {
          if (!!item.dropdown && !!item.items) {
            return (
              <MobileDropdown
                title={item.title}
                items={item.items}
                handleClose={handleClose}
                key={index}
              />
            )
          }
          return (
            <Link
              href={item.link as string}
              className='w-full px-8 py-2 -ml-4 rounded-md text-gray-300 text-lg hover:text-white transition-all duration-500'
              target={isExternalLink(item.link as string)}
              rel='noopener noreferrer'
              key={index}
              onClick={handleClose}
            >
              {item.title}
            </Link>
          )
        })}
        <div className='flex flex-col gap-6 mt-4 px-2 text-gray-300 hover:text-white text-base transition-all duration-500'>
          <Link
            href='https://twitter.com/etherlink'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <X size={40} />
            <p className='text-base'>@etherlink</p>
          </Link>
          <Link
            href='https://discord.gg/etherlink'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1'
          >
            <Discord size={40} />
            <p className='text-base'>Discord</p>
          </Link>
        </div>
      </div>
    </Drawer>
  )
}

const MobileDropdown = ({
  title,
  items,
  handleClose
}: {
  title: string
  items: Item[]
  handleClose: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen ? 'bg-midBlack' : ''} px-4 py-4 rounded-lg hover:cursor-pointer transition-all duration-500`}
    >
      <div className='flex items-center justify-between'>
        <h1 className='text-gray-300 text-lg hover:text-white transition-all duration-500'>
          {title}
        </h1>
        {isOpen ? (
          <Image
            width={22}
            height={22}
            src='/chevron-up.svg'
            alt='chevron-down'
          />
        ) : (
          <Image
            width={22}
            height={22}
            src='/chevron-down.svg'
            alt='chevron-down'
          />
        )}
      </div>
      <div
        className={`${isOpen ? '' : 'hidden'} flex flex-col gap-4 mt-6`}
        onClick={handleClose}
      >
        {items.map((data, index) => (
          <Link href={data.link} target={isExternalLink(data.link)} key={index}>
            <p className='text-base text-gray-300 hover:text-white transition-all duration-500'>
              {data.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
