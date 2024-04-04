import Main from './main'
import Features from './features'
import Program from './program'
import Faq from './faq'
import Cta from '../../components/cta'

export const metadata = {
  title: 'Etherlink',
  description: 'Build Web3 on Etherlink'
}

const Home = () => {
  return (
    <>
      <Main />
      <Features />
      <Program />
      <Faq />
      <div className='mt-16'>
        <Cta
          headerText='DCA with us'
          descriptionText='Join our community of founders and the wider Tezos community.'
          buttonText='Follow Us'
          buttonUrl='https://twitter.com/etherlink'
        />
      </div>
    </>
  )
}

export default Home
