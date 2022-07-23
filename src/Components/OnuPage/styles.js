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
    padding-bottom:3vw;
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
    background-color:black;
    padding-bottom:0.3vw;
    padding-top:0.3vw;
    cursor:pointer;

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
//Modal
export const ModalBox = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    position:relative;
    bottom:12vw;
    z-index:1;
    @media(max-width:774px){
        bottom:0vw;
      }


    
    
`
export const Barra = styled.section`
    width:90%;
    background-color:black;
    display:flex;
    flex-direction:row; 
    justify-content:space-evenly;
    padding-top:5vw;
    padding-bottom:5vw;
    @media(max-width:774px){
        width:100%;
        padding-left:2vw;
      }
   
    article{
        display:flex;
        flex-direction:column;
        width:60%;
    }
    h2{
        font-size:10vw;
        font-weight:400;
        color:white;
    }
    h3{
        color:white;
        font-size:4vw;
    }
    p{
        color:white;
        font-size:2vw;
        width:75%;
        padding-top:2vw;
        @media(max-width:774px){
            font-size:3vw;
          }
        
    }
    img{
        width:30%;
        
    }
    button{
        width:1.6%;
        position:relative;
        bottom:4.5vw;
        left:1.5vw;
        height:1.3vw;
        background-color:transparent;
        color:white;
        font-size:1vw;
        border:none;
        @media(max-width:774px){
        
            width:10%;
            height:2.3vw;
            font-size:3.5vw;
            bottom:3.5vw;
            
          }
    }
`
export const Metas = styled.section`

    width:90%;
    padding-bottom:1vw;
    @media(max-width:774px){
        width:100%;
        padding-left:2vw;
        
      }
   
    p{
        font-size:1.3vw;
        padding-bottom:1.5vw;
        @media(max-width:774px){
            font-size:3vw;
            padding-bottom:1.8vw;
          }
    }
    h3{
        font-size:1.5vw;
        width:70%;
        padding-bottom:1.5vw;
        padding-top:3vw;
        @media(max-width:774px){
            font-size:4vw;
            padding-bottom:2.8vw;
          }
    }
`
