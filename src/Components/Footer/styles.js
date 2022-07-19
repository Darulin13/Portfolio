import styled from "styled-components";

export  const Container= styled.section`
    width:100%;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        color:white;
        font-size:1vw;
        padding-top:1vw;
        padding-bottom:1vw;
        @media(max-width:906px){
            font-size:2vw;
        }
        @media(max-width:425px){
            font-size:2.9vw;
            padding-top:2vw;
            padding-bottom:2vw;
        }
    }

   `