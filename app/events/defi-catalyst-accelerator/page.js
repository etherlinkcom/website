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
      <div className='mt-32 w-4/5 mx-auto max-w-screen-2xl'>
        <Cta
          headerText='DCA with us'
          descriptionText='Join our community of crypto founders and the wider Tezos community.'
          buttonText='Apply Now'
          buttonUrl='https://tt-tezos.typeform.com/to/EURHmEhg'
        />
      </div>
    </>
  )
}

export default Home
