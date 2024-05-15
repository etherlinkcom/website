'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { X, Discord } from '../../public/img/icons'

interface NavigationProps {
  name: string
  link: string
}

const NavItem = ({ item }: { item: NavigationProps }) => {
  return (
    <Link
      href={item.link}
      className='inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-gray-200 hover:text-darkGreen cursor-pointer'
      target={item.link?.startsWith('http') ? '_blank' : '_self'}
      rel='noopener noreferrer'
    >
      {item.name}
    </Link>
  )
}

const MobileMenu = ({
  navigation,
  close
}: {
  navigation: NavigationProps[]
  close: () => void
}) => {
  return (
    <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
      <>
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className='w-full px-4 py-2 -ml-4 rounded-md text-gray-300'
            target={item.link?.startsWith('http') ? '_blank' : '_self'}
            rel='noopener noreferrer'
            onClick={close}
          >
            {item.name}
          </Link>
        ))}
        <div className='flex flex-col h-full items-center gap-3 mt-3'>
          <Link
            href='https://twitter.com/etherlink'
            target='_blank'
            rel='noopener noreferrer'
          >
            <X size={20} fill='white' />
          </Link>
          <Link
            href='https://discord.gg/etherlink'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Discord size={28} fill='white' />
          </Link>
        </div>
      </>
    </Disclosure.Panel>
  )
}

export default function Navbar() {
  const navigation = [
    {
      name: 'Accelerator',
      link: '/events/defi-catalyst-accelerator'
    },
    { name: 'Faucet', link: 'https://faucet.etherlink.com/' },
    { name: 'Explorer', link: 'https://explorer.etherlink.com/' },
    { name: 'Blog', link: 'https://medium.com/@etherlink' }
  ]

  return (
    <div className='relative z-50 w-full sm:-translate-y-10'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        <Disclosure>
          {({ open, close }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/' onClick={() => close()}>
                  <Image
                    src='/img/home/beta_logo.svg'
                    alt='Etherlink Beta Logo'
                    width={200}
                    height={200}
                    className='mr-2 '
                  />
                </Link>

                {/* mobile menu */}
                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto rounded-md lg:hidden text-gray-300 focus:bg-neutral-700'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <MobileMenu navigation={navigation} close={close} />
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center justify-between'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <NavItem item={menu} key={index} />
            ))}
          </ul>
          <div className='flex flex-row items-center justify-center h-full space-x-4 -mb-1 ml-10'>
            <Link
              href='https://twitter.com/etherlink'
              target='_blank'
              rel='noopener noreferrer'
            >
              <X size={28} fill='white' />
            </Link>
            <Link
              href='https://discord.gg/etherlink'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Discord size={36} fill='white' />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
