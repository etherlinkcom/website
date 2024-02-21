"use client"

import Container from "./container";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <div className="flex items-center justify-center w-full lg:w-1/2">
      <div className="max-w-2xl text-center lg:text-left">
        <div className="flex flex-col space-y-2 mb-12">
          <h1 className={"text-5xl font-bold mb-10"}>
            Build Web3 on <span className="text-darkGreen">Etherlink</span>
          </h1>
          <div className="text-xl leading-normal text-left lg:text-xl xl:text-2xl text-gray-300">
            An EVM-compatible optimistic rollup with :
            <ul className="list-disc list-inside mt-3 mb-3">
              <li className="mb-1.5"><span className="text-darkGreen">fair </span> transaction ordering</li>
              <li className="mb-1.5"><span className="text-darkGreen">fast </span>transaction execution</li>
              <li><span className="text-darkGreen">security</span> as a priority</li>
            </ul>
            <div> powered by Tezos <Link className="text-darkGreen hover:text-lightGreen cursor-pointer" href="https://tezos.com/developers/smart-rollups/" target="_blank" rel="noopener noreferrer">Smart Rollup</Link> technology.</div>
          </div>
        </div>

        <div className="flex flex-col justify-between sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
          <a
            href="https://docs.etherlink.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
            Start Building
          </a>
          <a
            href="https://x.com/intent/user?screen_name=etherlinkcom"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 w-full sm:w-1/2 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
            Follow Etherlink 
          </a>
        </div>
      </div>
    </div>
  )
}


export default function Main() {

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src="/img/home/main.png"
            width="616"
            height="617"
            className={"object-cover"}
            alt="Etherlink Pastel Green Blockchain Spiral"
            loading="eager"
          />
        </div>
        <MainContent />
      </Container>
    </>
  );
}

