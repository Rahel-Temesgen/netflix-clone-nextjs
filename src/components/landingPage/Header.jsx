import Image from 'next/image'
import Link from 'next/link'
import netflixLogo from '../../../public/netflix_logo.png'

const Navbar = () => {
  return (
  
    <header className='flex justify-between items-center px-8 md:px-[10vw] py-2'>
      
      <div className='w-[110px] h-[50px] md:w-[14vw] md:h-[14vh] relative'>
        <Image src={netflixLogo} alt='netflix logo' fill sizes='14vw' />
      </div>

      <Link
        href='/signIn'
        className='bg-red-600 p-1.5 text-white text-center text-sm font-semibold rounded-sm w-20  hover:bg-red-700 hover:cursor-pointer'
      >
        Sign In
      </Link>
    </header>
  )
}

export default Navbar
