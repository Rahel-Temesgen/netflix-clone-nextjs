'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiChevronRight } from 'react-icons/fi'

const Authentication = () => {
  const [email, setEmail] = useState('')
  // const [registeredUsers, setRegisteredUsers] = useState([])
  const router = useRouter()

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(registeredUsers))
  //   console.log(registeredUsers)
  //   console.log(JSON.parse(localStorage.getItem('users')))
  // }, [registeredUsers])

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (registeredUsers.includes(email)) {
    //   alert('You have already registered, please sign in!')
    // } else {
    //   setRegisteredUsers((prev) => [...prev, email])

    //   router.push('/home')
    // }

    router.push('/home')
    setEmail('')
  }

  return (
    <section className='text-white p-8 md:px-[20vw]'>
      <p className='text-center leading-14'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-[66%_34%] gap-2 w-full'
      >
        <input
          type='email'
          placeholder='Email address'
          name='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className='border border-[#4b4a4a] text-[17x] p-4 bg-[rgba(30,30,30,0.48)] rounded-sm'
        />
        <button
          type='submit'
          className='flex items-center justify-center gap-4 bg-red-600 p-4 capitalize  rounded-sm hover:bg-red-700 hover:cursor-pointer'
        >
          <span className='font-medium text-[17px] md:text-[1.8vw]'>
            get started
          </span>
          <FiChevronRight strokeWidth={2} className='text-3xl' />
        </button>
      </form>
    </section>
  )
}

export default Authentication
