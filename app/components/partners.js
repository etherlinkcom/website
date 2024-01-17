import React from "react";
import { loremIpsum } from "lorem-ipsum";
import Container from "./container";
import Image from "next/image";

const BlockscoutLogoImg =
    <Image
        src="/img/partners/blockscout.png"
        width="220"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const L0LogoImg =
    <Image
        src="/img/partners/L0.png"
        width="350"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const L3LogoImg =
    <Image
        src="/img/partners/L3.png"
        width="225"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const RedstoneLogoImg =
    <Image
        src="/img/partners/RedStone.png"
        width="220"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

const ThirdwebLogoImg =
    <Image
        src="/img/partners/thirdweb.png"
        width="275"
        height="33"
        className={"object-cover"}
        loading="eager"
    />


export default function Partners() {
    return (
        <Container>
            <div className="flex flex-col justify-center">
                <div className="text-xl text-center text-gray-700 dark:text-white">
                    Our partners from <span className="text-darkGreen">day one</span>{" "}
                </div>

                <div className="flex flex-wrap justify-center mt-10 gap-8 md:justify-center">
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {RedstoneLogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {ThirdwebLogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400 -mr-2">
                        {L0LogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {L3LogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BlockscoutLogoImg}
                    </div>
                </div>

                {/* <div className="text-xl text-center text-gray-700 dark:text-white mt-10 ml-30 mr-30">
                    {loremIpsum({ count: 10 })}
                </div> */}
            </div>
        </Container>
    );
}
