import React from 'react'
import { StyleTextInput } from './TextInput.styled'

const TextInput = ({handleSearch, search}) => {
 
  return (
    <StyleTextInput value={search} onChange={(e) => handleSearch(e)} placeholder="Search By Movie Name, Director or  Producer"></StyleTextInput>
  )
}

export default TextInput