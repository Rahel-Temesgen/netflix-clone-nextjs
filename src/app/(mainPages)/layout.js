'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import netflixLogo from '../../../public/netflix_logo.png'
import profilePicture from '../../../public/profilePicture.webp'
import Navbar from '../../components/Navbar'

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
        className={`fixed top-0 left-0 w-full transition-opacity bg-[rgba(0,0,0,0.5)] py-1 px-6 ${isScrolled ? 'navbar' : null} z-50`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-20'>
            <Link href='/home'>
              <div className='w-20 h-14 md:w-28 md:h-16 relative'>
                <Image src={netflixLogo} alt='netflix logo' fill unoptimized />
              </div>
            </Link>
            <div className='hidden md:block'>
              <Navbar />
            </div>
          </div>

          <div className='flex items-center gap-5'>
            <span className='text-white text-xl md:text-3xl'>
              <FiSearch strokeWidth={2} />
            </span>
            <Link href='/'>
              <div className='w-8 h-8 md:w-10 md:h-10 relative'>
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
        </div>
      </nav>
      {children}
      <div className='md:hidden'>
        <Navbar mobile={true} />
      </div>
    </>
  )
}

export default NavigationBar
