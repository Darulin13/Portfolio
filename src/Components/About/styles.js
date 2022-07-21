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
    font-size:6vw;
    padding-bottom:2vw;
    padding-top:2vw;
    @media(max-width:414px){
        font-size:18vw;
        padding-bottom:8vw;
    }
    `
export  const Paragraph= styled.p`
   
    width:60%;
    text-align:center;
    padding-bottom:40px;
    font-size:2.5rem;
    a{
        text-decoration:none;
        color:purple;
    }
    @media(max-width:1440px){
        font-size:1rem;
    }
    `