// components/Faucet.js
import React from 'react';

const Faucet = () => (
  <div>
    <h1>Faucet Component</h1>
    <button>Connect Wallet</button> 
  </div>
);

export default Faucet;

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