import Link from 'next/link'
import { FiX, FiPlus } from 'react-icons/fi'
import { IoPlaySharp } from 'react-icons/io5'

const page = async ({ params, searchParams }) => {
  const { id } = await params
  const { title, backdrop_path, overview, type } = await searchParams

  return (
    <section
      className='min-h-screen bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
      }}
    >
      <div className='flex flex-col gap-[10vw] md:gap-10 '>
        <Link href='/home' className='text-white text-lg md:text-3xl px-4 py-2'>
          <FiX strokeWidth={2} />
        </Link>
        <div className='w-[70vw] md:w-[50vw] px-8'>
          <p className='text-sm md:text-lg text-gray-300 capitalize'>
            a netflix original film
          </p>
          <h1 className='text-4xl md:text-6xl text-white font-medium my-2'>
            {title}
          </h1>
          <p className='text-sm md:text-lg text-gray-300 my-2'>{overview}</p>
          <div className='space-y-2 my-4'>
            <Link
              href={`/watch/${id}?type=${type}`}
              className='flex items-center text-sm md:text-lg gap-[1vw] border border-gray-300 rounded-sm px-2 hover:bg-[rgba(152,150,150,0.5)] w-[65%] md:w-[50%]'
            >
              <IoPlaySharp />
              Play
            </Link>
            <button className='flex items-center text-sm md:text-lg gap-[1vw]  border border-gray-300 rounded-sm px-2 hover:bg-[rgba(152,150,150,0.5)] w-[65%] md:w-[50%]'>
              <FiPlus strokeWidth={5} />
              Add to My List
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
