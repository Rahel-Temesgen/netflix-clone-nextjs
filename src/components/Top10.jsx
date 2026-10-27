'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { FiPlus, FiChevronDown } from 'react-icons/fi'
// import { IoPlaySharp } from 'react-icons/io5'

const Top10 = ({ category, base_url, type }) => {
  const [movies, setMovies] = useState([])
  // const [isOpen, setIsOpen] = useState(false)
  // const [showOverview, setShowOverview] = useState('')

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
        setMovies(data.results)
      } catch (error) {
        console.error('fetch failed: ', error)
      }
    }
    fetchData()
  }, [])

  // const handleDropdown = (id) => {
  //   setIsOpen(!isOpen)
  //   if (isOpen) {
  //     setShowOverview(id)
  //   } else {
  //     setShowOverview('')
  //   }
  // }

  return (
    <main className='space-y-2'>
      <h2 className='text-white text-md md:text-xl font-medium'>{category}</h2>
      {/* <div
        className={`relative top-[-14vh] md:-top-28 flex items-center w-full h-75
        md:h-100 overflow-x-auto overflow-y-hidden touch-auto scroll-smooth no-scrollbar
        snap-mandatory snap-x px-6 space-x-2  ${lastChild ? 'mb-[-14vh] md:-mb-28' : ''}`}
      > */}
      <div className='flex items-center w-full  overflow-x-auto overflow-y-hidden touch-auto scroll-smooth no-scrollbar snap-mandatory snap-x space-x-2'>
        {movies.map((movie, index) => {
          if (index >= 10) return null

          const isMovie = (type || movie.media_type) === 'movie'

          return (
            <div
              className='shrink-0 snap-start transition duration-300 ease-in-out hover:scale-105'
              key={movie.id}
            >
              {/* <figure
                className={`relative ${index < 9 ? ' w-[157.5px]  md:w-52.5' : 'w-63.75  md:w-85'} transition duration-100 ease-in-out hover:scale-125 hover:z-40 hover:shadow-[0_0_8px_2px_rgba(366,366,366,0.6)] bg-black group`}
              > */}
              <Link
                href={`/movieDetail/${movie.id}?title=${isMovie ? movie.title : movie.name}&backdrop_path=${movie.backdrop_path}&overview=${movie.overview}&type=${type ? type : movie.media_type}`}
              >
                <div
                  className={`flex items-center ${index < 9 ? 'w-[157.5px] md:w-52.5' : 'w-63.75  md:w-85'} h-29.5 md:h-39.5 overflow-hidden`}
                >
                  <h1 className='relative -top-1 md:-top-1.5 left-3 text-[160px] md:text-[215px] [-webkit-text-stroke:3px_gray] font-medium'>
                    {index + 1}
                  </h1>

                  <div className='relative -left-5 md:-left-8 min-w-[50%] h-full '>
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      alt='movie poster'
                      fill
                      unoptimized
                      className='contain'
                    />
                  </div>
                </div>
              </Link>
              {/* <figcaption className='w-full p-2 bg-black hidden group-hover:block'>
                  <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1'>
                      <button className='text-[2vw] md:text-[0.9vw] text-black bg-white border border-white p-1 rounded-full hover:bg-gray-400'>
                        <IoPlaySharp />
                      </button>
                      <button className='text-[2vw] md:text-[0.9vw] text-white bg-black border border-white p-1 rounded-full hover:bg-gray-700 hover:cursor-pointer'>
                        <FiPlus />
                      </button>
                    </span>
                    <button
                      className={`text-[2vw] md:text-[0.9vw] text-white bg-black border border-white p-1 rounded-full hover:bg-gray-700  hover:cursor-pointer ${showOverview === movie.id ? 'rotate-180' : null}`}
                      onClick={() => handleDropdown(movie.id)}
                    >
                      <FiChevronDown />
                    </button>
                  </div>
                  {showOverview === movie.id && (
                    <p className='text-[1vw] md:text-[0.7vw] text-gray-400 my-1.5 space-y-1 transition-all duration-300'>
                      {movie.overview}
                    </p>
                  )}

                  <div className='text-[0.9vw] md:text-[0.6vw] text-gray-400 my-1.5 space-y-0.5'>
                    <p>2h 17m</p>
                    <p>Adventure</p>
                  </div>
                </figcaption>
              </figure> */}
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Top10
