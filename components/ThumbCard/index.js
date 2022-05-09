import React from 'react'
import { StyledThumbCard } from './ThumbCard.styles'
import Info from './Info'
import Link from 'next/link'

const ThumbCard = (props) => {

 if(props.movie){
   
  return (
    
    <StyledThumbCard desc={props.movie.description.length} image={props.image}>
     <Link  href={`/movie/${props.movie.id}`}>
           <a href={`/movie/${props.movie.id}`}>
                <div className='japtxtwrapper'>
                     <p className="japtxt" >{props.movie.original_title}</p>
                 </div>
                <div className="hoverinfo">      
                    <Info data={props.movie} title={props.movie}/>                  
              </div>
              </a>
              </Link>
         

    </StyledThumbCard>
   
  )
 } else {
   return ( <>Loading...</>
   )}
}

export default ThumbCard
