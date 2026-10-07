import { reasonsToJoin } from '../../data'

const JoinUs = () => {
  return (
    <section className='p-8 md:px-[11vw]'>
      <h4 className='text-white text-lg md:text-[1.8vw] font-medium my-[1vw]'>
        More Reasons to Join
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 lg:gap-4'>
        {reasonsToJoin.map((reason, index) => {
          const { title, description, icon } = reason
          return (
            <div
              key={index}
              className='flex flex-col p-4 bg-[linear-gradient(150deg,#1a2145_0%,#29101b_100%)] rounded-2xl'
            >
              <h2 className='text-[20px] md:text-[1.9vw] font-medium text-white leading-8 my-[1vw]'>
                {title}
              </h2>
              <p className='text-[#bebdbd] leading-5'>{description}</p>
              <div className='grow flex justify-end items-end w-full text-5xl text-[#bebdbd] pt-[5vw]'>
                {icon}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default JoinUs
