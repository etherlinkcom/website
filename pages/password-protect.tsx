import React, { useState } from 'react'
import Router from 'next/router'
import { Box, Flex, Button, Center, Text } from '@chakra-ui/react'
import PasswordInput from '@/components/PasswordInput'

const PasswordProtectPage = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async () => {
    setError('')

    const res = await fetch('/api/password-protect', {
      body: JSON.stringify({
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    if (res.status == 200) {
      Router.push('/')
    } else {
      setError('Wrong Passwrod')
    }
  }

  return (
    <Center bg='white' mt='30%'>
      <Box>
        <Flex>
          <PasswordInput password={password} setPassword={setPassword} />
          <Button
            ml='10px'
            colorScheme='messenger'
            onClick={submit}
            isDisabled={!password.length}
          >
            Login
          </Button>
        </Flex>
        {error && (
          <Text color='red' fontWeight={700}>
            {error}
          </Text>
        )}
      </Box>
    </Center>
  )
}
export default PasswordProtectPage
