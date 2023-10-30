import {
  ConnectWallet,
  useAddress,
  useConnectionStatus
} from "@thirdweb-dev/react";


// Thirdweb Connect Wallet Theme
import { lightTheme } from "@thirdweb-dev/react";
const customTheme = lightTheme({
  colors: {
    primaryText: 'black',
    primaryButtonBg: '#b6feda',
    primaryButtonHoverBg: 'green',
    primaryButtonText: 'black',
    secondaryButtonBg: '#b6feda',
  },
});

import { useEffect, useState } from "react";
import Image from "next/image"
import ReCAPTCHA from "react-google-recaptcha";

const Faucet = () => {

  const [captchaCompleted, setCaptchaCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [tokensClaimed, setTokensClaimed] = useState(false)
  const [txHash, setTxHash] = useState("")

  useEffect(() => {
    if (txHash) {
      setIsLoading(false);
    }
  }, [txHash]);

  function onCaptchaComplete() {
    console.log("In Captcha complete, completing innit...")
    setCaptchaCompleted(true)
  }

  function parseReturnData(data) {
    console.log(data.body.receipt.transactionHash);
    setTxHash(data.body.receipt.transactionHash)
  }

  const callFaucet = async () => {
    const body = JSON.stringify({ walletAddress: address });
    setIsLoading(true);
    const response = await fetch('/api/faucet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      parseReturnData(data);
      setTokensClaimed(true);
    } else {
      console.error('Error:', response.status);
    }
  }

  const address = useAddress();
  const walletStatus = useConnectionStatus();
  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : address;

  return (
    <div className="flex flex-col items-center">
      <ConnectWallet
        switchToActiveChain={true}
        theme={customTheme}
        modalSize={"wide"}
        className="hover:bg-shaderGreen"
        btnTitle="Add Etherlink To Metamask"
      />
      <div className="flex justify-center w-full">
        {walletStatus === "connected" &&
          <ReCAPTCHA
            sitekey="6Lcbu-AoAAAAAOPS85LI3sqIvAwErDKdtZJ8d1Xh"
            onChange={onCaptchaComplete}
            className="mt-10 mb-10"
          />
        }
      </div>
      {walletStatus === "connected" && captchaCompleted == true ?
        <button
          onClick={txHash ? () => window.open(`https://explorer.ghostnet-evm.tzalpha.net/tx/${txHash}`, '_blank') : callFaucet}
          disabled={isLoading}
          className={`flex flex-row items-center justify-center inline-block py-3 ml-4 text-lg font-medium text-center text-black border-solid border-2 border-black rounded-md px-7 lg:px-6 lg:py-4 hover:bg-borderGreen hover:border-borderGreen hover:text-black ${isLoading ? 'opacity-50 hover:bg-white hover:border-black cursor: not-allowed' : ''}`}
        >
          {isLoading ? 'Loading...' : txHash ?
            <>
              <Image
                src="/img/etherlinkLogo.png"
                alt="N"
                width="32"
                height="32"
                className="w-8 mr-2"
              />
              {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
            </> :
            `Send 1 XTZ to ${shortAddress}`}
        </button> : ""
      }
    </div>
  );
}

export default Faucet;



