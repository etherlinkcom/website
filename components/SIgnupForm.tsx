import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { roboto } from '@/theme/fonts'

export default forwardRef(function SignupForm({
  signupRef
}: {
  signupRef: React.RefObject<HTMLInputElement>
}) {
  const formStyle = {
    background: 'white',
    borderRadius: 20,
    w: '600px',
    maxWidth: ['100%', null, '600px', '545px'],
    minW: '300px',
    minH: '414px'
  }

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // const handleKepUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   const key = e.key
  //   if (key === 'Enter') submit()
  // }

  // const submit = async () => {
  //   const isEmailValid = EmailValidator.validate(email)

  //   if (!isEmailValid) {
  //     setErrorMessage('Email is not valid.')
  //   } else {
  //     // to be finished after setting up CRM
  //     setErrorMessage('')

  //     const res = await fetch('/api/subscribeUser', {
  //       body: JSON.stringify({
  //         name,
  //         email
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'POST'
  //     })

  //     setIsSubmitted(true)

  //     setTimeout(() => {
  //       setIsSubmitted(false)
  //     }, 3000)

  //     setEmail('')
  //   }
  // }

  const handleSubmit = () => {
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFname('')
      setLname('')
      setEmail('')
    }, 6000)
  }

  const handleMouseEnter = () => setIsHovering(true)

  const handleMouseLeave = () => setIsHovering(false)

  return (
    <Box sx={formStyle}>
      <div id='mc_embed_shell'>
        <link
          href='//cdn-images.mailchimp.com/embedcode/classic-061523.css'
          rel='stylesheet'
          type='text/css'
        />
        <div id='mc_embed_signup'>
          <form
            onSubmit={handleSubmit}
            action='https://tezos.us6.list-manage.com/subscribe/post?u=80b9a27c332a234b4cac5c13b&amp;id=f9f1bf7266&amp;f_id=00fcd5e0f0'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='_blank'
          >
            <div id='mc_embed_signup_scroll'>
              <h2></h2>
              <div className='indicates-required'>
                <span className='asterisk'>*</span> indicates required
              </div>
              <div className='mc-field-group'>
                <label htmlFor='mce-EMAIL'>
                  Email Address <span className='asterisk'>*</span>
                </label>
                <input
                  type='email'
                  name='EMAIL'
                  className='required email'
                  id='mce-EMAIL'
                  required={true}
                  value={email}
                  ref={signupRef}
                  onChange={e => setEmail(e.target.value)}
                  style={{ background: '#F4F4EA', height: '50px' }}
                />
                <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
              </div>
              <div className='mc-field-group'>
                <label htmlFor='mce-FNAME'>First Name </label>
                <input
                  type='text'
                  name='FNAME'
                  className=' text'
                  id='mce-FNAME'
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  style={{ background: '#F4F4EA', height: '50px' }}
                />
              </div>
              <div className='mc-field-group'>
                <label htmlFor='mce-LNAME'>Last Name </label>
                <input
                  type='text'
                  name='LNAME'
                  className=' text'
                  id='mce-LNAME'
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                  style={{
                    background: '#F4F4EA',
                    height: '50px',
                    marginBottom: '40px'
                  }}
                />
              </div>

              {/* <div id='mce-responses' className='clearfalse'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                ></div>
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                ></div>
              </div> */}
              {/* <div
                aria-hidden='true'
                style={{ position: 'absolute', left: '-5000px' }}
              >
                <input
                  type='text'
                  name='b_80b9a27c332a234b4cac5c13b_f9f1bf7266'
                  tabIndex={-1}
                />
              </div> */}

              <input
                type='submit'
                name='subscribe'
                id='mc-embedded-subscribe'
                className={'button'}
                style={{
                  marginBottom: '35px',
                  width: '100%',
                  background: '#0000ff',
                  color: '#FFFFFF',
                  borderRadius: '750px',
                  fontSize: '16px',
                  height: '50px',
                  backgroundColor: isHovering ? '#0000b3' : '#0000ff'
                }}
                value='Sign up'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleSubmit}
              />
            </div>
            {isSubmitted && (
              <Flex
                bg='#037E01'
                color='white'
                borderRadius={5}
                p='12px 0px 12px 14px'
                mb='15px'
              >
                <Image alignSelf='center' h='20px' w='20px' src='/tick.png' />
                <Text
                  pl={['8px', null, '10px']}
                  fontSize={['14px', null, '18px']}
                  className={roboto.className}
                >
                  Thank you for your interest, we’ll be in touch
                </Text>
              </Flex>
            )}

            <Text
              fontSize={['12px', '14px', '16px']}
              fontWeight={400}
              w={380}
              className={roboto.className}
            >
              Note: We respect your privacy and promise not to share your
              information with third parties.
            </Text>
          </form>
        </div>
        <script
          type='text/javascript'
          src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
        ></script>
      </div>
    </Box>
  )
})
