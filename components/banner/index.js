import React from 'react'
import Image from 'next/image'
import { StyledBanner } from './Banner.styled'

const Banner = () => {
  return (
<StyledBanner>
    <Image alt="Ghibli Banner" width='1500px' height='200px' src="/Studio_Ghibli_logo.svg"/>
    <div className="db">
        DB
    </div>
</StyledBanner>
  )
}

export default Banner

