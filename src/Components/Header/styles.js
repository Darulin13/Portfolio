import styled from "styled-components";

export const Component = styled.section`

color:red;`
//Navegation Page
export const NavBar = styled.nav`
    width:100%;
    background-attachment: scroll;
    background-size:contain;
    background-height:100vh;
    background-image:URL("https://i.gifer.com/Z4mN.gif");
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:40px;
    padding-top:40px;
`
export const Logo = styled.div`
    color:white;
    border:solid black;
    background-color:black;
    width:5%;
    padding:10px;
    border-radius:50%;
    font-size:5rem;
    align-items:center;

`
export const Ul = styled.ul`
    width:60%;
   display:flex;
   flex-direction:row;
   justify-content:space-between;

   padding-top:40px;
   padding-bottom:200px;

`
export const Li = styled.li`
    list-style:none;
    color:black;
    font-size:2.8rem;
    @media(max-width:828px){
        font-size:2rem;
    }
    @media(max-width:577px){
       display:none;
    }
`
export const Seta = styled.img`
    width:100%;
    cursor:pointer;
   @media(max-width:425px){
      width:100%; 
   }
    
`