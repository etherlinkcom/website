import Image from "next/image"

import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  ConnectWallet,
  lightTheme,
  useChainId,
  useAddress,
  useConnectionStatus
} from "@thirdweb-dev/react";

const customTheme = lightTheme({
  colors: {
    primaryText: 'black',
    primaryButtonBg: '#b6feda',
    primaryButtonText: 'black',
    secondaryButtonBg: '#59ad8c',
    connectedButtonBgHover: '#59ad8c',
    borderColor: '#59ad8c'
  },
});



const FaucetTable = ({ title }) => {
  const [captchaCompleted, setCaptchaCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState("")

  const address = useAddress();
  const walletStatus = useConnectionStatus();
  const chainId = useChainId();
  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : address;

  const tokens = ['XTZ', 'eUSD', 'USDT']

  useEffect(() => {
    if (txHash) {
      setIsLoading(false);
    }
  }, [txHash]);

  const TokenTable = () => {
    return (
      <table style={{border: '1px solid black', borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr>
            <th style={{padding: '10px', border: '1px solid black'}}>Token</th>
            <th style={{padding: '10px', border: '1px solid black'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td style={{padding: '10px', border: '1px solid black'}}>{token}</td>
              <td style={{padding: '10px', border: '1px solid black'}}>
                <ClaimButton walletStatus={walletStatus} captchaCompleted={captchaCompleted} token={token} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const callFaucet = async (token) => {
    const body = JSON.stringify({ walletAddress: address, token: token });
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
      setTxHash(data.body.receipt.transactionHash);
      setTokensClaimed(true);
    } else {
      console.error('Error:', response.status);
    }
  }

  const ConnectWalletButton = () => {
    return (
      <ConnectWallet
        switchToActiveChain={true}
        theme={customTheme}
        modalSize={"wide"}
        btnTitle="Connect Etherlink To Metamask"
      />
    )
  }

  const ClaimButton = ({ walletStatus, captchaCompleted, token }) => {
    return (
      walletStatus === "connected" && chainId === 128123 ?
        <button
          onClick={txHash ? () => window.open(`https://explorer.etherlink.com/tx/${txHash}`, '_blank') : callFaucet}
          disabled={isLoading || !captchaCompleted}
          className={`flex flex-row items-center justify-center py-3 text-lg font-medium text-center text-black bg-white border-solid border-2 border-black rounded-md px-7 lg:px-6 lg:py-4 hover:bg-darkGreen hover:border-black hover:text-white ${isLoading || !captchaCompleted ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? <>
            <Image
              src="/img/home/logo.png"
              alt="Loading..."
              width={32}
              height={32}
              className={`w-8 mr-2 ${isLoading ? 'spin-logo' : ''}`}
            />
            Loading...
          </> : txHash ?
            <>
              <Image
                src="/img/home/logo.png"
                alt="logo"
                width={32}
                height={32}
                className="w-8 mr-2"
              />
              {`${txHash.slice(0, 6)}...${txHash.slice(-4)}`}
            </> :
            `Send 0.1 ${token} to ${shortAddress}`}
        </button> : ""
    )
  }

  return (
    <div className="flex items-center justify-center w-full lg:w-1/2 rounded-lg mt-10 mb-10 s">
      <div className="max-w-2xl text-center lg:text-center">
        <div className="flex flex-col space-y-2 mb-10">
          <h1 className="text-white font-bold text-5xl" >
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <ConnectWalletButton />
          {(walletStatus === "connected" && chainId === 128123) && <ReCAPTCHA
            sitekey="6Lcbu-AoAAAAAOPS85LI3sqIvAwErDKdtZJ8d1Xh"
            onChange={() => setCaptchaCompleted(true)}
            onExpired={() => setCaptchaCompleted(false)}
            className="mt-10 mb-10"
            theme="light"
          />}
          {/* <ClaimButton walletStatus={walletStatus} captchaCompleted={captchaCompleted} /> */}
          <TokenTable walletStatus={walletStatus} captchaCompleted={captchaCompleted} />
        </div>
      </div>
    </div >
  );
}

export default FaucetTable;



