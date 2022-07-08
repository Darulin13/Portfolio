import styled from "styled-components";

export  const Container= styled.section`
    width:100%;
    border:solid purple 5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `
export  const Title= styled.h1`
    font-size:6rem;
    padding-bottom:20px;
    @media(max-width:414px){
        font-size:4rem;
    }
    `
export  const Icon= styled.a`
    width:30%;
    border:solid blue;
    img{
        width:100%;
        border:solid green;
    }
    `
export const Div = styled.div`
    width:40%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;


    border:solid red;
`
