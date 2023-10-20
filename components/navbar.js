import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {

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
                        src="/img/etherlink_logo.png"
                        alt="N"
                        width="128"
                        height="128"
                        className="w-8 mr-2"
                      />
                    </span>
                    <span >Etherlink</span>
                  </span>
                </Link>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">

          <Link href="https://discord.gg/etherlink" className="px-4 py-3 text-black bg-white rounded-md md:ml-5 hover:bg-shaderGreen" target="_blank" rel="noopener noreferrer">
            Join the community
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
