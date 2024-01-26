"use client"

import Container from "../components/container";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="flex items-center justify-center w-full lg:w-1/2">
      <div className="max-w-2xl text-center lg:text-left">
        <div className="flex flex-col space-y-2 mb-10">
          <h1 className={"text-5xl font-bold mb-10"}>
            DeFi Catalyst <span className="text-darkGreen">Accelerator</span>
          </h1>
          <div className="text-xl leading-normal text-left lg:text-xl xl:text-2xl text-gray-300">
            The DeFi Catalyst Accelerator, located in Singapore 🇸🇬, is a 6-week program starting from April 15th.
            <p className="mt-4"> The ideal applicants are: </p>
            <ul className="list-disc list-inside mt-3 mb-3 text-xl">
              <li className="mb-1.5">Solidity engineers with a <span className="text-darkGreen">deep understanding</span> of DeFi</li>
              <li className="mb-1.5">Individuals with a <span className="text-darkGreen">passion</span> to innovate in the DeFi space</li>
              <li>Those who have the <span className="text-darkGreen">ambition</span> to build something new and impactful</li>
            </ul>
            <div className="-mb-4">Join us and be part of the next generation of DeFi innovators.</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
          <a
            href="https://docs.etherlink.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
            Apply 
          </a>
          <a
            href="https://bridge.etherlink.com/"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-darkGreen hover:text-black">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  )
}

const ImageWrapper = ({ children }) => {
  return (
    <div className="image-blur">
      {children}
    </div>
  );
};


export default function MainDCA() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <ImageWrapper>
            <Image
              src="/img/DCA/hero.png"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Etherlink Pastel Green Blockchain Spiral"
              loading="eager"
            />
          </ImageWrapper>
        </div>
        <MainContent />
      </Container>
    </>
  );
}

