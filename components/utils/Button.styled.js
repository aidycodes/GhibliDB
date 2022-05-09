import styled from "styled-components";

export const StyledButton = styled.button`

    padding:0.2rem 1rem;
    border-radius: 16px;
    background:${(props) => props.showAll ? `#66FF66` : `#B4EEB4` };
    margin:1rem;
    margin-bottom:3rem;
   
    :hover {
     background:${(props) => props.showAll ? `#66FF66` : `#90EE90` }#;
   }

   :active {
       background:#66FF66   ;
   }


`