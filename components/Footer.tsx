import { Text } from '@chakra-ui/react'
import { roboto } from '@/theme/fonts'

const Footer = () => {
  return (
    <Text
      fontSize={{ base: '16px', xl: '18px' }}
      p='50px 0px 20px 15px'
      mt='80px'
      className={roboto.className}
    >
      © Etherlink 2023
    </Text>
  )
}

export default Footer
