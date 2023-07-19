import { Text, Link, Box, textDecoration } from '@chakra-ui/react'
import { roboto } from '@/theme/fonts'

const Footer = () => {
  return (
    <Box
      fontSize={{ base: '16px', xl: '18px' }}
      p='0px 0px 20px 15px'
      mt='80px'
      className={roboto.className}
    >
      <Text>© Etherlink 2023</Text>
      <Text fontSize={['12px', null, '14px']}>
        Feedback or comments? Get in touch with us at{' '}
        <Link
          _hover={{ textDecoration: 'none' }}
          href='mailto:reachout@tezos.com'
        >
          <strong>reachout@tezos.com</strong>
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
