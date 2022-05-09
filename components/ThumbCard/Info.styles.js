

import styled from 'styled-components'

export const StyledInfo = styled.div`

    background: linear-gradient(0deg, rgba(8,0,47,0.9206057422969187) 0%, rgba(8,0,47,0.9206057422969187) 80%, rgba(8,0,47,0.8449754901960784) 93%, rgba(8,0,47,0.6292892156862745) 97%, rgba(8,0,47,0.27354691876750703) 100%);
    min-height:40%;
    height:80vh;
    display:flex;
    flex-direction:column;
    padding:1.25rem;
    padding-bottom:0;

    & h2 {
        font-size:${({title}) => title.length <  15 ? `1.5rem` : '1.3rem'};
        align-self:center;
        font-family:Radio Canada;
        font-weight:600;
    }

    & h3 {
        font-size:1.4rem;
        line-height:1;
       
    }

    & .desc {
        font-size:.9rem;
        width:90%;
    }
    & .rotten-score{
        padding-top:1rem;
        margin-left:auto;

    }
`