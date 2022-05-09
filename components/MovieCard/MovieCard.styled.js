import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const StyledMovieCard = styled.div`

        border:1px solid black;  
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        width:100%;
        color:#1f2225;
        
         ::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-image:${({image}) =>  `url(${image})`};
                background-position:50%;
                opacity:.15;
         }

         .main-title{
             margin-left:1.8rem;
         }

         h2{
             font-size:2.5rem;
             font-family:PatrickHand;  
             font-weight:700;           
         }

         .h2large{
             font-size:1.8rem;
         }

         .image-container{
             position:relative;
             width:100%;
             height:10rem;
         }

         .nfo-container{
             padding:.5rem;
             display:flex;
             gap:.2rem;
             justify-content:space-between;
              
         }
         .nfo-container p {
             border-bottom:0.1px solid grey;
             border-top:0.1px solid grey;
         }
         .director_container{
             font-weight:500;
             font-size:1.2rem;             
         }

         .director_container p:first-child{
             padding-bottom:.5rem;
             
         }

         .director-votes{
             display:flex;
              border-bottom:1px solid grey;
         }

         .desc_container{
             font-size:1.2rem;
             
         }
         .votes_container{
             display:flex;
             flex-direction:column;
             justify-content:center;
             align-items:center;
             width:100%;
             height:100px;
             background:#f2f3f4;
             border-radius:16px;
            border:1px lightgrey solid;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;              
         }

         .flexicon{
             display:flex;
             flex-direction:row-reverse;
         }

         .flexnumber{
             display:flex;
             justify-content:center;
             flex-direction:column;
             align-items:center;
             padding-left:.5rem;
         }

         .flexnumber div {
             font-size:2rem;
           
         }

         .flexnumber .uservotes {
             font-weight:600;
             font-size:1rem
         }

         p span{
             font-weight:700;
         }

         .icon {
             padding:.2rem;
             font-size:4rem;
             color:#4CBB17;
             cursor:pointer;
             transition:.2s ease-in;

            
         }
         .icon:hover{
            color:#39FF14;
         }
         .icon:active{
             color:pink;
             transform:scale(2);
             opacity:0;

         }       
        .spacing{
            padding:1rem;
        }
 

 .whatdiv{
     display:flex; 
     align-items:center;     
    width:8rem;
    margin:.4rem 1rem;
    margin-left:auto;
    border-radius:16px;
 }

@media ${device.mobileM}{

      .image-container{

             height:15rem;

}
@media ${device.tablet}{

      .image-container{
             height:25rem;
}
@media ${device.laptop}{

      .image-container{
             height:30rem;
}
@media ${device.laptopL}{

      .image-container{
             height:40rem;
}
@media ${device.desktop}{

      .image-container{
             height:45rem;
}

`


