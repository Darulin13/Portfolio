import React from "react"
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header"
import Project from "./Components/Project"
import About from "./Components/About"
import Contact from "./Components/Contact";
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
      <About/>
      <Contact/>
      
  </>
  )
  
}