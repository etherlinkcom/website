import Image from "next/image";
import React from "react";
import Container from "./container";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-indigo-400 mb-4">
              MEV Protected
            </h2>
            <p className="text-2xl leading-normal ">
              With a distributed sequencer from day 1, Etherlink has fair transaction ordering <Mark>out-of-the-box.</Mark>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-indigo-400">
              Transact at the speed of thought
            </h2>
            <p className="text-2xl leading-normal ">
              Etherlink has a goal block time of <Mark>~500ms</Mark>. Batches are posted every X minutes to L1.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-indigo-400">
              Best-in-class economic security
            </h2>
            <p className="text-2xl leading-normal ">
              Tezos Smart Rollups are <Mark>enshrined</Mark>, meaning that Tezos validators are the only point of failure. 
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;