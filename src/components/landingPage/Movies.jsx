import Image from 'next/image'
import { movies } from '../../data'

const Movies = () => {
  return (
    <section>
      <div className='relative -top-5 left-0 right-0 border-t-4 border-red-400 rounded-tl-[100%] rounded-tr-[100%] radial-bg w-full h-15'></div>
      <main className='px-8 md:px-[11vw]'>
        <h2 className='text-white text-lg md:text-[1.8vw] font-medium'>
          Trending Now
        </h2>
        <div className='flex w-full overflow-auto touch-auto scroll-smooth no-scrollbar snap-mandatory snap-x'>
          {movies.map((movie) => {
            const { order, moviePoster } = movie
            return (
              <div
                className='shrink-0 snap-start p-[2.2vw] md:p-[1.8vw]'
                key={order}
              >
                <div className='group  hover:cursor-pointer '>
                  <div className=' w-[113px] h-[150px] md:w-[14.5vw] md:h-[42vh] relative transition duration-300 ease-in-out group-hover:scale-105'>
                    <Image
                      src={moviePoster}
                      alt='movie poster'
                      fill
                      className='rounded-lg'
                    />
                  </div>
                  <svg className='h-1 w-1 stroke-gray-300 stroke-2 overflow-visible select-none pointer-events-none relative z-50 transition duration-300 ease-in-out group-hover:translate-y-0.5'>
                    <text
                      className='text-7xl md:text-[8.5vw] font-bold'
                      x='-22'
                      y='-20'
                    >
                      {order}
                    </text>
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Movies
