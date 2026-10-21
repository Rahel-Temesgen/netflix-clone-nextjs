'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import netflixLogo from '../../../public/netflix_logo.png'

const signInPage = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/home')
    setEmail('')
  }
  return (
    <section className='bg-gradient-to-b from-[#411417]  to-transparent min-h-screen '>
      <header className='border-b border-[rgba(109,97,97,0.4)] px-5 py-4'>
        <div className='w-[110px] h-[50px] relative'>
          <Image src={netflixLogo} alt='netflix logo' fill sizes='110px' />
        </div>
      </header>
      <main className='flex justify-center items-center '>
        <div className='flex flex-col justify-center items-center px-22 py-8'>
          <div className='w-full space-y-1'>
            <h1 className='text-white text-[5vw] md:text-5xl font-bold text-center'>
              Enter your info to get started
            </h1>
            <p className='text-[#adaeae] text-md md:text-lg'>
              Or sign in to an existing account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className='space-y-3 w-full  my-5'>
            <input
              type='email'
              placeholder='Email address'
              name='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className='border border-[#4b4a4a] text-white text-[17x] p-3 bg-[rgba(11,11,11,0.48)] rounded-sm w-full'
            />
            <button
              type='submit'
              className='flex items-center justify-center gap-4 bg-red-600 text-white font-medium text-[19px] p-3 capitalize  rounded-sm hover:bg-red-700 hover:cursor-pointer w-full'
            >
              Continue
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default signInPage
