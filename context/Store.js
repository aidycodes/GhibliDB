import React, { useState, createContext}  from 'react'

export const MovieContext = createContext()

const MovieProvider  = (props) => {

    const [movies, setMovies] = useState([])

  return (
    <MovieContext.Provider value={{movies, setMovies}}>{props.children}</MovieContext.Provider>
  )
}

export default MovieProvider