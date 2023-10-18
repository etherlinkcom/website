import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertDescription
} from '@chakra-ui/react'

import { GUTTER_PX } from '@/theme/constants'
import ModalBox from '@/components/ModalBox'
import ContentBox from '@/components/ContentBox'
import TableComponent from '@/components/TableComponent'
import FaqBox from '@/components/FaqBox'
import Footer from '@/components/Footer'

import DiscordIcon from '@/components/icons/DiscordIcon.svg'

import { roboto, fivo_sans_light } from '@/theme/fonts'
import { Header } from '@/components/Header'
import Script from 'next/script'

export default function Phase2() {
  const CONTENT = [
    {
      title: '+1M',
      paragraph: 'Something something'
    },
    {
      title: '+1M',
      paragraph: 'Something something'
    },
    {
      title: '+1M',
      paragraph: 'Something something'
    }
  ]

  const modalBoxContent = [
    {
      title: 'Fairness ⚖️',
      paragraph:
        'With a distributed sequencer from day 1, transaction confirmation order is fair for all users.'
    },
    {
      title: 'Fast Finality 🏎️',
      paragraph:
        'Tezos L1 finality is 2 blocks guaranteed. Transaction data posted to L1 every 30 seconds.  Therefore, average Etherlink time to L1 finality is 30 seconds.'
    },
    {
      title: 'Security 🔐',
      paragraph:
        "Rollup is enshrined so Tezos bakers are the only point of failure. From day 1, distributed sequencing for a more transparent and decentralised L2. Users can submit transaction directly to L1 if sequencing fails with a 1 day delay."
    },
    {
      title: 'Upgradeable 🛠️',
      paragraph:
        'Tezos has a built-in capability to upgrade itself, which allows the network to evolve without requiring a hard fork. This feature allows Tezos to adapt to new technologies and to address user needs rapidly. Etherlink will adopt Tezos’ governance model to evolve rapidly and create a world-class EVM developer experience.'
    },
    {
      title: 'Rebaking 🤝',
      paragraph:
        'Enjoy massive scalability, while integrity and security is guaranteed by Tezos’ decentralized Layer 1.'
    },
    {
      title: 'Lightning Fast ⚡️',
      paragraph:
        'Average Etherlink block time is ~450ms. On the roadmap, Etherlink is striving towards parallel execution for smart contracts.'
    }
  ]

  const faqsContent = [
    {
      title: 'Can I deploy a smart contract on Etherlink?',
      content: 'Of course, just follow this tutorial on the docs.',
      href: ''
    },
    {
      title: 'Can I fork it?',
      content: 'Yes, you can - everything is open source',
      href: 'https://gitlab.com/tezos/tezos/-/tree/master/src/kernel_evm'
    },
    {
      title: 'Where can I keep up to speed with Etherlink and its progress?',
      content: 'Best place is to go to Discord and ask your questions there.',
      href: 'https://discord.gg/tezos'
    }
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        flexDir='column'
        minH={['0px', null, '100vh', 'min(100vh, 2000px)']}
        pb={['73px', null, '50px']}
        alignItems='center'
        position='relative'
        // the other way of bg image
        backgroundImage='/bg-bottom.jpg'
        backgroundSize='cover'
        backgroundPosition={['-350px', '-100px', '-150px', '0px']}
      >
        <Flex justifyContent='center' w='100%' zIndex={1}>
          <Header maxW='1920px' px={GUTTER_PX} />
        </Flex>

        <Box>
          <Alert id='error-alert' display='none' status='error'>
            <AlertIcon />
            <AlertDescription id='error-desc'></AlertDescription>
          </Alert>

          <Alert id='success-alert' display='none' status='success'>
            <AlertIcon />
            <AlertDescription id='success-desc'></AlertDescription>
          </Alert>
        </Box>

        <Flex
          zIndex={1}
          w='100%'
          maxW='1920px'
          alignItems='center'
          grow={1}
          direction={'column'}
          px={GUTTER_PX}
          justify='center'
          mt={['50px', null, '0px']}
        >
          <Box maxW={['100%', null, '700px']}>
            <Text
              fontSize={['32px', '40px', '50px', '60px']}
              maxW='700px'
              lineHeight='110%'
              fontWeight={['450px', null, '700px']}
              align='center'
            >
              A Fully Decentralized Ethereum L2 Solution
            </Text>
            <Text
              fontSize={['18px', '20px', '22px', '24px']}
              mt={['12px', '32px', '24px']}
              className={roboto.className}
              align='center'
            >
              Etherlink is a EVM-compatible L2, built on Tezos, which
              prioritizes fairness, fast finality and security. Etherlink
              empowers developers to create a new era of open, secure, and
              scalable Ethereum compatible applications on Tezos.
            </Text>

            <Flex
              direction={['column', 'column', 'row']}
              justify='center'
              align='center'
              gap={['20px', '25px', '30px']}
              pb={['25px', null, '25px']}
              maxW={['300px', '350px', '1200px']}
              m='auto'
            >
              <Button
                bg='#0000ff'
                color='#FFFFFF'
                mt='20px'
                borderRadius='75px'
                _hover={{ bg: '#0000b3' }}
                h='50px'
                w={['100%', null, '260px']}
                className={fivo_sans_light.className}
                fontSize={['16px', null, '20px']}
                id='connectButton'
              >
                Connect wallet
              </Button>
              <Button
                as='a'
                href='https://docs.etherlink.com'
                target='_blank'
                rel='noopener noreferrer'
                backgroundColor='rgba(243, 243, 233, 0.1)'
                color='#33F'
                mt='20px'
                borderRadius='75px'
                border='1px solid #33F;'
                h='50px'
                w={['100%', null, '260px']}
                className={fivo_sans_light.className}
                fontSize={['16px', null, '20px']}
              >
                Read docs
              </Button>
            </Flex>
            <Flex
              justify='center'
              align='center'
              mt={['5px', '5px', '5px']}
              gap={['10px', '15px', '20px']}
            >
              <a
                href='https://x.com/etherlinkcom'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/XIcon.png'
                  alt='X'
                  width={50}
                  height={50}
                />
              </a>
              <a
                href='https://discord.gg/etherlink'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/DiscordIcon.svg'
                  alt='Discord'
                  width={50}
                  height={50}
                />
              </a>
              <a
                href='https://t.me/etherlinkcom'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/TelegramIcon.svg'
                  alt='Telegram'
                  width={50}
                  height={50}
                />
              </a>
              <a
                href='https://github.com/etherlinkcom'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/GithubIcon.svg'
                  alt='Github'
                  width={50}
                  height={50}
                />
              </a>
              <a
                href='mailto:reachout@etherlink.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/EmailIcon.svg' alt='Email' width={50} height={50} />
              </a>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Flex w='100%' alignItems='center' justifyContent='center' bg='#04001C'>
        <Box
          w='100%'
          pt={{ base: '60px', md: '80px', xl: '104px' }}
          pb={['70px', '100px', '120px']}
          maxW='1920px'
          px={GUTTER_PX}
        >
          <Text
            align='center'
            fontSize={['24px', null, '36px']}
            color='white'
            mb='20px'
            fontWeight={['450px', null, '700px']}
          >
            Why Choose Etherlink?
          </Text>
          <Grid
            gap='30px'
            mt={{ base: '40px', md: '60px', xl: '80px' }}
            gridTemplateColumns={[
              'repeat(1, minmax(5px, 1fr))',
              'repeat(2, minmax(120px, 1fr))',
              'repeat(3, minmax(220px, 1fr))',
              'repeat(3, minmax(430px, 1fr))'
            ]}
          >
            {modalBoxContent?.map((content, index) => (
              <ModalBox
                minW='232px'
                key={index}
                title={content.title}
                paragraph={content.paragraph}
              />
            ))}
          </Grid>
        </Box>
      </Flex>

      <Box py={['40px', null, '80px']} px={GUTTER_PX}>
        {/* <Text
          lineHeight={['normal', null, '62px']}
          align='center'
          fontSize={['24px', '32px', '40px', '48px']}
          fontWeight={700}
        >
          Etherlink vs <br /> other L2 solutions
        </Text>
        <Center mt={['30px', null, '50px', '80px']}>
          <TableComponent />
        </Center> */}
        <Text
          align='center'
          // my={['20px', '50px', '80px']}
          fontSize={['30px', '36px', '44px', '48px']}
          fontWeight={700}
          mb='30px'
        >
          FAQs
        </Text>
        <Grid
          gap={['5px', '10px', '20px']}
          gridTemplateColumns={[
            'repeat(1, minmax(320px, 1fr))',
            'repeat(2, minmax(120px, 1fr))',
            'repeat(2, minmax(220px, 1fr))',
            'repeat(2, minmax(430px, 1fr))'
          ]}
        >
          {faqsContent?.map((faq, index) => (
            <FaqBox
              key={index}
              title={faq.title}
              content={faq.content}
              href={faq.href}
              mb={['10px', null, '20px']}
            />
          ))}
        </Grid>
      </Box>

      <Flex
        mt={[null, null, '40px']}
        flexDir={['column', 'column', 'row', 'row']}
        mx={GUTTER_PX}
      ></Flex>
      <Footer />

      <Script>
        {`
          const button = document.getElementById('connectButton');

          const errorDesc = document.getElementById('error-desc');
          const successDesc = document.getElementById('success-desc');

          const errorAlert = document.getElementById('error-alert')
          const successAlert = document.getElementById('success-alert')

          button.addEventListener('click', async () => {
              if (window.ethereum) {
                  try {
                      // Request account access
                      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
                      // console.log('Trying to connect to the custom network...');
  
                      const chainId = '0x1f47b'; // 128123 in hexadecimal
                      const chainName = 'Etherlink Ghostnet';
                      const nativeCurrency = {
                          name: 'XTZ',
                          symbol: 'XTZ', // Usually a 3-4 letters acronym
                          decimals: 18 // The number of decimals that the currency has
                      };
                      const rpcUrls = ['https://evm.ghostnet-evm.tzalpha.net'];
                      const blockExplorerUrls = null; // null if a block explorer isn't available
  
                      try {
                          await window.ethereum.request({
                              method: 'wallet_addEthereumChain',
                              params: [{
                                  chainId,
                                  chainName,
                                  nativeCurrency,
                                  rpcUrls,
                                  blockExplorerUrls
                              }]
                          });
                          // console.log('Successfully connected to the custom network');
                          
                          addTextToAlert(successAlert, successDesc, "Successfully connected to Etherlink Ghostnet. Happy building 🔨");

                      } catch (addError) {
                          // console.log('Error adding custom network:', addError);
                          addTextToAlert(errorAlert, errorDesc, 'Error adding custom network: ' + addError);
                      }
                  } catch (connectError) {
                      // console.error("User denied account access");
                      addTextToAlert(errorAlert, errorDesc, "User denied account access");
                  }
              } else {
                  // console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                  addTextToAlert(errorAlert, errorDesc, 'Non-Ethereum browser detected. You should consider trying MetaMask!');
              }
          });

          let displayTimeOut;

          function addTextToAlert(alertDiv, alertDesc, text) {
            const currentText = alertDesc.childNodes[0]
            
            if(currentText) alertDesc.removeChild(currentText)

            const textNode = document.createTextNode(text)
            alertDesc.appendChild(textNode)
            alertDiv.style.display = "inline-block"
            
            if(displayTimeOut) clearTimeout(displayTimeOut)

            displayTimeOut = setTimeout(function() {
              alertDiv.style.display = 'none'
            }, 2000)
          }
        `}
      </Script>
    </>
  )
}
