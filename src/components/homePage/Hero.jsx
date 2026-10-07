'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'
import netflixIcon from '../../app/favicon.ico'

const Hero = () => {
  const [movie, setMovie] = useState({})

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`

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
        <div className='mx-6 w-[45vw] md:max-w-[350px]'>
          <div className='flex gap-1'>
            <Image
              src={netflixIcon}
              alt='netflix-icon'
              width={20}
              height={20}
            />
            <p className='uppercase text-gray-300 text-[12px] tracking-[8px]'>
              {movie.media_type === 'movie' ? 'movie' : 'series'}
            </p>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold'>
            {movie.media_type === 'movie' ? movie.title : movie.name}
          </h1>
          <div className='flex gap-2 my-5'>
            <Link
              href={`/watch/${movie.id}?type=${movie.media_type}`}
              className='flex items-center gap-2 text-black bg-white px-4 py-1 text-[14px] rounded-[2px]'
            >
              <FaPlay />
              Play
            </Link>
            <Link
              href={`/movieDetail/${movie.id}?title=${movie.media_type === 'movie' ? movie.title : movie.name}&backdrop_path=${movie.backdrop_path}&overview=${movie.overview}&type=${movie.media_type}`}
              className='flex items-center gap-2 bg-gray-500 px-4 py-1 text-[14px] rounded-[2px] '
            >
              <FaInfoCircle />
              More Info
            </Link>
          </div>
          <p className='my-5 text-[14px] text-gray-400'>{movie.overview}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
