import { useState } from 'react'
import { Box, Text, Flex, Image, Spacer, BoxProps } from '@chakra-ui/react'
import { roboto } from '@/theme/fonts'

const FaqBox = ({
  title,
  content,
  ...props
}: { title: string; content: string } & BoxProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex
      flexDir='column'
      _hover={{ cursor: 'pointer' }}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <Flex
        maxW='1000px'
        bg='#FFFFFF'
        py={['20px', null, '32px']}
        px={['18px', null, '24px']}
        borderRadius={isOpen ? '10px 10px 0px 0px' : '10px'}
        maxH='300px'
      >
        <Text
          className={roboto.className}
          fontWeight={400}
          fontSize={['14px', null, '24px']}
        >
          {title}
        </Text>
        <Spacer />
        {isOpen ? (
          <Image w={['14px', null, '20px']} src='/faq-close.svg' />
        ) : (
          <Image w={['12px', null, '20px']} src='/faq-plus.svg' />
        )}
      </Flex>
      <Box
        maxW='1000px'
        bg='#FFFFFF'
        borderRadius='0px 0px 10px 10px'
        boxShadow='0px 0px 0px 0px rgba(0, 0, 0, 0.05)'
        maxH='400px'
      >
        {isOpen && (
          <Text
            fontSize={['12px', null, '16px']}
            pb={['20px', null, '32px']}
            px={['18px', null, '24px']}
          >
            {content}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default FaqBox
