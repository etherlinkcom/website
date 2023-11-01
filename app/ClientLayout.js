"use client"

import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "../components/contexts/FaucetContext";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import "../css/tailwind.css";

function ThirdWebConfig({ children }) {
  const activeChain = {
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
  };

  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet()]}>
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
