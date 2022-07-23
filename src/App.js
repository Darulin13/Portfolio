import React from "react"
import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header"
import Project from "./Components/Project"
import About from "./Components/About"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import OnuPage from "./Components/OnuPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
`;
export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/OnuPage" element={<OnuPage />} />
      </Routes>
      <About />
      <Contact />
      <Footer/>
    </Router>

  )

}