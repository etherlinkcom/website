import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-borderGreen px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl -mt-20">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Future features of Etherlink:
          </h2>
          <div className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            <ul className="list-disc">
              <li className="ml-4 text-l">State-of-the-art upgrade process with governance</li>
              <li className="ml-4 text-l">State-of-the-art upgrade process with governance</li>
              <li className="ml-4 text-l">State-of-the-art upgrade process with governance</li>
            </ul>
          </div>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://docs.etherlink.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white border-solid border-2 border-white hover:text-black rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white">
            Read the Docs
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;