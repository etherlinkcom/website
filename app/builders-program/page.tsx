import Container from '../components/container'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

const Program = () => {
  return (
    <div className='relative w-full h-screen -translate-y-[104px] md:-translate-y-[138px] overflow-hidden'>
      <img
        className='absolute top-0 w-[870px] h-[360px] md:w-[2320px] md:h-[960px] object-cover'
        src='/img/builders/etherlink-bg.svg'
        alt='bg img'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <Container className='flex flex-col items-start'>
          <h1 className='text-[35px] md:text-[55px] md:text-5xl font-bold text-white tracking-[-0.7px] md:tracking-[-1.1px]'>
            <span className='text-newGreen'>Etherlink</span>
            <br /> Builders' Program
          </h1>
          <p className='mt-4 md:text-lg text-[#9B9B9B]'>
            Your gateway to decentralized innovation - applications now open.
          </p>
          <PrimaryButton
            className='mt-8 text-lg'
            text='Sign up today'
            href='https://tt-tezos.typeform.com/bp-entry'
            icon={
              <img
                src='/img/home/arrow-right.svg'
                alt='arrow right icon'
                className='rotate-[-45deg]'
              />
            }
          />
        </Container>
      </div>
    </div>
  )
}

export default Program
