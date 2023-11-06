"use client"

import dynamic from "next/dynamic";
import Container from "./shared/container";

import { useContext } from "react";
import { FaucetContext } from "./contexts/FaucetContext";

import HeroImage from "./hero/image";
import HeroContent from "./hero/content";
const Faucet = dynamic(() => import('../components/faucet'));

export default function Main() {
  const { showFaucet } = useContext(FaucetContext);

  return (
    <>
      <Container className="flex flex-wrap">
        <HeroImage />
        {showFaucet ? <Faucet /> : <HeroContent />}
      </Container>
    </>
  );
}
