"use client"

import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "./contexts/FaucetContext";
import { ThirdwebProvider, metamaskWallet, localWallet, walletConnect, phantomWallet, embeddedWallet } from "@thirdweb-dev/react";
import "./global.css";


function ThirdWebConfig({ children }) {
  const activeChain = {
    chainId: 128123,
    rpc: ["https://node.ghostnet.etherlink.com"],
    nativeCurrency: {
      decimals: 18,
      name: "XTZ",
      symbol: "XTZ",
    },
    explorers: [{ name: "Etherlink Explorer", url: "https://testnet-explorer.etherlink.com/" }],
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
    <ThirdwebProvider clientId={process.env.THIRDWEB_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        // walletConnect(),
        localWallet(),
        // embeddedWallet({
        //   auth: {
        //     options: ["email", "apple", "google"],
        //   },
        // }),
        // phantomWallet({ recommended: true }),
      ]}
      dAppMeta={dAppMeta}>
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
