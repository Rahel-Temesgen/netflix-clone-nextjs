'use client'

import { useState, useEffect } from 'react'

const FiltrationBar = ({ children }) => {
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
        className={`${isScrolled ? 'null' : 'hidden'} fixed top-16 left-0 text-white text-sm  bg-black w-full z-50`}
      >
        <h1>Movies</h1>
        <div>
          <select>
            <option>Genre</option>
            <option>comedy</option>
            <option>Horror</option>
            <option>Romance</option>
          </select>
          <button type='button'>New & Popular</button>
          <button type='button'>New & Popular</button>
          <button type='button'>New & Popular</button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default FiltrationBar
