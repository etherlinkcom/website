"use client"

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "../components/contexts/FaucetContext";
import "../css/tailwind.css";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" a defaultTheme="dark">
      <FaucetProvider>
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
          supportedWallets={[metamaskWallet()]}>
          {children}
        </ThirdwebProvider>
      </FaucetProvider>
    </ThemeProvider >
  );
}
