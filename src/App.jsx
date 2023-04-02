import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import { theme } from "./utils/theme";
import Skills from "./pages/skills/Skills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import SingleProject from "./pages/SingleProject";
import Projects from "./pages/Project/Projects";
import NotFound from "./pages/NotFound";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  function HomeRoute() {
    return (
      <>
        <HomePage />
        <Skills />
        <Projects />
      </>
    );
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <BrowserRouter>
        <Wrapper>
          <Navbar
            toggleTheme={toggleTheme}
            currentTheme={currentTheme}
          />

          <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='/expertise' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<SingleProject />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
          <ScrollToTop />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;

export default App;
