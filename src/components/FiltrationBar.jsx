'use client'

import { useState, useEffect } from 'react'

const FiltrationBar = ({ title }) => {
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
    <div>
      <div
        className={`fixed top-0 left-0 text-white text-sm bg-black w-full z-40 px-6 pb-3 pt-16 space-y-4
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
  `}
      >
        <h1 className='font-medium text-2xl'>{title}</h1>
        <div className='flex overflow-x-auto overflow-y-hidden touch-auto scroll-smooth no-scrollbar snap-mandatory snap-x space-x-6'>
          <select className='shrink-0 border border-gray-500 rounded-md text-sm px-2'>
            <option>Genres</option>
            <option>comedy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            New & Popular
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Action
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Comedy
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Horror
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Drama
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Romance
          </button>
          <button
            type='button'
            className='shrink-0 border border-gray-500 rounded-md text-sm px-2'
          >
            Documentary
          </button>
        </div>
      </div>
    </div>
  )
}

export default FiltrationBar
