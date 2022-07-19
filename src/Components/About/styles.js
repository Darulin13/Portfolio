import styled from "styled-components";

export  const Container= styled.section`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    div{
        background-color:black;
        width:100%;
        height:20vw;
    }
    `
export  const Title= styled.h1`
    font-size:6rem;
    padding-bottom:2vw;
    padding-top:2vw;
    @media(max-width:414px){
        font-size:4rem;
    }
    `
export  const Paragraph= styled.p`
   
    width:60%;
    text-align:center;
    padding-bottom:40px;
    font-size:2.5rem;
    @media(max-width:1440px){
        font-size:1rem;
    }
    `