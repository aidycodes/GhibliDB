import styled from "styled-components";
import { device } from '../../styles/mediaQueries'
export const StyledBanner = styled.div`
    padding:2rem;
    display:flex;
    flex-direction:column;

    .db {
        padding-right:.5rem;
        margin-left:auto;

        @media ${device.mobileS}{
            font-size:1rem;
              font-weight:700
        }


           @media ${device.tablet}{
            font-size:2rem;
             
        }
           @media ${device.laptop}{
            font-size:2.5rem;
          
        }
              @media ${device.laptopL}{
            font-size:3rem;
          
        }
      
    }
`