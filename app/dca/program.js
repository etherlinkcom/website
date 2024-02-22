"use client"

import Container from "../components/container";

export default function Program() {
  return (
    <>
      <Container className="flex flex-col justify-between sm:flex-row w-full sm:w-3/4 -mb-12">
        <div className="">
          <h1 className="text-3xl font-semibold">Our Program</h1>
          <h2 className="text-xl mt-6 mb-6">2-week in-person onboarding followed by a 4-week fully remote program for global participants.</h2>

          <div className="grid grid-rows-3 grid-cols-3 gap-x-24 gap-y-8 mt-12">
            <div className="row-span-1 col-span-1">
              <p className="text-gray-500 font-semibold text-xl">Week 1-2</p>
              <p>Singapore</p>
            </div>
            <div className="row-span-1 col-span-1">
              <p className="font-semibold text-xl mb-2">Meet the mentors, cohort, & local ecosystem</p>
              <p>Begin collaborating intensively your mentors covering each aspect of your project, in addition to meeting with other cohort members and networking with the Web3 VC and builder community in Singapore.</p>
            </div>
            <div className="row-span-1 col-span-1">
              <p className="font-semibold text-xl mb-2">Validate your idea & start budgeting</p>
              <p>Call experts in the field, link with external stakeholders and run customer surveys. The goal is to make sure you are on to something that appeals to potential customers and can scale.</p>
            </div>
            <div className="row-span-1 col-span-1">
              <p className="text-gray-500 font-semibold text-xl">Week 3-6</p>
              <p>Remote</p>
            </div>
            <div className="row-span-1 col-span-1">
              <p className="font-semibold text-xl mb-2">Mentorship & lectures</p>
              <p>Learn how to build in crypto and grow your product. Start attending weekly check-ins and live lectures.</p>
            </div>

            <div className="row-span-1 col-span-1">
              <p className="font-semibold text-xl mb-2">Early MVP work</p>
              <p>Get started on designing the user journey and workflows for both the UI and the backend of your application or service.</p>
            </div>
            <div className="row-span-1 col-span-1">
              <p className="text-gray-500 font-semibold text-xl">End of week 6</p>
              <p>Investor Committee</p>
            </div>
            <div className="row-span-1 col-span-2 text-xl font-semibold">Present your product to leading VCs & experts for investment.</div>
          </div>
        </div>
      </Container >
    </>
  )
}

