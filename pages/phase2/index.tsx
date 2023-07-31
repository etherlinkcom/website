import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Grid,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { GUTTER_PX } from '@/theme/constants'
import ModalBox from '@/components/ModalBox'
import ContentBox from '@/components/ContentBox'
import TableComponent from '@/components/TableComponent'
import FaqBox from '@/components/FaqBox'
import SIgnupForm from '@/components/SIgnupForm'
import Footer from '@/components/Footer'
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
      title: 'Unparalleled Decentralization',
      paragraph:
        'Our EVM rollup takes decentralization seriously. By harnessing Tezos enshrined smart rollups, we provide a decentralized, cost-efficient, and resilient generalized EVM L2 solution.'
    },
    {
      title: 'Versatility and Flexibility',
      paragraph:
        "Whether you're envisioning an open decentralized platform or a private app-chain, Etherlink provides the perfect foundation. With its versatile architecture, you can create tailored solutions that fit your unique business requirements and user needs. "
    },
    {
      title: 'Scalability and Speed',
      paragraph:
        "And what's more? Tezos has a stellar track record of continuous performance improvement. This commitment to excellence cascades into our rollup, assuring its future potential, cost-effectiveness, and scalability."
    },
    {
      title: 'Customizable Layer 2 solutions',
      paragraph:
        'From open decentralized platforms to private app-chains under your control. Smart Rollups can be anything you want.'
    },
    {
      title: 'Open source technology',
      paragraph:
        'The Tezos protocol and Smart Rollup architecture are open source tools freely available to everyone (but your rollup doesn’t have to be).'
    },
    {
      title: 'Scaling with integrity',
      paragraph:
        'Enjoy massive scalability, while integrity and security is guaranteed by Tezos’ decentralized Layer 1.'
    }
  ]

  const faqsContent = [
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum. applications on Ethereum.Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
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
        backgroundPosition={['-400px', '-400px', '-150px', '0px']}
      >
        {/* <Image
          position='absolute'
          src='/bg-bottom.jpg'
          h='100%'
          w='100%'
          zIndex={0}
          objectFit={['cover', null, 'cover', 'cover']}
          top={0}
          left={0}
          right={0}
          bottom={0}
        /> */}

        <Flex justifyContent='center' w='100%' zIndex={1}>
          <Header maxW='1920px' px={GUTTER_PX} />
        </Flex>

        <Flex
          zIndex={1}
          w='100%'
          maxW='1920px'
          alignItems='center'
          grow={1}
          direction={'column'}
          px={GUTTER_PX}
          pt='50px'
          // py={['50px', null, '100px', '100px']}
          // border='solid yellow 3px'
        >
          <Box maxW={['100%', null, '700px']}>
            <Text
              fontSize={['32px', '40px', '50px', '60px']}
              maxW='700px'
              lineHeight='110%'
              fontWeight={['450px', null, '700px']}
              align='center'
            >
              The Future of Ethereum L2 Solutions
            </Text>
            <Text
              fontSize={['18px', '20px', '22px', '24px']}
              mt={['12px', '32px', '24px']}
              className={roboto.className}
              align='center'
            >
              Built on the robust Tezos blockchain, our product empowers
              businesses and developers to create a new era of open, secure, and
              scalable applications on Ethereum.
            </Text>

            <Flex
              flexDir={['column', null, 'row']}
              justify='center'
              gap={['0px', null, '10px']}
              pb={['50px', null, '100px']}
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
          </Box>

          <Flex
            flexDir={'column'}
            // pt={['50px', null, '80px']}
            // mb={['0px', null, '50px', '100px']}
            fontWeight={700}
            // border='solid red 3px'
          >
            <Text
              align='center'
              mb='20px'
              fontSize={['26px', '30px', '32px', '36px']}
            >
              Etherlink in numbers
            </Text>
            <Flex justify='center' wrap='wrap' gap='20px'>
              {CONTENT?.map((c, index) => (
                <ContentBox
                  key={index}
                  title={c.title}
                  paragraph={c.paragraph}
                  w={['340px', null, '315px']}
                  h={['160px', null, '240px']}
                />
              ))}
            </Flex>
          </Flex>
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
              mb={['10px', null, '20px']}
            />
          ))}
        </Grid>
      </Box>

      <Flex
        mt={[null, null, '40px']}
        flexDir={['column', 'column', 'row', 'row']}
        mx={GUTTER_PX}
      >
        <Image
          objectFit='cover'
          maxW='999px'
          src='/content-img.png'
          w={['100%', null, '50%']}
        />
        <Flex
          flexDir='column'
          px={['12px', '30px', '70px']}
          py={['30px', null, '60px', '90px']}
          bg='#FFF'
          flexGrow={1}
          // w={['288px', '333px','500px', '666px']}
          transform={[null, null, 'translateX(-5px)']}
        >
          <Text
            fontWeight={700}
            fontSize={['30px', '38px', '42px', '48px']}
            lineHeight={['120%', null, '62px']}
            mb='15px'
            maxW='515px'
          >
            Unlock the Potential. Transform the Future
          </Text>
          <Text maxW='515px' className={roboto.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            dolor vitae diam consequat vulputate. Nunc et euismod mauris.
          </Text>
          <Button
            bg='#0000ff'
            color='#FFFFFF'
            p='12px 40px'
            my='20px'
            borderRadius='75px'
            _hover={{ bg: '#0000b3' }}
            h='50px'
            maxW={['100%', '200px', '200px']}
            className={roboto.className}
            onClick={onOpen}
          >
            Register
          </Button>

          <Modal size={['sm', 'md', 'lg']} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <SIgnupForm />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      <Footer />

      <Script>
        {`
          const button = document.getElementById('connectButton');
          button.addEventListener('click', async () => {
              if (window.ethereum) {
                  try {
                      // Request account access
                      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
                      console.log('Trying to connect to the custom network...');
  
                      const chainId = '0x1f47b'; // 128123 in hexadecimal
                      const chainName = 'Tezos EVM ghostnet';
                      const nativeCurrency = {
                          name: 'CTEZ',
                          symbol: 'CTEZ', // Usually a 3-4 letters acronym
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
                          console.log('Successfully connected to the custom network');
                      } catch (addError) {
                          console.log('Error adding custom network:', addError);
                      }
                  } catch (connectError) {
                      console.error("User denied account access");
                  }
              } else {
                  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
              }
          });
        `}
      </Script>
    </>
  )
}
