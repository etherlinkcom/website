import { Flex, FlexProps, Spacer, Text, Image } from '@chakra-ui/react'

export const Header = (props: FlexProps) => {
  return (
    <Flex align='center' h='25px' my='22px' {...props}>
      <Text
        fontSize={{ base: '24px', md: '28px', xl: '32px' }}
        fontWeight='700'
      >
        Etherlink
      </Text>
      <Spacer />
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
    </Flex>
  )
}
