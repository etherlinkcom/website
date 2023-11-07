import React from "react";
import Image from "next/image";
import Container from "../shared/container";

import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";


import bgs1 from "../../public/img/bgs1.png";
import bgs2 from "../../public/img/bgs2.png";

function IncubatorInfo(props) {
  const { data } = props;
  return (
    <>
      <Container className={`flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ${props.noImage ? "justify-center items-center" : ""}`}>
        {!props.noImage && (
          <div
            className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
            <div>
              <Image
                src={data.image}
                width="521"
                height="auto"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            </div>
          </div>
        )}

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
            }`}>
          <div className="xl:ml-24">
            <div className="flex flex-col w-full mt-4 text-center xl:text-left">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>
              <p className="max-w-2xl py-4 text-xl text-left max-lg:text-center text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400 lg:mr-24">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}


const benefitOne = {
  title: "What is the goal of the programme?",
  desc: "Finding product market fit is a difficult task. It requires extensive research and expertise in the field. The goal of the programme is to assist entrepreneurs find their product market fit and assist them in their fundraising efforts.",
  image: bgs1,
  bullets: [
    {
      title: "Who can join?",
      desc: "The DeFi incubator programme is available to hungry startups with a passion for innovating in the DeFi space. There is a list of DeFi ideas here, which will likely have product market fit and hence be prioritised during the selection process. Having said so, we will consider interesting projects that do meet this criteria as long as it is truly innovative.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "When can I apply?",
      desc: "Applications for the cohort will close on 10 December 2023. The programme will start on the 15th of January 2024 and ends on the 12th of February 2024.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "How does selection work?",
      desc: "Your proposal will be assessed by a panel of industry leaders and spaces will only be awarded to the most promising ventures and entrepreneurial individuals. We expect applications to be responded to within a week. Successful applicants will then move into several virtual discussions before a final decision is made.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What are the benefits of joining the DeFi Incubator?",
  desc: "",
  image: bgs2,
  bullets: [
    {
      title: "Immerse yourself in the full entrepreneur stack",
      desc: "Workshops ranging from technical, research, legal and fundraising.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Pick the brain of Industry Experts",
      desc: "Access to industry leading advisors for your project and for fundraising.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Dedicated 1-on-1 support",
      desc: "A dedicated mentor to assist you with your needs, as well as development and design support.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "All expenses paid to Singapore",
      desc: "Travel, accomodation and visa support",
      icon: <ChevronDoubleRightIcon />,
    },
    // {
    //   title: "Technical and Design Support",
    //   desc: "Development and design teams will also be available based on the needs of the startup.",
    //   icon: <ChevronDoubleRightIcon />,
    // },
    // {
    //   title: "Get Connected",
    //   desc: "Networking opportunities with investors and venture capitalists (VCs)",
    //   icon: <ChevronDoubleRightIcon />,
    // },
    {
      title: "Significant Financial Upside",
      desc: "Estimated benefits at $120,000 per startup, which you’ll receive without an exchange of tokens/equity.",
      icon: <ChevronDoubleRightIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, IncubatorInfo };