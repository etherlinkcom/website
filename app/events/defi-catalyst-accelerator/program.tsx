export default function Program() {
  return (
    <div
      className='py-10 md:py-20 border-t border-b border-darkGreen'
      id='schedule'
    >
      <div className='mb-10'>
        <h1 className='text-2xl md:text-3xl font-semibold'>Our Program</h1>
        <h2 className='text-lg md:text-2xl mt-6 mb-16 md:w-3/5'>
          2-week in-person onboarding followed by a 4-week fully remote program
          for global participants.
        </h2>
      </div>
      <div className='flex flex-col md:flex-row justify-between mb-8 md:mb-16 gap-4 md:gap-12'>
        <div>
          <p className='text-darkGreen font-semibold text-xl md:text-2xl mb-1'>
            Week 1 - 2
          </p>
          <p>Singapore</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:w-3/4 gap-8'>
          <Card
            title='Meet the mentors, cohort, & local ecosystem'
            text='Begin collaborating intensively your mentors covering each aspect of your project, in addition to meeting with other cohort members and networking with the Web3 VC and builder community in Singapore.'
          />
          <Card
            title='Validate your idea & start budgeting'
            text='Call experts in the field, link with external stakeholders and run customer surveys.
              The goal is to make sure you are on to something that appeals to potential customers and can scale.'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between mb-8 md:mb-16 gap-4 md:gap-12'>
        <div>
          <p className='text-darkGreen font-semibold text-xl md:text-2xl'>
            Week 3 - 6
          </p>
          <p>Remote</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:w-3/4 gap-8'>
          <Card
            title='Mentorship & lectures'
            text='Learn how to build in crypto and grow your product. Start attending weekly check-ins and live lectures.'
          />
          <Card
            title='Early MVP work'
            text='Get started on designing the user journey and workflows for both the UI and the backend of your application or service.'
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-12'>
        <div>
          <p className='text-darkGreen font-semibold text-xl md:text-2xl'>
            End of week 6
          </p>
          <p>Investor Committee</p>
        </div>
        <div className='grid grid-cols-1 md:w-3/4 gap-8'>
          <p className='text-xl md:text-2xl font-semibold'>
            Present your product to leading VCs & experts for investment.
          </p>
        </div>
      </div>
    </div>
  )
}

const Card = ({ text, title }: { title: string; text: string }) => {
  return (
    <div className='flex flex-col'>
      <text className='font-semibold text-xl md:text-2xl mb-4'>{title}</text>
      <text className='text-md md:text-lg'>{text}</text>
    </div>
  )
}
