"use client"

import Container from "../components/container";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <Container className="flex flex-col justify-between sm:flex-row w-full sm:w-3/4">
        <div className="flex items-center justify-center">
          <Image
            src="/img/dca/hero.png"
            width="600"
            height="617"
            className={"object-cover"}
            alt="DCA Hero Image"
            loading="eager"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 max-w-2xl text-center">
          <h2 className="text-md text-slate-400 mb-2">
            Applications open until the 31st of March 2024
          </h2>
          <h1 className="text-4xl font-bold mb-2">
            DeFi Catalyst <span className="text-darkGreen">Accelerator</span>
          </h1>
          <h2 className="text-xl text-slate-400 font-semibold">
            Exceptional founders driving REAL DeFi innovation.
          </h2>
          <div className="flex flex-row justify-between w-3/4 space-x-4 mt-6">
            <a
              href="https://docs.etherlink.com"
              target="_blank"
              rel="noopener"
              className="inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black mt-3">
              Apply Now
            </a>
            <a
              href="https://x.com/intent/user?screen_name=etherlinkcom"
              target="_blank"
              rel="noopener"
              className="inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black mt-3">
              Schedule
            </a>
          </div>
        </div>
      </Container >
    </>
  )
}

