import styled, { keyframes } from "styled-components";

export const Component = styled.section`
`
//Animation
const titleAnimation = keyframes`
0%{
  
   color:transparent;
}
100%{
    color:white;
}
`
//Navegation Page
export const NavBar = styled.nav`
    width:100%;
    background-attachment: scroll;
    background-repeat:no-repeat;
    background-size:cover;
    background-height:100vh;
    background-image:URL("http://cdn.shopify.com/s/files/1/0530/9713/6304/collections/2641074.gif?v=1648814458");
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:40px;
    padding-top:40px;
`
export const Logo = styled.div`
    color:white;
    width:100%;
   
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

  
    h1{ 
      color:black; 
      font-size:10vw;  
      padding-bottom:5vw;
      animation:${titleAnimation} 2s linear 2s infinite;
    }
  

`
export const Ul = styled.ul`
    width:60%;
   display:flex;
   flex-direction:row;
   justify-content:space-between;

   padding-top:40px;
   padding-bottom:200px;
   @media(max-width:577px){
    padding-top:2vw;
    padding-bottom:0px;
    
 }
`
export const Li = styled.li`
    list-style:none;
    color:black;
    font-size:3vw;
    @media(max-width:828px){
        font-size:2rem;
    }
    @media(max-width:577px){
       display:none;
    }
    &:hover{
        color:white; 
    }
`
export const Seta = styled.img`
    width:100%;
    cursor:pointer;
  
   @media(max-width:425px){
      width:100%; 
      
   }
    
`
//Menu hamburguer
export const Hamb = styled.img`
 width:30%;
 display:none;
 @media(max-width:577px){
    width:15%; 
    display:flex;
    position:relative;
    bottom:04vw;
    padding-top:2vw;
    padding-bottom:2vw;
    
 }
`