import styled from "styled-components";

export  const Container= styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    article{
        width:90%;
        display:flex;
        flex-direction:column;
        align-items:center;
 
    }

`
export  const Title = styled.section`
    font-size:6rem;
    padding-bottom:5vw;
    padding-top:5vw;
    @media(max-width:414px){
        font-size:4rem;
    }
`
export  const Box = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    padding-bottom:200px;
    @media(max-width:1024px){
        grid-template-columns:repeat(3,1fr);    
    }
    @media(max-width:425px){
        grid-template-columns:repeat(1,1fr);    
    }

    
  
`
export  const Poster = styled.img`
width:100%;
height:12vw;
@media(max-width:1024px){
    height:15vw;
}
@media(max-width:425px){
    height:40vw;  
}



  
`