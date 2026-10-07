'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoPlaySharp } from 'react-icons/io5'
import { FiInfo } from 'react-icons/fi'
import netflixIcon from '../app/favicon.ico'

const Banner = ({ base_url }) => {
  const [movie, setMovie] = useState({})

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `${base_url}?api_key=${API_KEY}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setMovie(data.results[0])
      } catch (error) {
        console.error('fetch failed: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      className='min-h-[80vh] bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className='flex items-center h-[80vh] bg-linear-to-r from-[rgba(0,0,0,0.8)] to-transparent'>
        <div className='mx-6 w-[45vw] md:w-[30vw]'>
          <div className='flex items-center gap-1'>
            <Image
              src={netflixIcon}
              alt='netflix-icon'
              width={0}
              height={0}
              className='w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw]'
            />
            <p className='uppercase text-gray-300 text-[1.7vw] md:text-[1vw] tracking-[1vw]'>
              {movie.media_type === 'movie' ? 'movie' : 'series'}
            </p>
          </div>
          <h1 className='text-[7vw] md:text-6xl leading-[6.5vw] md:leading-[4.5vw] font-bold'>
            {movie.media_type === 'movie' ? movie.title : movie.name}
          </h1>
          <div className='flex flex-wrap max-w-full gap-2 my-5'>
            <Link
              href={`/watch/${movie.id}?type=${movie.media_type}`}
              className='flex items-center gap-[1vw] text-black bg-white px-[1.5vw] py-[0.5vw] text-[1.9vw] md:text-[1.1vw] rounded-[2px] hover:bg-gray-300'
            >
              <IoPlaySharp />
              Play
            </Link>
            <Link
              href={`/movieDetail/${movie.id}?title=${movie.media_type === 'movie' ? movie.title : movie.name}&backdrop_path=${movie.backdrop_path}&overview=${movie.overview}&type=${movie.media_type}`}
              className='flex items-center gap-[1vw] bg-gray-500 px-[1.5vw] py-[0.5vw] text-[1.9vw] md:text-[1.1vw] rounded-[2px]  hover:bg-gray-600'
            >
              <FiInfo strokeWidth={3} />
              More Info
            </Link>
          </div>
          <p className='my-5 text-[1.9vw] md:text-[1.1vw] text-gray-300'>
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
