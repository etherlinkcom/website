"use client"

import { useState, useContext } from "react";
import { FaucetContext } from "../contexts/FaucetContext";

import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const { showFaucet, setShowFaucet } = useContext(FaucetContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  const navigation = [
    { name: "Faucet", onClick: () => { setShowFaucet(!showFaucet); } },
    { name: "Explorer", link: "https://explorer.ghostnet-evm.tzalpha.net/" },
    { name: "Bridge", link: "https://bridge.etherlink.com/" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-1 text-3xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/etherlinkLogo.png"
                        alt="N"
                        width={128}
                        height={128}
                        className="w-8 mr-2"
                      />
                    </span>
                    <span >Etherlink</span>
                  </span>
                </Link>

                {/* mobile menu */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      item.name === "Faucet" ?
                        <a key={index} onClick={item.onClick} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800">
                          {item.name}
                        </a>
                        :
                        <Link key={index} href={item.link} onClick={item.onClick} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800" target="_blank" rel="noopener noreferrer">
                          {item.name}
                        </Link>
                    ))}
                    <Link href="https://x.com/etherlinkcom" className="w-full px-6 py-2 mt-3 text-center text-black bg-shaderGreen rounded-md lg:ml-5">
                      Join the Community
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center justify-between">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              menu.name === "Faucet" ?
                <li className="mr-3 nav__item" key={index}>
                  <a onClick={menu.onClick} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none hover:bg-etherlinkGreen dark:hover:text-black">
                    {menu.name}
                  </a>
                </li>
                :
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={menu.link}
                    onClick={menu.onClick}
                    className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md text-gray-200 hover:bg-etherlinkGreen hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer">
                    {menu.name}
                  </Link>
                </li>
            ))}
          </ul>
          <div className="relative mr-3 space-x-4 nav__item">
            <button onClick={() => { setModalOpen(!modalOpen); setButtonColor(!buttonColor) }} className={`flex items-center px-4 py-3 text-black hover:bg-borderGreen ${buttonColor ? 'bg-borderGreen' : 'bg-white'} rounded-md md:ml-5`}>
              <span>Join the Community</span>
              <svg className={`transition-transform duration-200 ml-1 w-4 h-4 ${modalOpen ? 'transform rotate-180' : 'transform rotate-270'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {modalOpen && (
              <div className="absolute top-full mt-2 w-11/12 bg-white rounded-lg p-4 z-50 transform translate-x-1">
                <div className="flex flex-row items-center justify-center h-full space-x-4 -mb-1">
                  <Link href="https://x.com/etherlinkcom" target="_blank" rel="noopener noreferrer">
                    <Twitter size={32} />
                  </Link>
                  <Link href="https://discord.gg/etherlink" target="_blank" rel="noopener noreferrer">
                    <Discord size={40} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div >
  );
}


const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="black"
    className="hover:fill-borderGreen">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);


const Discord = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="black"
    className="hover:fill-borderGreen">
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);