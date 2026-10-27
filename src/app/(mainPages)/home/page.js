import Banner from '../../../components/Banner'
import Movies from '../../../components/Movies'
import Top10 from '../../../components/Top10'

const homePage = () => {
  return (
    <div>
      <Banner base_url='https://api.themoviedb.org/3/trending/all/day' />
      <section className='relative -top-7 px-6 mb-10 space-y-6'>
        <Movies
          category='Trending Now'
          base_url='https://api.themoviedb.org/3/trending/all/day'
        />

        <Movies
          category='Popular on Netflix'
          base_url='https://api.themoviedb.org/3/movie/popular'
          type='movie'
        />

        <Top10
          category='Top 10 Movies'
          base_url='https://api.themoviedb.org/3/movie/top_rated'
          type='movie'
        />

        <Top10
          category='Top 10 TV Shows'
          base_url='https://api.themoviedb.org/3/tv/top_rated'
          type='tv'
        />
      </section>
    </div>
  )
}

export default homePage
