import { useRef } from 'react'
import Head from 'next/head'
import { Box, Text, Flex, Button } from '@chakra-ui/react'

import SignupForm from '@/components/SIgnupForm'
import ModalBox from '../components/ModalBox'
import { roboto } from '@/theme/fonts'
import { Header } from '@/components/Header'
import { GUTTER_PX } from '@/theme/constants'

export default function Home() {
  const modalBoxContent = [
    {
      title: 'Unparalleled Decentralization',
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
      <Head>
        <title>Etherlink</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Built on the robust Tezos blockchain, Etherlink empowers businesses
          and developers to create a new era of open, secure, and scalable
          applications.'
        />
        <link rel='icon' href='/etherlink_favicon.png' sizes='any' />
      </Head>
      <Flex
        flexDir='column'
        minH={['0px', null, '100vh']}
        pb={['73px', null, '0px']}
        backgroundImage='/bg-upper.jpg'
        backgroundPosition={['-500px', '-550px', '-300px', '0px']}
        backgroundSize='cover'
      >
        <Header px={['16px', null, '80px']} />
        <Flex
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
              businesses and developers to create a new era of open, secure, and
              scalable applications.
            </Text>
          </Box>
          <Box flex={[0, 0, 0.5, 1]} minH='32px' minW={'32px'} />
          <Flex flex={1} w='100%' justifyContent={['center', null, 'flex-end']}>
            <SignupForm signupRef={signupRef} />
          </Flex>
        </Flex>
      </Flex>

      <Box
        pt={{ base: '60px', md: '80px', xl: '104px' }}
        pb={{ base: '80px', md: '130px', xl: '164px' }}
        bg='#04001C'
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
              key={index}
              title={content.title}
              paragraph={content.paragraph}
            />
          ))}
        </Flex>
      </Box>

      <Box
        pt='80px'
        backgroundImage='/bg-bottom.jpg'
        backgroundPosition={['-500px', '-100px', '0px']}
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
            w={{ base: '350px', md: '610px', xl: '710px' }}
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
          >
            Sign up
          </Button>
        </Flex>
        <Text
          fontSize={{ base: '16px', xl: '18px' }}
          p='50px 0px 20px 15px'
          mt='80px'
          className={roboto.className}
        >
          © Etherlink 2023
        </Text>
      </Box>
    </>
  )
}
