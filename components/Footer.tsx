// import { Text, Link, Box, Image, Flex, Spacer, textDecoration } from '@chakra-ui/react'
// import { roboto } from '@/theme/fonts'

// const Footer = () => {
//   return (
//     <>

//       <Text color="white" pt={4}>© Etherlink 2023</Text>
//       <Text fontSize={['12px', null, '14px']} color="white">
//         Feedback or comments? Get in touch with us at{' '}
//         <Link
//           _hover={{ textDecoration: 'none' }}
//           href='mailto:reachout@tezos.com'
//         >
//           <strong>reachout@etherlink.com</strong>
//         </Link>
//       </Text>




//       <Link _hover={{ textDecoration: 'none' }} href='https://tezos.com'>
//         <Text alignSelf='center' fontSize='12px' pl='25px' pr='5px' color="white">
//           Powered by
//         </Text>
//         <Image
//           w={{ base: '70px', md: '85px', xl: '100px' }}
//           src='/tezos-xtz-seeklogo.png'
//           alt='tezos logo'
//         />
//       </Link>
//     </>
//   )
// }

// export default Footer

import { Text, Link, Box, Image, Flex, Spacer } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={['column', 'row']}
      justify="space-between"
      align="center"
      w="100%"
      bg="black"
      color="white"
      p={4}
    >
      <Box>
        <Text>© Etherlink 2023</Text>
        <Text fontSize={['12px', null, '14px']}>
          Feedback or comments? Get in touch with us at{' '}
          <Link
            _hover={{ textDecoration: 'none' }}
            href='mailto:reachout@tezos.com'
          >
            <strong>reachout@etherlink.com</strong>
          </Link>
        </Text>
      </Box>

      <Spacer />

      <Flex align="center">
        <Text alignSelf='center' fontSize='12px' pl='25px' pr='5px'>
          Powered by
        </Text>
        <Link _hover={{ textDecoration: 'none' }} href='https://tezos.com'>
          <Image
            w={{ base: '70px', md: '85px', xl: '100px' }}
            src='/tezos-xtz-seeklogo.png'
            alt='tezos logo'
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
