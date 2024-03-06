'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { X, Discord } from '../../public/img/icons'

interface NavigationProps {
  name: string
  link: string
}

const NavItem = ({
  item,
  pathname
}: {
  item: NavigationProps
  pathname: string
}) => {
  // I have asked Sasha if we still need pathname prop. We can get rid of pathname prop and usePathname if we don't need it.
  return (
    <Link
      href={item.link}
      className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md ${
        item.link === '/incubator' && pathname === '/incubator'
          ? 'bg-darkGreen text-black hover:text-white'
          : 'text-gray-200 hover:text-darkGreen'
      } cursor-pointer`}
      target={
        item.link === '/incubator'
          ? '_self'
          : item.link?.startsWith('http')
          ? '_blank'
          : '_self'
      }
      rel='noopener noreferrer'
    >
      {item.name}
    </Link>
  )
}

const MobileMenu = ({ navigation }: { navigation: NavigationProps[] }) => {
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
          >
            {item.name}
          </Link>
        ))}
        <Link
          href='https://x.com/etherlinkcom'
          className='w-full px-6 py-2 mt-3 text-center text-black bg-darkGreen rounded-md lg:ml-5'
        >
          Join the Community
        </Link>
      </>
    </Disclosure.Panel>
  )
}

export default function Navbar() {
  const pathname = usePathname()

  const [modalOpen, setModalOpen] = useState(false)
  const [buttonColor, setButtonColor] = useState(false)

  const navigation = [
    // { name: "Faucet", onClick: () => { setShowFaucet(!showFaucet); } },
    {
      name: 'DeFi Catalyst Accelerator',
      link: '/events/defi-catalyst-accelerator'
    },
    { name: 'Faucet', link: 'https://faucet.etherlink.com/' },
    { name: 'Explorer', link: 'https://testnet-explorer.etherlink.com/' }
  ]

  return (
    <div className='w-full'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/'>
                  <span className='flex items-center space-x-1 text-3xl font-medium text-gray-100'>
                    <span>
                      <Image
                        src='/img/home/logo.png'
                        alt='N'
                        width={128}
                        height={128}
                        className='w-8 mr-2'
                      />
                    </span>
                    <span>Etherlink</span>
                  </span>
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
                <MobileMenu navigation={navigation} />
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center justify-between'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <NavItem item={menu} pathname={pathname} key={index} />
            ))}
          </ul>
          <div className='relative mr-3 space-x-4 nav__item'>
            <button
              onClick={() => {
                setModalOpen(!modalOpen)
                setButtonColor(!buttonColor)
              }}
              className={`flex items-center px-4 py-3 text-black hover:bg-darkGreen ${
                buttonColor ? 'bg-darkGreen' : 'bg-white'
              } rounded-md md:ml-5`}
            >
              <span>Join the Community</span>
              <svg
                className={`transition-transform duration-200 ml-1 w-4 h-4 ${
                  modalOpen ? 'transform rotate-180' : 'transform rotate-270'
                }`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {modalOpen && (
              <div className='absolute top-full mt-2 w-11/12 bg-white rounded-lg p-4 z-50 transform translate-x-1'>
                <div className='flex flex-row items-center justify-center h-full space-x-4 -mb-1'>
                  <Link
                    href='https://x.com/etherlinkcom'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <X size={32} fill='black' />
                  </Link>
                  <Link
                    href='https://discord.gg/etherlink'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Discord size={40} fill='black' />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
