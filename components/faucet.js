import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";

import { lightTheme } from "@thirdweb-dev/react";

const customTheme = lightTheme({
  colors: {
    primaryButtonBg: 'white',
    primaryButtonHoverBg: 'green',
    primaryText: 'black',
    primaryButtonText: 'black',
    secondaryButtonBg: '#b6feda',
    // ... etc
  },
});

const Faucet = () => {
  const callServerlessFunction = async () => {
    await fetch('/api/faucet');
  }

  return (
    <div className="flex flex-col items-center">
      <ThirdwebProvider
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
        <button 
          onClick={callServerlessFunction} 
          className="mt-10 px-10 py-6 text-xl  bg-white text-black hover:bg-shaderGreen font-medium text-center rounded-md"
        >
          Call Serverless function
        </button>
      </ThirdwebProvider>
    </div>
  );
}

export default Faucet;



