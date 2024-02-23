"use client"

export default function Program() {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h1 className="text-3xl font-semibold">Our Program</h1>
        <h2 className="text-xl mt-6 mb-6">2-week in-person onboarding followed by a 4-week fully remote program for global participants.</h2>

        <div className="grid sm:grid-cols-3 sm:grid-rows-3 mt-12 grid-flow-row-dense">
          <div className="">
            <p className="text-gray-500 font-semibold text-xl">Week 1-2</p>
            <p>Singapore</p>
          </div>
          <div className="">
            <p className="font-semibold text-xl mb-2">Meet the mentors, cohort, & local ecosystem</p>
            <p>Begin collaborating intensively your mentors covering each aspect of your project, in addition to meeting with other cohort members and networking with the Web3 VC and builder community in Singapore.</p>
          </div>
          <div className="">
            <p className="font-semibold text-xl mb-2">Validate your idea & start budgeting</p>
            <p>Call experts in the field, link with external stakeholders and run customer surveys. The goal is to make sure you are on to something that appeals to potential customers and can scale.</p>
          </div>
          <div className="">
            <p className="text-gray-500 font-semibold text-xl">Week 3-6</p>
            <p>Remote</p>
          </div>
          <div className="">
            <p className="font-semibold text-xl mb-2">Mentorship & lectures</p>
            <p>Learn how to build in crypto and grow your product. Start attending weekly check-ins and live lectures.</p>
          </div>

          <div className="">
            <p className="font-semibold text-xl mb-2">Early MVP work</p>
            <p>Get started on designing the user journey and workflows for both the UI and the backend of your application or service.</p>
          </div>
          <div className="">
            <p className="text-gray-500 font-semibold text-xl">End of week 6</p>
            <p>Investor Committee</p>
          </div>
          <div className="row-span-1 col-span-2 text-xl font-semibold">Present your product to leading VCs & experts for investment.</div>
        </div>
      </div>
    </>
  )
}

