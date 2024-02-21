import React from "react";
import { loremIpsum } from "lorem-ipsum";
import Container from "./container";
import Image from "next/image";
import SectionTitle from "./sectionTitle";

const BlockscoutLogoImg =
    <Image
        src="/img/partners/blockscout.png"
        width="225"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const L0LogoImg =
    <Image
        src="/img/partners/L0.png"
        width="250"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const L3LogoImg =
    <Image
        src="/img/partners/L3.png"
        width="200"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const RedstoneLogoImg =
    <Image
        src="/img/partners/RedStone.png"
        width="225"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const ThirdwebLogoImg =
    <Image
        src="/img/partners/thirdweb.png"
        width="250"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const SubsquidLogoImg =
    <Image
        src="/img/partners/subsquid.png"
        width="250"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const ZeeveLogoImg =
    <Image
        src="/img/partners/zeeve.png"
        width="200"
        height="33"
        className={"object-cover"}
        loading="eager"
    />


export default function Partners() {
    return (
        <Container>
            <div className="flex flex-col justify-center">
                <div className="text-xl text-center text-gray-700 dark:text-white">
                    <SectionTitle
                        pretitle="From Day One"
                        title="Etherlink Partners"
                        className="text-center">
                    </SectionTitle>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 md:justify-center">
                    <div className="flex  flex-col sm:flex-row items-center justify-center gap-8 w-full">
                        <div className="flex items-center text-gray-400 dark:text-gray-400 -mr-4">
                            {RedstoneLogoImg}
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-400">
                            {ThirdwebLogoImg}
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-400 -mr-2">
                            {L0LogoImg}
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-400 -mr-2">
                            {L3LogoImg}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
                        <div className="flex items-center text-gray-400 dark:text-gray-400">
                            {BlockscoutLogoImg}
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-400">
                            {SubsquidLogoImg}
                        </div>
                        <div className="flex items-center text-gray-400 dark:text-gray-400">
                            {ZeeveLogoImg}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t-2 border-darkGreen w-4/5 mx-auto rounded opacity-60"></div>
            </div>
        </Container>
    );
}
