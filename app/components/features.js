import React from "react";
import Container from "./container";

export default function Features() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 -mb-4">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-darkGreen text-center">
              Decentralized Sequencer
            </h2>
            <p className="text-2xl leading-normal text-center">
              Etherlink's <span className="text-darkGreen">state-of-the-art</span> consensus mechanism provides best-in-class censorship resistance.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-darkGreen text-center">
              Very Low Fees
            </h2>
            <p className="text-2xl leading-normal text-center">
              Etherlink has super low fees. How low? Think <span className="text-darkGreen">$0.01</span> per transaction, not $20. {' '}
            </p>
            <div className="mb-4"></div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-trueGray-800">
            <h2 className="text-2xl leading-normal text-darkGreen mb-4 text-center">
              MEV Protection
            </h2>
            <p className="text-2xl leading-normal text-center">
              Etherlink's Decentralized Sequencer ensures fair ordering of transactions for all users <span className="text-darkGreen">out-of-the-box.</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
