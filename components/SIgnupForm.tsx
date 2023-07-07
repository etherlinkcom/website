import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FormControl, FormHelperText, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import * as EmailValidator from 'email-validator'
import { roboto } from '@/theme/fonts'

export default forwardRef(function SignupForm({
  signupRef
}: {
  signupRef: React.RefObject<HTMLInputElement>
}) {
  const formStyle = {
    background: 'white',
    borderRadius: 20,
    maxWidth: ['100%', null, '545px'],
    minW: '300px',
    minH: '414px'
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const submit = async () => {
    const isEmailValid = EmailValidator.validate(email)

    if (!isEmailValid) {
      setErrorMessage('Email is not valid.')
    } else {
      // to be finished after setting up CRM
      setErrorMessage('')

      const res = await fetch('/api/subscribeUser', {
        body: JSON.stringify({
          name,
          email
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      setName('')
      setEmail('')
    }
  }

  return (
    <Box sx={formStyle} p={{ base: '20px', md: '35px', xl: '50px' }}>
      <Text
        fontSize={{ base: '20px', md: '28px', xl: '36px' }}
        fontWeight={450}
      >
        Be a part of this journey
      </Text>
      <Text
        fontSize={{ base: '14px', md: '16px', xl: '18px' }}
        fontWeight={400}
        className={roboto.className}
        my="12px"
      >
        Provide your email to be among the first to experience the full power of
        Etherlink when it launches.
      </Text>
      <FormControl>
        <Input
          bg='#F4F4EA'
          mb='30px'
          mt='10px'
          h="50px"
          placeholder='Name'
          onChange={e => setName(e.target.value)}
          value={name}
          ref={signupRef}
        />
        <Input
          type='email'
          bg='#F4F4EA'
          mb='40px'
          h="50px"
          placeholder='Email address'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        {!!errorMessage.length && (
          <Text fontSize={12} color='red'>
            {errorMessage}
          </Text>
        )}
        <Button
          mb='35px'
          w='100%'
          bg='#003BE8'
          color='#FFFFFF'
          borderRadius={750}
          onClick={submit}
          isDisabled={!name.length || !email.length}
        >
          Sign up
        </Button>
        <FormHelperText
          fontSize={{ base: '12px', xl: '14px' }}
          fontWeight={400}
          className={roboto.className}
        >
          Note: We respect your privacy and promise not to share your
          information with third parties.
        </FormHelperText>
      </FormControl>
    </Box>
  )
})
