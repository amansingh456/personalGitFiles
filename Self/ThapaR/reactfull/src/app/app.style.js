import styled from 'styled-components'

export const TitleWrapper = styled.div`
  background-color: blue;
  /* height: 100px;
  width: 100px; */
`;

export const Title = styled.h1` 
 font-size: 6rem;
 color: wheat;
`;

export const Button = styled.button`
    background-color:${ ({primary}) => (primary ? "green" : "white")};
    color: ${ ({primary}) => (primary ? "white" : "green")};
    font-size: 1em;
    margin: 1em;
    padding: 1em;
    border: 2px solid green;
    border-radius: 3px ;
`