import Banner from '../../../components/Banner'
import Movies from '../../../components/Movies'
import Top10 from '../../../components/Top10'

const moviesPage = () => {
  return (
    <>
      <Banner base_url='https://api.themoviedb.org/3/trending/movie/day' />
      <section className='relative -top-[5vh] px-6 -mb-[5vh] -space-y-[25vh] md:-space-y-48'>
        <Movies
          category='Popular on Netflix'
          base_url='https://api.themoviedb.org/3/movie/popular'
          type='movie'
        />
        <Movies
          category='Trending Now'
          base_url='https://api.themoviedb.org/3/trending/movie/day'
          type='movie'
        />
        <Top10
          category='Top 10 TV Shows'
          base_url='https://api.themoviedb.org/3/movie/top_rated'
          type='movie'
          lastChild
        />
      </section>
    </>
  )
}

export default moviesPage
