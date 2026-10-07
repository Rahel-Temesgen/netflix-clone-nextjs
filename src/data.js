import movie01 from '../public/trendingMovies/movie01.webp'
import movie02 from '../public/trendingMovies/movie02.webp'
import movie03 from '../public/trendingMovies/movie03.webp'
import movie04 from '../public/trendingMovies/movie04.webp'
import movie05 from '../public/trendingMovies/movie05.webp'
import movie06 from '../public/trendingMovies/movie06.webp'
import movie07 from '../public/trendingMovies/movie07.webp'
import movie08 from '../public/trendingMovies/movie08.webp'
import movie09 from '../public/trendingMovies/movie09.webp'
import movie10 from '../public/trendingMovies/movie10.webp'
import {
  PiTelevisionSimpleBold,
  PiDownloadSimpleBold,
  PiCompassBold,
  PiSmileyBold,
} from 'react-icons/pi'

const movies = [
  { order: 1, moviePoster: movie01 },
  { order: 2, moviePoster: movie02 },
  { order: 3, moviePoster: movie03 },
  { order: 4, moviePoster: movie04 },
  { order: 5, moviePoster: movie05 },
  { order: 6, moviePoster: movie06 },
  { order: 7, moviePoster: movie07 },
  { order: 8, moviePoster: movie08 },
  { order: 9, moviePoster: movie09 },
  { order: 10, moviePoster: movie10 },
]

const reasonsToJoin = [
  {
    title: 'Enjoy on your TV',
    description:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    icon: <PiTelevisionSimpleBold />,
  },
  {
    title: 'Download your shows to watch offline',
    description:
      'Save your favorites easily and always have something to watch.',
    icon: <PiDownloadSimpleBold />,
  },
  {
    title: 'Watch everywhere',
    description:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    icon: <PiCompassBold />,
  },
  {
    title: 'Create profiles for kids',
    description:
      'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
    icon: <PiSmileyBold />,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is Netflix?',
    answer:
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    id: 2,
    question: 'How much does Netflix cost?',
    answer:
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99/month.',
  },
  {
    id: 3,
    question: 'Where can i watch?',
    answer:
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
  },
  {
    id: 4,
    question: 'How do i cancel?',
    answer:
      'Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    id: 5,
    question: 'What can i watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    id: 6,
    question: 'Is Netflix good for kids?',
    answer:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
  },
]

const moreInfo = [
  { title: 'FAQ' },
  { title: 'Help Center' },
  { title: 'Account' },
  { title: 'Media Center' },
  { title: 'Investor Relations' },
  { title: 'Jobs' },
  { title: 'Ways to Watch' },
  { title: 'Terms of Use' },
  { title: 'Privacy' },
  { title: 'Cookie Preferences' },
  { title: 'Corporate Information' },
  { title: 'Contact Us' },
  { title: 'Speed Test' },
  { title: 'Legal Notices' },
  { title: 'Only on Netflix' },
]

export { movies, reasonsToJoin, faqs, moreInfo }
