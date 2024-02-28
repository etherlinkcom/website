export default function Program() {
  return (
    <div>
      <div className='my-16 w-4/5 mx-auto max-w-screen-2xl' id='schedule'>
        <div className='mb-10'>
          <h1 className='text-3xl font-semibold md:text-4xl'>Our Program</h1>
          <h2 className='text-xl mt-6 mb-6'>
            2-week in-person onboarding followed by a 4-week fully remote
            program for global participants.
          </h2>
        </div>
        <div className='flex flex-col md:flex-row justify-between mb-12 gap-12'>
          <div>
            <p className='text-gray-500 font-semibold text-3xl mb-1'>
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
        <div className='flex flex-col md:flex-row justify-between mb-12 gap-12'>
          <div>
            <p className='text-gray-500 font-semibold text-3xl'>Week 3 - 6</p>
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
        <div className='flex flex-col md:flex-row justify-between gap-12'>
          <div>
            <p className='text-gray-500 font-semibold text-3xl'>
              End of week 6
            </p>
            <p>Investor Committee</p>
          </div>
          <div className='grid grid-cols-1 md:w-3/4 gap-8'>
            <p className='text-2xl font-semibold'>
              Present your product to leading VCs & experts for investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({ text, title }) => {
  return (
    <div className='flex flex-col'>
      <text className='font-semibold text-2xl mb-4'>{title}</text>
      <text>{text}</text>
    </div>
  )
}
