import { useState } from 'react'
import { Box, Text, Flex, Image, Spacer } from '@chakra-ui/react'
import { roboto } from '@/theme/fonts'

const FaqBox = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      flexDir='column'
      _hover={{ cursor: 'pointer' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex
        maxW='1000px'
        bg='#FFFFFF'
        py='32px'
        px='24px'
        borderRadius={isOpen ? '10px 10px 0px 0px' : '10px'}
        maxH='300px'
      >
        <Text
          className={roboto.className}
          fontWeight={400}
          fontSize={['18px', null, '24px']}
        >
          {title}
        </Text>
        <Spacer />
        {isOpen ? (
          <Image w='20px' h='5px' src='/faq-close.png' />
        ) : (
          <Image w='20px' h={['18px', null, '20px']} src='/faq-plus.png' />
        )}
      </Flex>
      <Box
        maxW='1000px'
        bg='#FFFFFF'
        borderRadius='0px 0px 10px 10px'
        boxShadow='0px 0px 0px 0px rgba(0, 0, 0, 0.05)'
        maxH='400px'
        transform='translateY(-20px)'
      >
        {isOpen && (
          <Text pb='30px' px='24px'>
            {content}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default FaqBox
