import React from 'react'
import ThumbCard from '../ThumbCard'
import { StyledDisplayCards } from './DisplayCards.styles'
import Link from 'next/link'

const DisplayCards = ({ data }) => {

  return (
      <StyledDisplayCards>
    {
         data.map((movie) => (       
        <ThumbCard key={movie.id} image={movie.image} movie={movie} />
    ))   
    }
    </StyledDisplayCards>
  )
}

export default DisplayCards