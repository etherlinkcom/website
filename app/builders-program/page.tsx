import Container from '../components/container'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

const Program = () => {
  return (
    <div>
      <img
        className='absolute top-0 w-[870px] h-[360px] md:w-[2320px] md:h-[960px] object-cover left-1/2 transform -translate-x-1/2'
        src='/img/builders/etherlink-bg.svg'
        alt='bg img'
      />
      <Container className='min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-138px)] relative justify-center container px-8 py-24 mx-auto flex flex-col items-start'>
        <div className='pb-16'>
          <h1 className='text-[35px] md:text-[55px] font-bold text-white-50 tracking-[-0.7px] md:tracking-[-1.1px] leading-[1.1]'>
            <span className='text-neonGreen-500'>Etherlink</span>
            <br /> Builders Program
          </h1>
          <p className='mt-4 md:text-lg text-[#9B9B9B]'>
            Get mentorship from top experts, find co-founders and get funding to
            accelerate your build.
          </p>
          <PrimaryButton
            className='mt-8 text-lg'
            text='Sign up today'
            href='https://tt-tezos.typeform.com/bp-entry'
            icon={
              <img
                src='/img/builders/arrow-up-right.svg'
                alt='arrow right icon'
              />
            }
          />
        </div>
      </Container>
    </div>
  )
}

export default Program
