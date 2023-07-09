// <Box sx={formStyle} p={{ base: '20px', md: '35px', xl: '50px' }}>
//       <Text
//         fontSize={{ base: '20px', md: '28px', xl: '36px' }}
//         fontWeight={450}
//       >
//         Be a part of this journey
//       </Text>
//       <Text
//         fontSize={{ base: '14px', md: '16px', xl: '18px' }}
//         fontWeight={400}
//         className={roboto.className}
//         my="12px"
//       >
//         Provide your email to be among the first to experience the full power of
//         Etherlink when it launches.
//       </Text>
//       <FormControl>
//         <Input
//           bg='#F4F4EA'
//           mb='30px'
//           mt='10px'
//           h="50px"
//           placeholder='Name'
//           onChange={e => setName(e.target.value)}
//           value={name}
//           ref={signupRef}
//         />
//          {!!errorMessage.length && (
//           <Text fontSize={12} color='red'>
//             {errorMessage}
//           </Text>
//         )}
//         <Input
//           type='email'
//           bg='#F4F4EA'
//           mb='40px'
//           h="50px"
//           placeholder='Email address'
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           onKeyUp={handleKepUp}
//         />
//         <Button
//           mb='35px'
//           w='100%'
//           bg='#0000ff'
//           color='#FFFFFF'
//           borderRadius={750}
//           onClick={submit}
//           isDisabled={!name.length || !email.length}
//           _disabled={{bg: '#C5C5C5'}}
//           _hover={name.length && email.length ? { bg: '#0000b3' } : { bg: '', cursor: 'no-drop' }}
//         >
//           Sign up
//         </Button>
// {
//   isSubmitted && (
//   <Flex bg="#037E01" color='white' borderRadius={5} p="12px 0px 12px 14px" mb="10px">
//     <Image alignSelf='center' h='20px' w='20px' src='/tick.png' />
//     <Text pl='10px' className={roboto.className}>Thank you for your interest, we’ll be in touch</Text>
//   </Flex>)
// }
//         <FormHelperText
//           fontSize={{ base: '12px', xl: '14px' }}
//           fontWeight={400}
//           className={roboto.className}
//         >
//           Note: We respect your privacy and promise not to share your
//           information with third parties.
//         </FormHelperText>
//       </FormControl>
//     </Box>
