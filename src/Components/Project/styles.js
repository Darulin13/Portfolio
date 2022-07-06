import styled from "styled-components";

export  const Container= styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:solid red;
    article{
        width:90%;
        display:flex;
        flex-direction:column;
        align-items:center;
        border:solid blue;
    }

`
export  const Title = styled.section`
    font-size:6rem;
    padding-bottom:40px;
    @media(max-width:414px){
        font-size:4rem;
    }
`
export  const Box = styled.div`
    width:100%;
    border:solid orange;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    padding-bottom:400px;
    @media(max-width:1024px){
        grid-template-columns:repeat(3,1fr);    
    }
    @media(max-width:425px){
        grid-template-columns:repeat(1,1fr);    
    }

    
  
`
export  const Poster = styled.img`
width:100%;
border:solid green;
  
`