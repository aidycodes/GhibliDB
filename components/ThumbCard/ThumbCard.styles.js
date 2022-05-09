import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const StyledThumbCard = styled.div`

    color:red;
    cursor:pointer;
    position:relative;
    padding:0rem 0rem;
    width:260px;
    height:29rem;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
   color:white;
   font-size:1.5rem;
    background-image:${props => `url('${props.image}')`};
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
   border:10px solid white;
   display:flex;
   flex-direction:column;
   transition:0.2s ease-in-out;
   overflow:hidden;

    &:hover{
    transform:scale(1.1);
        box-shadow: 0 22px 32px 0 rgba( 31, 38, 135, 0.37 );
   }



   & .japtxt {
       margin:0;
       padding:0;
       opacity:0.5;
       font-size:5rem;
       overflow:hidden;
       white-space: nowrap
       
   }
    & .japtxtwrapper {
        zIndex:10;     
        overflow:hidden;
        position:absolute;
        top:50%;
        left:-50px;        
    }
  
   & .card {
        position: relative;
        display:flex;
        overflow:hidden;
        flex-direction:column;
        flex-basis:100%;       
   }

& .hoverinfo{
   align-self:flex-end;
    font-size:1.2rem;
    
    transform:translate(-0px,390px);
    transition: 0.5s ease-in-out;
 
}

@media ${device.mobileS}{
    width:320px;
     height:20rem;
     & .hoverinfo{
          transform:translate(-0px,250px);
     }
 
     
}

@media ${device.mobileM}{
    width:360px;
      & .hoverinfo{
          transform:translate(-0px,390px);
     }
}

@media ${device.mobileL}{
    width:420px;
    height:29rem;

}

@media ${device.tablet}{
    width:380px;
    & .hoverinfo{
         &:hover{
        transform:${({desc}) => desc < 180 ? 'translate(0px,220px)' : 'translate(0px,200px)'};
    }
}

@media ${device.laptop}{
    width:380px;

        & .hoverinfo{
         &:hover{
           transform:${({desc}) => desc < 180 ? 'translate(0px,230px)' : 'translate(0px,210px)'};
    }
}


`