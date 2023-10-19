import { Flex, FlexProps, Spacer, Text, Image, Box, Link } from '@chakra-ui/react'
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";

export const Header = (props: FlexProps) => {
  return (
    <Flex w='100%' align='center' h='25px' my='22px' mt={12} {...props}>
      <Text
        fontSize={{ base: '24px', md: '28px', xl: '32px' }}
        fontWeight='700'
      >
        <Link _hover={{ textDecoration: 'none' }} href='/'>
          Etherlink
        </Link>
      </Text>
      <Spacer />
      <Flex>
        <Box
          pt='10px'
        >
          <ThirdwebProvider
            activeChain={{
              // === Required information for connecting to the network === \\
              chainId: 128123, // Chain ID of the network
              // Array of RPC URLs to use
              rpc: ["https://evm.ghostnet-evm.tzalpha.net/"],
              // === Information for adding the network to your wallet (how it will appear for first time users) === \\
              // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
              nativeCurrency: {
                decimals: 18,
                name: "XTZ",
                symbol: "XTZ",
              },
              shortName: "etherlink", // Display value shown in the wallet UI
              slug: "etherlink", // Display value shown in the wallet UI
              testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
              chain: "Etherlink Ghostnet", // Name of the network
              name: "Etherlink Ghostnet", // Name of the network
            }}
            supportedWallets={[metamaskWallet()]}
          >
            <ConnectWallet
              theme={"light"}
              modalSize={"wide"}
              btnTitle={"Add Etherlink to Metamask"}
            />
          </ThirdwebProvider>
        </Box>
      </Flex>

    </Flex>
  )
}
