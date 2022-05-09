import styled from "styled-components";
import { device } from "../../styles/mediaQueries";

export const StyledDisplayCards = styled.div`
        
        display:flex;
      
        align-items:center;
        gap:4rem;
        flex-direction:column;
        padding:0rem;
        

        @media ${device.tablet}{
        justify-content:center;
    flex-direction:row;   
    flex-wrap:wrap;

    @media ${device.laptop}{
            padding:0.1rem;
}
`