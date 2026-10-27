'use client'

import Link from 'next/link'

const Navbar = ({ mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? 'fixed bottom-0 left-0 flex items-center justify-center gap-10 text-sm text-gray-300 w-full bg-black py-4 z-50'
          : 'flex items-center gap-5 text-md text-gray-300'
      }
    >
      <Link href='/home' className='focus:text-white'>
        Home
      </Link>

      <Link href='/tvShows' className='focus:text-white'>
        TVShows
      </Link>

      <Link href='/movies' className='focus:text-white'>
        Movies
      </Link>

      <Link href='/myList' className='focus:text-white'>
        My List
      </Link>
    </div>
  )
}

export default Navbar
