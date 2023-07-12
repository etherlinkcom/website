import { Box, Text, BoxProps } from '@chakra-ui/react'
import { roboto, fivo_sans_medium } from '@/theme/fonts'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function ContentBox({
  title,
  paragraph,
  ...props
}: {
  title: string
  paragraph: string
} & BoxProps) {
  const style = {
    borderRadius: '20px',
    background: '#FFF',
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(87px)',
    maxWidth: '380px',
    maxHeight: '270px'
  }

  return (
    <Box
      h={['200px', null, '270px']}
      py={['32px', null, '40px']}
      px={['20px', null, '40px']}
      sx={style}
      {...props}
    >
      <Text
        fontSize={['56px', '62px', '68px', '72px']}
        mb='5px'
        fontWeight={700}
        align='center'
      >
        {title}
      </Text>
      <Text
        align='center'
        className={inter.className}
        fontWeight={400}
        fontSize='16px'
      >
        {paragraph}
      </Text>
    </Box>
  )
}

export default ContentBox
