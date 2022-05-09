import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { MovieContext } from '../../context/Store'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { isEmpty } from '../../lib/isEmpty'

export const getStaticProps = async({ params }) => {

     const data = await fetch('https://ghibliapi.herokuapp.com/films?limit=6')
    const films = await data.json()
    const findFilmById = films.find((film ) => film.id === params.id) || null
    return { 
      props:{film:findFilmById}
    }
}

 export const getStaticPaths = async() => {
    
    const data = await fetch('https://ghibliapi.herokuapp.com/films?limit=6')
    const films = await data.json()  
    const paths = films.map((path) => ( {params:{id:path.id}}))
    return {
        paths,
        fallback:true
    }
}

const Movie = (initialProps) => {

    const [movie, setMovie] = useState(initialProps.film)

    const {movies}  = useContext(MovieContext)
    const router = useRouter()
    const { id } = router.query

   const { data, error } = useSWR(`/api/findMovie?id=${id}`, fetcher, { refreshInterval: 1000 })


    const handleUpvote = async(id) => {
           const response = await fetch('/api/upvoteMovie', {
             method: 'PUT',
            headers: {
              'Content-Type': 'application/json'  
            },   
    body: JSON.stringify({id:id}) 
  });
    }

    useEffect(() => {
      if(error){
        console.log(error)
      }
      if( !isEmpty(data) ){
        setMovie(data)       
      }
    },[data])
   
    useEffect(() => {
    if(initialProps.film === null){
        if(movies.length > 0) {
            const filmFromContext = movies.find((movie => (movie.id === id)))
            if(filmFromContext){
            setMovie(filmFromContext)
            }    
        }
    }
    },[id, initialProps, initialProps.film])

    useEffect(() => {
      const request = async(movie) => {
      const response = await fetch('/api/createMovie', {
             method: 'POST',
            headers: {
              'Content-Type': 'application/json'  
            },   
    body: JSON.stringify(movie) 
  });
}  
  if(movie){
    request(movie)
}
    },[movie])

    console.log(movie)
    
  return (
   
    <>
    {movie && 
    <div style={{display:'flex', justifyContent:'center', marginTop:'1.5rem'}}>
            <MovieCard movie={movie} handleUpvote={handleUpvote}/>
    </div>
    }
     </>
  )
 
}

export default Movie