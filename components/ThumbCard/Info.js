import React from 'react'
import { StyledInfo } from './Info.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Info = ({data}) => {

  let description
  if(data.description.length > 200){
    description = data.description.substring(0,187) + '...'
  } else {
      description = data.description
  }

  if(data){
  return (
            <StyledInfo title={data.title} desc={data.desc}>
                <h2>{data.title}</h2>
                <h3>{data.director}</h3>
                <div className="desc">{description}</div>
                <div className="rotten-score">
                  <FontAwesomeIcon icon={faStar} /> <span> {data.rt_score} </span>
                </div>
            </StyledInfo>
  )
  } 
  return (
    <>loading...</>
  )
}

export default Info