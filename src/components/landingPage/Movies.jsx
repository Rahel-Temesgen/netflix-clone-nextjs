'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Movies = () => {
  const [movies, setMovies] = useState([])

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
        setMovies(data.results)
      } catch (error) {
        console.error('fetch failed: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section>
      <div className='relative -top-5 left-0 right-0 border-t-4 border-red-400 rounded-tl-[100%] rounded-tr-[100%] radial-bg w-full h-15'></div>
      <main className='px-8 md:px-[11vw]'>
        <h2 className='text-white text-lg md:text-[1.8vw] font-medium'>
          Trending Now
        </h2>
        <div className='flex w-full overflow-auto touch-auto scroll-smooth no-scrollbar snap-mandatory snap-x'>
          {movies.map((movie, index) => {
            if (index >= 10) return null
            return (
              <div className='shrink-0 snap-start p-3 md:p-[1.8vw]' key={index}>
                <Link href='/signIn'>
                  <div className='relative group  hover:cursor-pointer'>
                    <div className=' w-29 h-38 md:w-[14.5vw] md:h-[42vh] relative transition duration-300 ease-in-out group-hover:scale-105'>
                      <Image
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt='movie poster'
                        fill
                        unoptimized
                        className='rounded-lg'
                      />
                    </div>
                    <h1 className='absolute top-18 md:top-32 -left-4 md:-left-7 text-7xl md:text-[8.5vw] [-webkit-text-stroke:2px_rgba(366,366,366,0.9)] font-bold text-black z-50 transition duration-300 ease-in-out group-hover:translate-y-0.5'>
                      {index + 1}
                    </h1>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Movies
