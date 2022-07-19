import styled from "styled-components";


export const Container = styled.section`

    width:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
    padding-left:5vw;
    padding-top:2vw;
    @media(max-width:774px){
        align-items:center;
        padding-left:0vw;
        padding-bottom:05vw;
    }
`

export const  Title = styled.h1`
    width:60%;
    font-size:2vw;
    padding-top:1vw;
    padding-bottom:1vw;
    @media(max-width:774px){
      text-align:center;
      width:90%;
      font-size:5vw;
      
    }
`
export const  Paragraph = styled.p`
    width:60%;
    font-size:1vw;
    text-aling:start;
    padding-bottom:2vw;
    @media(max-width:774px){
        text-align:center;
        width:60%;
        font-size:2.8vw;
        padding-bottom:4vw;
        padding-top:4vw;
        font-weight:500;
      }
`

export const Mural = styled.section`

    width:70%;
    display:grid;
    grid-template-columns: repeat(6,1fr);
    gap:1.5vw;
    padding-bottom:2vw;
    @media(max-width:774px){
        width:60%;
        grid-template-columns: repeat(1,1fr);
        row-gap: 5vw;
      }
    
`

export const Box = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:red;
    padding-bottom:0.3vw;
    padding-top:0.3vw;

    article{
       
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:start;
        align-self:center;
      
        padding-top:0vw;

    }
    h2{
        
        width:10%;
        font-size:1.5vw;
        color:white;
        padding-right:1.5vw;
        padding-left:0.3vw;
        @media(max-width:774px){
            font-size:5.5vw;
          }
       
       

    }
    h3{
        
        width:90%;
        font-size:0.8vw;
        color:white;
        align-self:center;
        @media(max-width:774px){
            font-size:3.5vw;
          }

    }
    img{
        width:40%;
        padding-top:0.5vw;
    }

    
`