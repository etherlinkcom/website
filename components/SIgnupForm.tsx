import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
  FormControl,
  FormHelperText,
  Input,
  Button,
  Image,
  Flex
} from '@chakra-ui/react'
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
    w: '600px',
    maxWidth: ['100%', null, '600px', '545px'],
    minW: '300px',
    minH: '414px'
  }
  const submitBtnStyle = {
    background: 'red'
  }

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(true)

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
    setFname('')
    setLname('')
    setEmail('')
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

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
            action='https://tezos.us6.list-manage.com/subscribe/post?u=80b9a27c332a234b4cac5c13b&amp;id=f9f1bf7266&amp;f_id=00fcd5e0f0'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='_blank'
            onSubmit={handleSubmit}
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
                  style={{ background: '#F4F4EA' }}
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
                  style={{ background: '#F4F4EA' }}
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
                  style={{ background: '#F4F4EA' }}
                />
              </div>
              <div id='mce-responses' className='clearfalse'>
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
              </div>
              <div
                aria-hidden='true'
                style={{ position: 'absolute', left: '-5000px' }}
              >
                <input
                  type='text'
                  name='b_80b9a27c332a234b4cac5c13b_f9f1bf7266'
                  tabIndex={-1}
                  value=''
                />
              </div>
              <div className='clear'>
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
                    height: '50px'
                  }}
                  value='Subscribe'
                />
              </div>
            </div>
            {isSubmitted && (
              <Flex
                bg='#037E01'
                color='white'
                borderRadius={5}
                p='12px 0px 12px 14px'
                mb='10px'
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
          </form>
        </div>
        <script
          type='text/javascript'
          src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
        ></script>
        {/* <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=EMAIL;ftypes[0]=merge;,fnames[1]=FNAME;ftypes[1]=merge;,fnames[2]=LNAME;ftypes[2]=merge;,fnames[3]=ADDRESS;ftypes[3]=merge;,fnames[4]=PHONE;ftypes[4]=merge;false}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
      </div>
    </Box>
  )
})
