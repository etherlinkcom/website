import { useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Image,
  Spacer,
  BoxProps,
  Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { roboto } from '@/theme/fonts'

const FaqBox = ({
  title,
  content,
  href,
  ...props
}: { title: string; content: string; href: string } & BoxProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex flexDir='column' {...props}>
      <Flex
        h={['70px', null, '150px']}
        alignItems='center'
        maxW='1000px'
        bg='#FFFFFF'
        py={['20px', null, '32px']}
        px={['18px', null, '24px']}
        borderRadius={isOpen ? '10px 10px 0px 0px' : '10px'}
        maxH='300px'
        _hover={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
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
            {href.length ? (
              <Link href={href}>
                {content}
                <ExternalLinkIcon ml='3px' />
              </Link>
            ) : (
              content
            )}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default FaqBox
