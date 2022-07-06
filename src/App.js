import React from "react"
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header"
import Project from "./Components/Project"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
`;
export default function App() {
  return(
    <>
    <GlobalStyle />
      <Header />
      <Project />
      
  </>
  )
  
}