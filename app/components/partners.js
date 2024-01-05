import React from "react";
import Container from "./container";
import Image from "next/image";

const BigTechLogoImg =
    <Image
        src="/img/partners/tezosDummyLogo.png"
        width="110"
        height="33"
        className={"object-cover"}
        loading="eager"
    />

export default function Partners() {
    return (
        <Container>
            <div className="flex flex-col justify-center">
                <div className="text-xl text-center text-gray-700 dark:text-white">
                    Trusted by <span className="text-indigo-600">2000+</span>{" "}
                    customers worldwide
                </div>

                <div className="flex flex-wrap justify-center mt-10 md:justify-center">
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BigTechLogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BigTechLogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BigTechLogoImg}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-center">
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BigTechLogoImg}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-400">
                        {BigTechLogoImg}
                    </div>
                </div>
            </div>
        </Container>
    );
}
