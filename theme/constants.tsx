import { Image, Text, Center } from '@chakra-ui/react'

export const GUTTER_PX = ['16px', '60px', '40px', '80px']

export const feature1 = [
  <Text fontSize={['12px', '14px', '18px', '24px']} pr='60px'>
    Feature name
  </Text>,
  <Center>
    <Image w={['12px', null, '16px', '20px']} src='/cross.svg' />
  </Center>,
  <Center>
    <Image w={['12px', null, '16px', '20px']} src='/cross.svg' />
  </Center>,
  <Center>
    <Image w={['12px', null, '16px', '20px']} src='/cross.svg' />
  </Center>,
  <Center>
    <Image w={['12px', null, '16px', '20px']} src='/cross.svg' />
  </Center>,
  <Center>
    <Image w={['12px', null, '16px', '20px']} src='/green-tick.svg' />
  </Center>
]
