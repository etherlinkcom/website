import Image from "next/image";
import Container from "./container";
import etherlink_hero from "../public/img/etherlink_hero.png";

// import {
//   ThirdwebProvider,
//   ConnectWallet,
//   metamaskWallet,
// } from "@thirdweb-dev/react";

// import { lightTheme } from "@thirdweb-dev/react";

// const customTheme = lightTheme({
//   colors: {
//     primaryButtonBg: 'white',
//     primaryButtonHoverBg: 'green',
//     primaryText: 'black',
//     primaryButtonText: 'white',
//     secondaryButtonBg: '#b6feda',
//     // ... etc
//   },
// });

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={etherlink_hero}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex flex-col space-y-2 mb-10">
              <h1 className="text-5xl font-bold text-gray-300 mb-10">
                Build Web3 on <span className="text-borderGreen">Etherlink</span>
              </h1>
              <div className="text-xl leading-normal text-gray-500 text-left lg:text-xl xl:text-2xl dark:text-gray-300">
                An EVM-compatible optimistic rollup with:
                <ul className="list-disc list-inside mt-3 mb-3">
                  <li className="mb-1.5"><span className="text-borderGreen">fair ordering</span> of transactions</li>
                  <li className="mb-1.5"><span className="text-borderGreen">fast execution</span> of transactions</li>
                  <li> a high level of <span className="text-borderGreen">security</span></li>
                </ul>
                <div> powered by Tezos smart rollup technology.</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row l:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center">
              <a
                  href="https://docs.etherlink.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-block py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-white rounded-md px-7 lg:px-10 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                  Start Building
                </a>
                <a
                  href="https://bridge.ghostnet-evm.tzalpha.net/"
                  target="_blank"
                  rel="noopener"
                  className="inline-block py-3 text-lg font-medium text-center text-white border-solid border-2 border-white rounded-md px-7 lg:px-6 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black">
                  Bridge to Etherlink
              </a>
              {/* <ThirdwebProvider
                activeChain={{
                  chainId: 128123, // Chain ID of the network
                  rpc: ["https://evm.ghostnet-evm.tzalpha.net/"],
                  nativeCurrency: {
                    decimals: 18,
                    name: "XTZ",
                    symbol: "XTZ",
                  },
                  shortName: "etherlink",
                  slug: "etherlink",
                  testnet: true,
                  chain: "Etherlink Ghostnet",
                  name: "Etherlink Ghostnet", 
                }}
                supportedWallets={[metamaskWallet()]}
              >
                <ConnectWallet
                  switchToActiveChain={true}
                  theme={customTheme}
                  modalSize={"wide"}
                  className="mt-10 px-10 py-6 text-xl  bg-white text-black hover:bg-shaderGreen font-medium text-center rounded-md"
                  btnTitle="Add Etherlink To Metamask"
                />
              </ThirdwebProvider> */}
              {/* <div className="flex pt-12 pl-4 space-x-8 text-2xl text-gray-400 dark:text-gray-500">
                <a
                  href="https://x.com/etherlinkcom"
                  target="_blank"
                  rel="noopener">
                  <span className="sr-only">X</span>
                  <Twitter />
                </a>
                <a
                  href="https://discord.gg/etherlink"
                  target="_blank"
                  rel="noopener">
                  <Discord />
                </a>
                <a
                  href="https://t.me/etherlinkcom"
                  target="_blank"
                  rel="noopener">
                  <span className="sr-only">Telegram</span>
                  <Telegram />
                </a>
              </div> */}
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

const Twitter = ({ size = 60 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="currentColor"
    className="hover:fill-shaderGreen">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);


const Discord = ({ size = 68 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="currentColor"
    className="hover:fill-shaderGreen">
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
  </svg>
);

const Telegram = ({ size = 68 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="currentColor"
    className="hover:fill-shaderGreen">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
  </svg>
);

const Email = ({ size = 68 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="currentColor"
    className="hover:fill-shaderGreen">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
  </svg>
);

export default Hero;