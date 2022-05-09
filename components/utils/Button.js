import React from 'react'

import { StyledButton } from './Button.styled'

const Button = (props) => {

  return (
    <StyledButton showAll={props.toggle} onClick={() => props.onClick()}>{props.children}</StyledButton>
  )
}

export default Button