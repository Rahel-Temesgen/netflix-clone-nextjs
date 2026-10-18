'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from './Header'
import { FiChevronRight } from 'react-icons/fi'

const Hero = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/home')
    setEmail('')
  }

  return (
    <section className='min-h-screen bg-[url(../../public/homePage-bg.jpg)] bg-no-repeat bg-cover bg-top '>
      <main className='min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] from-5% via-[rgba(0,0,0,0.5)] via-20% to-[rgba(0,0,0,0.8)] to-80%'>
        <Header />
        <div className='flex flex-col text-white text-center p-[16vw] md:px-[26vw] md:py-[7vw]'>
          <h1 className='text-4xl md:text-[4.5vw] font-bold md:leading-18'>
            Unlimited movies, TV shows, and more
          </h1>

          <p className='text-md font-normal md:text-[1.5vw] md:font-medium my-4'>
            Starts at USD 2.99. Cancel anytime.
          </p>
          <p className='text-md md:text-[16px] md:mt-4'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            onSubmit={handleSubmit}
            className='grid grid-cols-[57%_43%] md:grid-cols-[62%_38%] gap-2 w-full my-4'
          >
            <input
              type='email'
              placeholder='Email address'
              name='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className='border border-[#4b4a4a] text-[17x] p-3 bg-[rgba(21,21,21,0.48)] rounded-sm'
            />
            <button
              type='submit'
              className='flex items-center justify-center gap-4 bg-red-600 p-3 capitalize  rounded-sm hover:bg-red-700 hover:cursor-pointer'
            >
              <span className='font-medium text-[17px] md:text-[1.9vw]'>
                get started
              </span>
              <FiChevronRight strokeWidth={2} className='text-3xl' />
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default Hero
