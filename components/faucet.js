import {
  ConnectWallet,
  useAddress
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
  // const callServerlessFunction = async () => {
  //   await fetch('/api/faucet');
  // }

  const address = useAddress();
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;


  return (
    <div className="flex flex-col items-center">
        <ConnectWallet
          switchToActiveChain={true}
          theme={customTheme}
          modalSize={"wide"}
          className="mt-10 px-10 py-6 text-xl  bg-white text-black hover:bg-shaderGreen font-medium text-center rounded-md"
          btnTitle="Add Etherlink To Metamask"
        />
        <button
          onClick={() => {
            fetch('/api/faucet', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ walletAddress: address }),
            });
          }}
          className="mt-10 px-10 py-6 text-xl  bg-white text-black hover:bg-shaderGreen font-medium text-center rounded-md"
        >
          Send 1 XTZ to {shortAddress}
        </button>
      {/* </ThirdwebProvider> */}
    </div>
  );
}

export default Faucet;



