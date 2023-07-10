import { Flex, FlexProps, Spacer, Text, Image, Link } from '@chakra-ui/react'

export const Header = (props: FlexProps) => {
  return (
    <Flex w='100%' align='center' h='25px' my='22px' {...props}>
      <Text
        fontSize={{ base: '24px', md: '28px', xl: '32px' }}
        fontWeight='700'
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          href='https://etherlink.vercel.app/'
        >
          Etherlink
        </Link>
      </Text>
      <Spacer />
      <Link _hover={{ textDecoration: 'none' }} href='https://tezos.com'>
        <Flex>
          <Text alignSelf='center' fontSize='12px' pr='5px'>
            Powered by
          </Text>
          <Image
            w={{ base: '70px', md: '85px', xl: '100px' }}
            src='/tezos-xtz-seeklogo.svg'
            alt='tezos logo'
          />
        </Flex>
      </Link>
    </Flex>
  )
}
