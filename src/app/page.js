import Hero from '../components/landingPage/Hero'
import Movies from '../components/landingPage/Movies'
import JoinUs from '../components/landingPage/JoinUs'
import FAQ from '../components/landingPage/FAQ'
import Authentication from '../components/landingPage/Authentication'
import Footer from '../components/landingPage/Footer'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Movies />
      <JoinUs />
      <FAQ />
      <Authentication />
      <Footer />
    </div>
  )
}

export default LandingPage
