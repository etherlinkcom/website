import Container from '../components/container'
import { Header } from './Header'
import { Content } from './Content'
import { Cta } from './Cta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etherlink Cookie Policy'
}

const startStyle =
  'text-grey-50 text-lg font-light leading-[28px] -tracking-[0.36px]'
const olStyle =
  'list-decimal space-y-4 font-light text-grey-50 mb-[40px] md:mb-[80px]'
const olItemStyle = 'grid grid-cols-[2rem_1fr] gap-4'

const Cookies = () => {
  return (
    <Container className='max-w-[800px] mt-[40px] md:mt-[60px]'>
      <p className='text-neonGreen-500 text-sm mb-3'>
        Last updated: March 6, 2025
      </p>
      <h1 className='text-neonGreen-500 font-semibold mb-[40px] text-4xl'>
        <span className='text-grey-50'>Cookie</span> Policy
      </h1>
      <p className='text-neonGreen-500 text-2xl font-semibold -tracking-[0.48px] mb-3'>
        Tezos foundation
      </p>
      <p className={`mb-2 ${startStyle}`}>
        Our website uses cookies and similar technologies (including tracking
        pixels, web beacons and tags) to, for example, distinguish you from
        other users of our website. This helps us to provide you with a good
        experience when you browse our website and also allows us to improve our
        website.
      </p>
      <p className={`mb-[40px] md:mb-[80px] ${startStyle}`}>
        A cookie is a small file of letters and numbers that we store on your
        browser or the hard drive of your computer if you agree. Cookies contain
        information that is transferred to your computer's hard drive.
      </p>

      <Header text='1. TYPES OF COOKIES' />
      <p className='mb-4 text-grey-50'>
        We may, from time to time, use the following cookies:
      </p>
      <ol className={olStyle}>
        <li className={olItemStyle}>
          <span className='font-semibold'>1.1</span>
          <p>
            <span className='font-semibold'>Strictly necessary cookies.</span>{' '}
            These are required for the operation of our website. They include,
            for example, cookies that enable you to log into secure areas of our
            website.
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>1.2</span>
          <p>
            <span className='font-semibold'>Functional cookies.</span> These are
            used to recognize you when you return to our website. This enables
            us to personalize our content for you, greet you by name, and
            remember your preferences.
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>1.3</span>
          <p>
            <span className='font-semibold'>Analytics cookies.</span> These are
            used to collect data that allows us to understand how you interact
            with our website. These insights allow us both to improve content
            and to build better features that improve your experience.
          </p>
        </li>
      </ol>

      <Header text='2.	EXPLICIT CONSENT' />
      <Content
        className='mb-[40px] md:mb-[80px]'
        text='Our website will not set any non-essential cookies unless you have provided explicit consent through our cookie consent banner.'
      />

      <Header text='3.	 DETAILED INFORMATION ON COOKIES' />
      <p className='mb-4 text-grey-50'>
        Below is a detailed list of the cookies we use on our website:
      </p>
      <ol className={olStyle}>
        <li className={olItemStyle}>
          <span className='font-semibold'>3.1</span>
          <p>
            <span className='font-semibold'>User:</span> Enables our site to
            remember the user's cookies approval decision. Expires 100 days
            after creation. (First-party cookie)
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>3.2</span>
          <p>
            <span className='font-semibold'>Google Analytics Cookies:</span>{' '}
            Used to collect information about how visitors use our site. Expires
            after the session or up to 2 years. (Third-party cookie). More
            information about which cookies are used by Google Cookies on our
            website can be found at the following link:{' '}
            <a
              href='https://business.safety.google/adscookies/'
              target='_blank'
              className='underline'
            >
              https://business.safety.google/adscookies/
            </a>
          </p>
        </li>
      </ol>

      <Header text='4. LEGAL BASIS FOR PROCESSING PERSONAL DATA' />
      <p className='mb-4 text-grey-50'>
        The legal basis for processing personal data collected through cookies
        and similar technologies is your consent (Article 6(1)(a) GDPR). For
        essential cookies, the legal basis is our legitimate interest in
        ensuring the proper functioning of our website (Article 6(1)(f) GDPR).
      </p>
      <p className='mb-4 text-grey-50'>User Rights and Data Protection</p>
      <p className='mb-4 text-grey-50'>
        As a user, you have the following rights under GDPR and UKGDPR:
      </p>
      <ul className='list-none space-y-4 text-gray-50 mb-[40px] md:mb-[80px]'>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to withdraw your consent at any time.</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to access your data.</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to rectification of inaccurate data.</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to erasure ('right to be forgotten').</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to restrict processing.</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to data portability.</p>
        </li>
        <li className='grid grid-cols-[1.5rem_1fr] gap-4'>
          <span className='font-bold'>•</span>
          <p>The right to object to processing.</p>
        </li>
      </ul>

      <Header text='5.	OTHER INFORMATION ABOUT COOKIES' />
      <ol className={olStyle}>
        <li className={olItemStyle}>
          <span className='font-semibold'>5.1</span>
          <p>
            We may share the information collected by cookies and similar
            technologies with third parties in accordance with our legitimate
            data processing purposes set out in our Privacy Policy.
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>5.2</span>
          <p>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. However, please
            note that disabling or refusing cookies may affect the functionality
            and features of our website.
          </p>
        </li>
      </ol>

      <Header text='6.	Data Transfers' />
      <Content
        className='mb-[40px] md:mb-[80px]'
        text='Data collected through cookies may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure that appropriate safeguards are in place to protect your data, such as standard contractual clauses approved by the European Commission.'
      />

      <Cta
        title='How do I start building on Etherlink?'
        desc='Great question! Start with this documentation and also:'
        btn={{
          text: 'Join our Discord',
          link: 'https://discord.com/invite/etherlink'
        }}
        icon={<img src='/img/icons/green-discord.svg' alt='discord icon' />}
      />
    </Container>
  )
}

export default Cookies
