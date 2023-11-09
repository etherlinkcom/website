"use client"

import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "./contexts/FaucetContext";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import "../public/css/tailwind.css";

function ThirdWebConfig({ children }) {
  const activeChain = {
    chainId: 128123,
    rpc: ["https://evm.ghostnet-evm.tzalpha.net/"],
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

  return (
    <ThirdwebProvider clientId="b6e4deaae9898f34fddd8ce911f99316" activeChain={activeChain} supportedWallets={[metamaskWallet()]}>
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
