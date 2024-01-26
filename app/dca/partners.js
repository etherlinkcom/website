import React from "react";
import Container from "../components/container";
import Image from "next/image";
import SectionTitle from "../components/sectionTitle";

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
        src="/logo_with_text.png"
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


export default function Partners() {
    return (
        <Container>
            <div className="flex flex-col justify-center mb-12">
                <div className="text-xl text-center text-gray-700 dark:text-white">
                    <SectionTitle
                        pretitle="From Day One"
                        title="Powered By"
                        className="text-center">
                    </SectionTitle>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:justify-center">
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
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BlockscoutLogoImg}
                    </div>
                </div>

                {/* <div className="text-xl text-center text-gray-700 dark:text-white mt-10 ml-30 mr-30">
                    {loremIpsum({ count: 10 })}
                </div> */}
                {/* <div className="mt-12 border-t-2 border-darkGreen w-4/5 mx-auto rounded opacity-60"></div> */}
            </div>
        </Container>
    );
}
