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
                  <span className="flex items-center space-x-1 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo_3_cleaned.png"
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

          <Link href="https://docs.etherlink.com" className="px-4 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
