import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/section/Hero";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Education from "./components/section/Education";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const Body = styled.div`
background-color: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text_primary};
width: 100%;
height: 100vh;
overflow-x: hidden;
position: relative;`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
         <Navbar/>
          <Body>
            <Hero/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/> 
         </Body>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
