"use client"

import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "./contexts/FaucetContext";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import "../public/css/tailwind.css";
import { config } from 'dotenv';

config();

function ThirdWebConfig({ children }) {
  const activeChain = {
    chainId: 128123,
    rpc: ["https://node.ghostnet.etherlink.com"],
    nativeCurrency: {
      decimals: 18,
      name: "XTZ",
      symbol: "XTZ",
    },
    shortName: "etherlink",
    slug: "etherlink",
    testnet: true,
    chain: "Etherlink",
    name: "Etherlink Testnet",
  };

  const dAppMeta = {
    name: "Etherlink Testnet Faucet",
    description: "Drip Testnet XTZ",
    logoUrl: "https://etherlink.com/logo.png",
    url: "https://etherlink.com",
    isDarkMode: true,
  };

  return (
    <ThirdwebProvider clientId={process.env.THIRDWEB_CLIENT_ID} activeChain={activeChain} supportedWallets={[metamaskWallet()]} dAppMeta={dAppMeta}>
      {children}
    </ThirdwebProvider>
  );
}

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <FaucetProvider>
        <ThirdWebConfig>
          {children}
        </ThirdWebConfig>
      </FaucetProvider>
    </ThemeProvider>
  );
}
