import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Search from '../components/Search'
import DisplayCards from '../components/DisplayCards'
import Button from '../components/utils/Button'
import { MovieContext } from '../context/Store'


export const getStaticProps = async({ params }) => {

     const data = await fetch('https://ghibliapi.herokuapp.com/films?limit=6')
    const films = await data.json()
    
    return { 
      props:{films}
    }
}
export default function Home({ films }) {

  const [movieSearch, setMovieSearch] = useState([])
  const [search, setSearch] = useState('')
  const [showAll , setShowAll] = useState(false)
  const [results, setResults] = useState('featured')

  const {movies, setMovies} = useContext(MovieContext)


  const idd = movies.map((path) => ( {params:{id:path.id}}))

  const handleSearch = (e) => {
    setSearch( e.target.value)
    setResults('Search')
  }

  const handleShowAll = () => {
    setMovieSearch(movies)
    setShowAll(!showAll)
    setSearch('')
    setResults('All')
  }

  useEffect(() => {
      if(!showAll){
        setResults('Featured')
      }
  },[showAll])

    const fetchMovies = async() => {
    const data = await fetch('https://ghibliapi.herokuapp.com/films/')
    const parsedData = await data.json()
    setMovies(parsedData)
    }

    useEffect(() => {
        fetchMovies()
    },[])

    useEffect(() => {
      if(search){  
        setShowAll(false)
      const searchTerm = search.toLowerCase()
      
          const movieFilter = movies.filter( ({ title, director, producer, release_date  }) => {
            return title.toLowerCase().includes(searchTerm) || director.toLowerCase().includes(searchTerm)  
            || producer.toLowerCase().includes(searchTerm)  || release_date.toLowerCase().includes(searchTerm)  
          })

    if(movieFilter.length === 0 && search != ""){
      setMovieSearch(null)
   
    }
    else{
    setMovieSearch(movieFilter)
    }

      } else {
            setMovieSearch([])
            if(showAll){
              setResults('All')
               setMovieSearch(movies)
            } else{
            setResults('Featured')
            }
      }
    },[search])

  return (
    <>
      <Head>
        <title>Ghibli DB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"
         />
         <meta name="description" content="A simple database for studio Ghibli Films"/>
      </Head>
     <Banner/> 
     <Search handleSearch={handleSearch} search={search}/>
     <div className={styles.buttonWrapper}>
     <Button toggle={showAll} onClick={handleShowAll}>Show All Films</Button>
     </div>
     <div className={styles.results}>Showing: {results}</div>
   
     {
       movieSearch === null ? <p style={{display:'flex',justifyContent:'center'}}> No Matching Search </p> :      
       movieSearch && movieSearch.length > 0 && search.length > 0 || showAll ? <DisplayCards data={movieSearch}/> :  <DisplayCards data={films}/>
     }
    </>
  )
}
