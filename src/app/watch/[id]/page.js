import Link from 'next/link'
import { FiX } from 'react-icons/fi'

const page = async ({ params, searchParams }) => {
  const { id } = await params
  const { type } = await searchParams

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`

  const response = await fetch(url)
  const data = await response.json()
  const key = data.results[0].key

  return (
    <div className='flex flex-col justify-center'>
      <Link
        href='/home'
        className='text-white text-[4vw] md:text-3xl px-4 py-2'
      >
        <FiX strokeWidth={2} />
      </Link>
      <iframe
        src={`https://www.youtube.com/embed/${key}`}
        allowFullScreen
        className='w-full h-[500px]'
      ></iframe>
    </div>
  )
}

export default page
