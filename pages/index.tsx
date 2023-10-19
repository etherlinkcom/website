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

export default function Index() {
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
        minH={['0px', null, '93vh', 'min(93vh, 2000px)']}
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
              Fast 🏎️ , Fair ⚖️ and Dangerously Safe 🔐
            </Text>
            <Text
              fontSize={['14px', '16px', '18px', '20px']}
              mt={['12px', '32px', '24px']}
              className={roboto.className}
              align='center'
            >
              Etherlink is a EVM-compatible blockchain, which
              prioritizes <em>fair transaction ordering</em>, <em>low latency</em> and <em>security</em> powered by Tezos smart rollups.
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
                as='a'
                href='https://bridge.ghostnet-evm.tzalpha.net/'
                target='_blank'
                rel='noopener noreferrer'
                bg='black'
                color='white'
                mt='20px'
                borderRadius='75px'
                _hover={{ bg: '#0000b3' }}
                h='50px'
                w={['100%', null, '260px']}
                className={fivo_sans_light.className}
                fontSize={['16px', null, '20px']}
                id='connectButton'
              >
                Bridge to Etherlink
              </Button>
              <Button
                as='a'
                href='https://docs.etherlink.com'
                target='_blank'
                rel='noopener noreferrer'
                bg='black'
                color='white'
                mt='20px'
                borderRadius='75px'
                _hover={{ bg: '#0000b3' }}
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

      <Footer />


    </>
  )
}
