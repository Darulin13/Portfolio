import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
  

    article{
        width:90%;
        display:flex;
        flex-direction:column;
        align-items:center;
 
    }

`
export const Title = styled.h1`
    font-size:6vw;
    padding-bottom:5vw;
    padding-top:5vw;
    @media(max-width:414px){
        font-size:16vw;
    }
`
export const Box = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    padding-bottom:10vw;
    @media(max-width:1024px){
        grid-template-columns:repeat(3,1fr);    
    }
    @media(max-width:425px){
        grid-template-columns:repeat(1,1fr);    
    }

    
  
`
export const Poster = styled.img`
width:100%;
height:12vw;

@media(max-width:1024px){
    height:15vw;
}
@media(max-width:425px){
    height:40vw;  
}
&:hover{
    filter: brightness(50%);
}

`
export const Div = styled.a`
    text-decoration:none;
    h2{
        position:relative;
        z-index:1;
        bottom:100px;
        left:0px;
        
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        font-size:1.5vw;
        font-weight:200;
        color:transparent;
       
    }
    h2:hover{
       color:white;
    }
`
export const H2 = styled.h2`
    position:relative;
    z-index:1;
    bottom:100px;
    left:0px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:1.5vw;
    font-weight:200;
    color:transparent;
  
    &:hover{
        color:white;

    }
`
