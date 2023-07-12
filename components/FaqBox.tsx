import { useState } from 'react'
import { Box, Text, Flex, Image, Spacer } from '@chakra-ui/react'
import { roboto } from '@/theme/fonts'

const FaqBox = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex flexDir='column'>
      <Flex
        maxW='800px'
        bg='#FFFFFF'
        py='32px'
        px='24px'
        borderRadius='10px'
        boxShadow='0px 0px 8px 0px rgba(0, 0, 0, 0.05)'
        _hover={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text
          className={roboto.className}
          fontWeight={400}
          fontSize={['18px', null, '24px']}
        >
          {title}
        </Text>
        <Spacer />
        <Image w='20px' h={['20px', null, '22px']} src='/faq-plus.png' />
      </Flex>

      {isOpen && (
        <Box
          maxW='666px'
          mt='10px'
          bg='#FFFFFF'
          py='32px'
          px='24px'
          borderRadius='10px'
          boxShadow='0px 0px 8px 0px rgba(0, 0, 0, 0.05)'
        >
          <Text>{content}</Text>
        </Box>
      )}
    </Flex>
  )
}

export default FaqBox
