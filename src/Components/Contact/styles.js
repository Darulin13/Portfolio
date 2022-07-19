import styled from "styled-components";

export  const Container= styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media(max-width:690px){
        padding-bottom:3vw;
        padding-top:2vw;
    }
   
    `
export  const Title= styled.h1`
    font-size:5vw;
    padding-bottom:2vw;
    padding-top:2vw;
    @media(max-width:414px){
        font-size:10vw;
    }
    `
export  const Icon= styled.a`
    width:20%;
    @media(max-width:690px){
        width:16%;
    }
    img{
        width:95%;
    }
    `
export const Div = styled.div`
    width:30%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:1.5vw;
    @media(max-width:690px){
        width:100%;
        padding-top:4vw;
    }
`
export const Form = styled.form`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:start;
    padding-bottom:1.5vw;
    label{
        font-size:1.5vw;
        padding-top:0.5vw;
        padding-bottom:0.5vw;
        @media(max-width:690px){
            font-size:4.5vw;
        }
    }
    @media(max-width:690px){
        width:80%;
       
    }
`
export const Name = styled.input`
    width:100%;
    padding-top:1vw;
    padding-bottom:1vw;
    border:solid 2px gray;
    
`
export const Message = styled.input`
    width:100%;  
    padding-top:2vw;
    padding-bottom:2vw;
    border:solid 2px gray;
`
export const Email = styled.input`
    width:100%;  
    padding-top:1vw;
    padding-bottom:1vw;
    border:solid 2px gray; 
    
`
export const Button = styled.button`
    width:50%;   
    padding-top:1.2vw;
    padding-bottom:1vw; 
    font-size:1.1vw;
    background-color:black;
    color:white;
    border:none;
    @media(max-width:690px){
        padding-top:2.2vw;
        padding-bottom:2vw; 
        font-size:7.1vw;
    }
    

    
    
`
