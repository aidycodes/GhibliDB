import '../styles/globals.css'
import MovieProvider from '../context/Store'

function MyApp({ Component, pageProps }) {
  return (
  <MovieProvider>
  <Component {...pageProps} />
  </MovieProvider>
  )
}

export default MyApp
