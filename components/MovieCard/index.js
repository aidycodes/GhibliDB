import React from 'react'
import { StyledMovieCard } from './MovieCard.styled'
import Image from 'next/image'
import Banner from '../banner'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';


const MovieCard = ({ movie, handleUpvote }) => {
   
   if(!movie){
       return(
           <p>Loading</p>
       )
   }
   console.log(movie)

   
  return (
      <div style={{display:'flex', flexDirection:'column'}}>
      <Banner/> 
    <StyledMovieCard image={movie.movie_banner}>
    <div className="title-container">
    <div className="main-title">
        <h2 className={movie.title.length < 30 ? "h2small" : "h2large" }>{movie.title}</h2>
    </div> 
    </div>
    <div className="image-container">
        <Image alt="Movie Banner" layout='fill' src={movie.movie_banner}/> 
    </div>
    <div className="nfo-container">
        <p>Running Time: {movie.running_time}mins </p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rotten Score: {movie.rt_score}</p>
    </div>
    <div className="director-votes">
    <div className="director_container spacing">
        <p>Director:{movie.director}</p>
        <hr/>
        <p>Producer:{movie.producer}</p>
    </div>
    <div className="whatdiv">
        <div className="votes_container">
            <div className="flexicon">
    <IconButton onClick={() => handleUpvote(movie.id)}>
         <ThumbUpOutlinedIcon className="icon" />
     </IconButton>
            <div className="flexnumber">
                <p className="uservotes"> User Votes</p>
                    <div>
                        <p>{ typeof movie.votes === 'number' ? movie.votes : <CircularProgress />}</p>
                    </div>
            </div>      
        </div>    
        </div>
    </div>
    </div>
    <hr className="line"></hr>
    <div className="desc_container spacing">
        <p><span>Description:</span></p>
        <p>{movie.description}</p>
    </div>
    </StyledMovieCard>
    </div>
  )
}

export default MovieCard

