import React from "react";
import Link from "next/link";
import Container from "./shared/container";

export default function Cta({ headerText, descriptionText, buttonText, buttonUrl }) {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl -mt-24 mb-4 gap-5 mx-auto text-white bg-darkGreen px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {headerText}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {descriptionText}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href={buttonUrl}
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white border-solid border-2 border-white hover:text-black rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white">
            {buttonText}
          </Link>
        </div>
      </div>
    </Container>
  );
}