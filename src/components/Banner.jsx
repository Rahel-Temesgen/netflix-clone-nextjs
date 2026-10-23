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
      className='h-[80vh] sm:h-screen bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className='flex items-start py-38 h-[80vh] sm:h-screen bg-linear-to-r from-[rgba(0,0,0,0.8)] to-transparent'>
        <div className='mx-6 w-[60vw] md:w-[50vw] lg:w-[40vw]'>
          <div className='flex items-center gap-1 my-2'>
            <Image
              src={netflixIcon}
              alt='netflix-icon'
              width={0}
              height={0}
              className='w-5 h-5 md:w-8 md:h-8 '
            />
            <p className='uppercase text-gray-300 text-sm md:text-md tracking-[1vw]'>
              {movie.media_type === 'movie' ? 'movie' : 'series'}
            </p>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
            {movie.media_type === 'movie' ? movie.title : movie.name}
          </h1>
          <div className='flex flex-wrap max-w-full gap-2 my-5'>
            <Link
              href={`/watch/${movie.id}?type=${movie.media_type}`}
              className='flex items-center gap-[1vw] text-black bg-white px-[1.5vw] py-[0.5vw] text-sm md:text-lg lg:text-xl rounded-xs hover:bg-gray-300'
            >
              <IoPlaySharp />
              Play
            </Link>
            <Link
              href={`/movieDetail/${movie.id}?title=${movie.media_type === 'movie' ? movie.title : movie.name}&backdrop_path=${movie.backdrop_path}&overview=${movie.overview}&type=${movie.media_type}`}
              className='flex items-center gap-[1vw] bg-gray-500 px-[1.5vw] py-[0.5vw] text-sm md:text-lg lg:text-xl rounded-xs  hover:bg-gray-600'
            >
              <FiInfo strokeWidth={3} />
              More Info
            </Link>
          </div>
          <p className='my-5 text-xs md:text-lg lg:text-xl text-gray-300'>
            {movie?.overview
              ? movie.overview.split(' ').length > 30
                ? movie.overview.split(' ').slice(0, 30).join(' ') + '...'
                : movie.overview
              : ''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
