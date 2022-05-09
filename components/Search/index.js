import React from 'react'
import TextInput from './TextInput'
import { StyledSearch } from './Search.styled'

const Search = (props) => {

  return (
    <StyledSearch>
    <TextInput {...props}/>
    </StyledSearch>
  )
}

export default Search