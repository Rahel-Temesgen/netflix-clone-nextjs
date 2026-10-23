'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import netflixLogo from '../../../public/netflix_logo.png'
import profilePicture from '../../../public/profilePicture.webp'

const NavigationBar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 flex justify-between items-center gap-[3vw] w-full transition-opacity bg-[rgba(0,0,0,0.5)] py-1 px-6 ${isScrolled ? 'navbar' : null} z-50`}
      >
        <div className='flex gap-8'>
          <div className='w-18 h-12 md:w-[7vw] md:h-[3.5vw] relative'>
            <Image src={netflixLogo} alt='netflix logo' fill unoptimized />
          </div>
          <div className='flex items-center gap-2.5 text-[2vw] md:text-[1vw] text-gray-300'>
            <Link href='/home' className='focus:text-white'>
              Home
            </Link>
            <Link href='/tvShows' className='focus:text-white'>
              TVShows
            </Link>
            <Link href='/movies' className='focus:text-white'>
              Movies
            </Link>
            <Link href='/recent' className='focus:text-white'>
              Recently Added
            </Link>
            <Link href='/myList' className='focus:text-white'>
              My List
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-[2vw]'>
          <span className='text-white text-2xl md:text-[1.5vw]'>
            <FaSearch />
          </span>
          <Link href='/'>
            <div className='w-8 h-8 md:w-[3vw] md:h-[3vw] relative'>
              <Image
                src={profilePicture}
                alt='profile picture'
                fill
                unoptimized
                className='rounded-sm '
              />
            </div>
          </Link>
        </div>
      </nav>
      {children}
    </>
  )
}

export default NavigationBar
