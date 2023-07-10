import { Box, BoxProps, Text } from '@chakra-ui/react'
import { roboto, fivo_sans_medium } from '@/theme/fonts'

function ModalBox({
  title,
  paragraph,
  ...props
}: { title: string; paragraph: string } & BoxProps) {
  const style = {
    borderRadius: '20px',
    background: '#FFF',
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(87px)'
  }

  return (
    <Box
      width='430px'
      py={['32px', null, '40px']}
      px={['20px', null, '40px']}
      sx={style}
      {...props}
    >
      <Text
        fontSize={['18px', null, '19px', '24px']}
        className={fivo_sans_medium.className}
        mb='5px'
        lineHeight='110%'
      >
        {title}
      </Text>
      <Text className={roboto.className} fontSize='16px'>
        {paragraph}
      </Text>
    </Box>
  )
}

export default ModalBox
