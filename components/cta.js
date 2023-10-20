import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-borderGreen px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to learn more about Etherlink?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Go ahead and read the docs. You know you want to.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://docs.etherlink.com"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-black bg-slate-200 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-etherlinkGreen">
            Read the Docs
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;