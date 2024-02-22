import React from "react";
import Container from "../components/container";
import Image from "next/image";

export default function Features() {
  return (
    <Container className="w-3/4">
      <div className="mr-12 mb-12">
        <h1 className="text-3xl font-semibold mb-6">DCA is a DeFi-focused accelerator program aiming to support startups (Builders/Developers) building on Etherlink.</h1>
        <h1 className="text-3xl font-semibold">The DCA begins with a 2-week in-person bootcamp in Singapore. The remaining 4 weeks are completed remotely.</h1>
      </div>

      <div className="grid gap-10 grid-rows-2 grid-cols-2 -mb-4">
        <div className="lg:col-span-2 xl:col-auto">
          <FeatureBox
            title="Mentorship & Guidance"
            bodyText="Targeted support from the Core DeFi team of the Tezos ecosystem and experienced mentors in the space. We will help you validate ideas, focus your time & resources, complement your team and eventually raise money from our network of VC partners."
          />
        </div>
        <FeatureBox
          title="$200k Funding"
          bodyText="Receive a potential investment of $200k designed to support you while you raise your seed round."
        />
        <FeatureBox
          title="Expert Sessions"
          bodyText="DeFi specific working sessions from UI/UX, Product Development, Core Engineering, Liquidity, Security & Legal experts of their respective fields."
        />
        <FeatureBox
          title="Network Turbocharged"
          bodyText="Mulitple in-person networking opportunities will be hosted for the benefit of the cohort, including an evening together with leading Asia-based Web3 investors, and meetups with the Web3 community in Singapore."
        />
      </div>

      <div className="mt-20">
        <h1 className="text-3xl font-semibold">Who is DCA for?</h1>
        <h2 className="text-xl mt-6">The program is open to all early-stage projects but we believe we can add the most value to founders at the Idea or Ideation stage!</h2>

        <div className="flex items-center justify-center w-full mt-10">
          <Image
            src="/img/dca/timeline.png"
            width={1300}
            height={617}
            alt="DCA Timeline"
            loading="eager"
          />
        </div>

        <div className="mt-5">
          <p className="text-2xl mt-10">
            Through the DCA we want to bring to the community on-chain projects with a financial angle.
            This might include but is not limited to the following sectors.
          </p>
        <ul className="list-disc pl-5 mt-5 text-2xl">
          <li>User-Friendly Web 2.5 DeFi Platforms / Crypto Neobanks</li>
          <li>Digital Asset Management Platform / Automated Strategy Vaults</li>
          <li>Sports Betting</li>
          <li>Real World Assets (RWA)</li>
          <li>Innovative Trading Marketplaces</li>
        </ul>
        </div>
      </div>
    </Container>
  );
}

const FeatureBox = ({ title, bodyText }) => {
  return (
    <div className="flex flex-col  border-2 px-10 py-10 rounded-2xl">
      <h2 className="text-2xl leading-normal text-left mb-2">
        {title}
      </h2>
      <p className="text-l leading-normal text-left">
        {bodyText}
      </p>
    </div>
  );
};
