import Container from '../components/container'
import { Header } from './Header'
import { Content } from './Content'
import { Cta } from './Cta'
import { notFound } from 'next/navigation'

const Privacy = () => {
  // waiting for final copy, hide for now
  return notFound()

  return (
    <Container className='max-w-[600px]'>
      <p className='text-neonGreen-500 text-sm mb-3'>
        Last updated: December 2, 2024
      </p>
      <h1 className='text-neonGreen-500 font-semibold mb-3'>
        <span className='text-grey-50'>Cookie</span> Policy
      </h1>

      <Cta
        title='How do I start building on Etherlink?'
        desc='Great question! Start with this documentation and also:'
        btn={{
          text: 'Join our Discord',
          link: 'https://discord.com/invite/etherlink'
        }}
      />
    </Container>
  )
}

export default Privacy
