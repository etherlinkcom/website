import React from "react";
import Container from "./container";

const Features = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-etherlinkGreen mb-4">
              MEV Protected
            </h2>
            <p className="text-2xl leading-normal ">
              With a distributed sequencer from day 1, Etherlink has fair transaction ordering <span className="text-etherlinkGreen">out-of-the-box.</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-etherlinkGreen">
              Transact at the speed of thought
            </h2>
            <p className="text-2xl leading-normal ">
              Etherlink has a goal block time of  <span className="text-etherlinkGreen">~500ms</span>. Batches are posted every X minutes to L1.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-etherlinkGreen">
              Best-in-class economic security
            </h2>
            <p className="text-2xl leading-normal ">
              Tezos Smart Rollups are  <span className="text-etherlinkGreen">enshrined</span>, meaning that Tezos validators are the only point of failure. 
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
      <mark className="dark:bg-trueGray-800 dark:text-etherlinkGreen">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Features;