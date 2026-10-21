import { moreInfo } from '../../data'

const Footer = () => {
  return (
    <footer className='p-8 md:px-[11vw]'>
      <p className='text-[#c6c4c4] text-[16px] mt-5'>
        Questions? Call
        <a href='tel:0800861997' className='underline ml-1'>
          0800 861 997
        </a>
      </p>
      {/* <div className='grid grid-cols-2 gap-3 my-10'> */}
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 my-10'>
        {moreInfo.map((info, index) => {
          return (
            <a
              href='#'
              key={index}
              className='underline text-sm text-[#bbb9b9]'
            >
              {info.title}
            </a>
          )
        })}
      </div>
      <p className='text-[#929090] text-sm md:text-[1.1vw] my-5'>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </footer>
  )
}

export default Footer
