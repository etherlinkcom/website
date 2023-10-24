import React from "react";
import Container from "./container";

const Features = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-borderGreen mb-4 text-center">
              MEV Protection
            </h2>
            <p className="text-2xl leading-normal text-center">
              Etherlink's Distributed Sequencer ensures fair ordering of transactions for all users <span className="text-borderGreen">out-of-the-box.</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-borderGreen text-center">
              Low Latency
            </h2>
            <p className="text-2xl leading-normal text-center">
            <span className="text-borderGreen">~500ms</span> target block time. Transaction Batches are posted every 2 minutes to L1.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <h2 className="text-2xl leading-normal text-borderGreen text-center">
              Security
            </h2>
            <p className="text-2xl leading-normal text-center">
              Tezos Smart Rollups are  <span className="text-borderGreen">enshrined</span>, meaning that Tezos validators are the only point of failure. 
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Features;