import { useRef } from 'react'
import { Box, Text, Flex, Button, Image } from '@chakra-ui/react'

import SignupForm from '@/components/SIgnupForm'
import ModalBox from '../components/ModalBox'
import Footer from '@/components/Footer'

import { roboto } from '@/theme/fonts'
import { Header } from '@/components/Header'
import { GUTTER_PX } from '@/theme/constants'

export default function Home() {
  const modalBoxContent = [
    {
      title: 'Unparalleled Decentralization Test',
      paragraph:
        'Our EVM rollup takes decentralization seriously. By harnessing Tezos enshrined smart rollups, we provide a decentralized, cost-efficient, and resilient generalized EVM L2 solution.'
    },
    {
      title: 'Inherit Battle-Tested Governance from Tezos',
      paragraph:
        "Our rollup governance isn't dictated by a select few - it's decided by the proven governance model of Tezos Layer 1. Experience decentralized decision-making in its truest form on a rollup designed to evolve!"
    },
    {
      title: 'Scalability and Speed',
      paragraph:
        "And what's more? Tezos has a stellar track record of continuous performance improvement. This commitment to excellence cascades into our rollup, assuring its future potential, cost-effectiveness, and scalability."
    }
  ]

  const signupRef: React.RefObject<HTMLInputElement> = useRef(null)

  return (
    <>
      <Flex flexDir='column' w='100%' alignItems='center'>
        <Flex
          flexDir='column'
          minH={['0px', null, '100vh', 'min(100vh, 2000px)']}
          pb={['73px', null, '0px']}
          w='100%'
          alignItems='center'
          position='relative'
        >
          <Image
            position='absolute'
            src='/bg-upper.jpg'
            h='100%'
            w='100%'
            zIndex={0}
            objectFit={['cover', null, 'cover', 'cover']}
            top={0}
            left={0}
            right={0}
            bottom={0}
          />
          <Flex justifyContent='center' w='100%' zIndex={1}>
            <Header maxW='1920px' px={GUTTER_PX} />
          </Flex>
          <Flex
            zIndex={1}
            w='100%'
            maxW='1920px'
            alignItems='center'
            grow={1}
            direction={['column', 'column', 'row', 'row']}
            px={GUTTER_PX}
            py={['50px', null, '100px', '0px']}
          >
            <Box maxW={['100%', null, '400px', '640px']} h='100%'>
              <Text
                fontSize={['30px', '50px', '60px', '85px']}
                maxW='550px'
                lineHeight='110%'
                fontWeight={450}
              >
                A fully decentralized Ethereum L2 solution
              </Text>
              <Text
                fontSize={['18px', '20px', '22px', '24px']}
                mt={['12px', '32px', '24px']}
                className={roboto.className}
              >
                Built on the robust Tezos blockchain, Etherlink empowers
                businesses and developers to create a new era of open, secure,
                and scalable applications.
              </Text>
            </Box>
            <Box flex={[0, 0, 0.5, 1]} minH='32px' minW={'32px'} />
            <Flex
              flex={1}
              w='100%'
              justifyContent={['center', null, 'flex-end']}
            >
              <SignupForm
                w={['480px', null, '450px', '500px']}
                signupRef={signupRef}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w='100%' alignItems='center' justifyContent='center' bg='#04001C'>
        <Box
          w='100%'
          pt={{ base: '60px', md: '80px', xl: '104px' }}
          pb={{ base: '80px', md: '130px', xl: '164px' }}
          maxW='1920px'
          px={GUTTER_PX}
        >
          <Text
            align='center'
            fontSize={{ base: '24px', md: '32px', xl: '48px' }}
            color='white'
            mb='20px'
          >
            Why Choose Etherlink?
          </Text>
          <Text
            align='center'
            fontSize={{ base: '16px', md: '20px', xl: '24px' }}
            color='white'
            className={roboto.className}
          >
            Be at the forefront of decentralized innovation
          </Text>
          <Flex
            justify='space-around'
            wrap='wrap'
            gap='20px'
            mt={{ base: '40px', md: '60px', xl: '80px' }}
          >
            {modalBoxContent?.map((content, index) => (
              <ModalBox
                minW='232px'
                flex={1}
                width='430px'
                key={index}
                title={content.title}
                paragraph={content.paragraph}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box
        pt='80px'
        backgroundImage='/bg-bottom.jpg'
        backgroundPosition={['-500px', '-100px', 'center']}
        backgroundSize='cover'
      >
        <Flex
          direction='column'
          align='center'
          p={{
            base: '50px 16px 150px 16px',
            md: '75px 50px 175px 50px',
            xl: '100px 90px 200px 90px'
          }}
        >
          <Text
            fontWeight='450'
            fontSize={{ base: '28px', md: '45px', xl: '60px' }}
            align='center'
            lineHeight='100%'
          >
            Join the Etherlink <br /> Revolution
          </Text>
          <Text
            fontSize={{ base: '18px', md: '20px', lg: '20px', xl: '24px' }}
            w='100%'
            maxW={['100%', '490px', '720px']}
            mt='20px'
            className={roboto.className}
            lineHeight='135%'
          >
            Decentralization, cost-efficient scaling, on-chain governance, and
            constant evolution - all in one place. Join the Etherlink EVM rollup
            on Tezos and be part of the blockchain revolution!
          </Text>
          <Button
            bg='#0000ff'
            color='#FFFFFF'
            p='12px 40px'
            mt='20px'
            borderRadius='75px'
            onClick={() => signupRef.current?.focus()}
            _hover={{ bg: '#0000b3' }}
            h='50px'
          >
            Sign up
          </Button>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}
