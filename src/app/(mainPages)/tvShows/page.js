import Banner from '../../../components/Banner'
import Movies from '../../../components/Movies'
import Top10 from '../../../components/Top10'

const tvShowsPage = () => {
  return (
    <>
      <Banner base_url='https://api.themoviedb.org/3/trending/tv/day' />
      <section className='relative top-[-5vh] px-6 space-y-6'>
        <Movies
          category='Popular on Netflix'
          base_url='https://api.themoviedb.org/3/tv/popular'
          type='tv'
        />
        <Movies
          category='Trending Now'
          base_url='https://api.themoviedb.org/3/trending/tv/day'
          type='tv'
        />
        <Top10
          category='Top 10 TV Shows'
          base_url='https://api.themoviedb.org/3/tv/top_rated'
          type='tv'
        />
      </section>
    </>
  )
}

export default tvShowsPage
