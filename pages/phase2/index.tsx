import { Box, Text, Flex, Button, Image, Grid, Center } from '@chakra-ui/react'
import { GUTTER_PX } from '@/theme/constants'
import ModalBox from '@/components/ModalBox'
import ContentBox from '@/components/ContentBox'
import TableComponent from '@/components/TableComponent'
import FaqBox from '@/components/FaqBox'
import Footer from '@/components/Footer'
import { roboto, fivo_sans_light } from '@/theme/fonts'
import { Header } from '@/components/Header'

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
    },
    {
      title: 'What is Etherlink?',
      content:
        'Built on the robust Tezos blockchain, our product empowers businesses and developers to create a new era of open, secure, and scalable applications on Ethereum.'
    }
  ]

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
            src='/bg-bottom.jpg'
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
            direction={'column'}
            px={GUTTER_PX}
            py={['50px', null, '100px', '0px']}
          >
            <Box maxW={['100%', null, '700px']} h='100%'>
              <Text
                fontSize={['30px', '50px', '60px', '85px']}
                maxW='700px'
                lineHeight='110%'
                fontWeight={450}
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
                businesses and developers to create a new era of open, secure,
                and scalable applications on Ethereum.
              </Text>
              <Flex justify='center'>
                <Button
                  bg='#0000ff'
                  color='#FFFFFF'
                  p='12px 40px'
                  mt='20px'
                  borderRadius='75px'
                  _hover={{ bg: '#0000b3' }}
                  h='50px'
                  maxW='260px'
                  w='100%'
                  className={fivo_sans_light.className}
                >
                  Connect wallet
                </Button>
                <Box flex={[0, 0, 0.1, 0.3]} minH='2px' minW={'12px'} />
                <Button
                  backgroundColor='rgba(243, 243, 233, 0.1)'
                  color='#33F'
                  p='12px 40px'
                  mt='20px'
                  borderRadius='75px'
                  // _hover={{ bg: '#0000b3' }}
                  border='1px solid #33F;'
                  h='50px'
                  maxW='260px'
                  w='100%'
                  className={fivo_sans_light.className}
                >
                  Read docs
                </Button>
              </Flex>
            </Box>

            <Box flex={[0, 0, 0.5, 1]} minH='32px' minW={'22px'} />

            <Flex
              w='100%'
              flexDir={'column'}
              mt='80px'
              mb={['40px', null, '50px', '70px']}
            >
              <Text
                align='center'
                mb='20px'
                fontSize={['26px', '30px', '32px', '36px']}
              >
                Etherlink in numbers
              </Text>
              <Flex
                justify='space-around'
                wrap='wrap'
                gap='20px'
                // mt={{ base: '40px', md: '60px', xl: '80px' }}
              >
                {CONTENT?.map((c, index) => (
                  <ContentBox
                    key={index}
                    title={c.title}
                    paragraph={c.paragraph}
                  />
                ))}
              </Flex>
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
          <Grid
            gap='20px'
            mt={{ base: '40px', md: '60px', xl: '80px' }}
            gridTemplateColumns={[
              'repeat(1, minmax(320px, 1fr))',
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

      <Box py='80px' px={GUTTER_PX}>
        <Text
          lineHeight='62px'
          align='center'
          fontSize={['32px', '36px', '38px', '42px']}
        >
          Etherlink vs <br /> other L2 solutions
        </Text>
        <Center>
          <TableComponent />
        </Center>
        <Text
          align='center'
          mt='100px '
          fontSize={['30px', '36px', '44px', '48px']}
          fontWeight={700}
        >
          FAQs
        </Text>
        <Grid
          gap='20px'
          mt={{ base: '40px', md: '60px', xl: '80px' }}
          gridTemplateColumns={[
            'repeat(1, minmax(320px, 1fr))',
            'repeat(2, minmax(120px, 1fr))',
            'repeat(2, minmax(220px, 1fr))',
            'repeat(2, minmax(430px, 1fr))'
          ]}
        >
          {faqsContent?.map((faq, index) => (
            <FaqBox key={index} title={faq.title} content={faq.content} />
          ))}
        </Grid>
      </Box>

      <Flex flexDir={['column', null, 'row']} bg='#FFF' mx={GUTTER_PX}>
        <Image ml='auto' mr='auto' objectFit='cover' src='/content-img.png' />
        <Flex flexDir='column' px='70px' pt='90px'>
          <Text
            fontWeight={700}
            fontSize={['32px', '38px', '44px', '48px']}
            lineHeight='62px'
          >
            Unlock the Potential. Transform the Future
          </Text>
          <Text className={roboto.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            dolor vitae diam consequat vulputate. Nunc et euismod mauris.
          </Text>
          <Button
            bg='#0000ff'
            color='#FFFFFF'
            p='12px 40px'
            mt='20px'
            borderRadius='75px'
            _hover={{ bg: '#0000b3' }}
            h='50px'
            maxW='200px'
            className={roboto.className}
          >
            Register
          </Button>
        </Flex>
      </Flex>

      <Footer />
    </>
  )
}
