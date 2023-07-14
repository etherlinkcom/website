import { Box, Text, BoxProps } from '@chakra-ui/react'
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
    borderRadius: '10px',
    background: '#FFF',
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(87px)'
  }

  return (
    <Box p={['20px 40px', null, '50px 30px']} sx={style} {...props}>
      <Text
        fontSize={['56px', '62px', '68px', '72px']}
        fontWeight={700}
        align='center'
      >
        {title}
      </Text>
      <Text
        align='center'
        className={inter.className}
        fontWeight={400}
        fontSize={['20px', null, '24px']}
      >
        {paragraph}
      </Text>
    </Box>
  )
}

export default ContentBox
