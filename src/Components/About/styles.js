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
export  const Paragraph= styled.p`
    border:solid red;
    width:60%;
    text-align:center;
    padding-bottom:40px;
    `