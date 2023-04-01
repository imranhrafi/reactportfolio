import { createGlobalStyle } from "styled-components";
import { QUERIES } from "./Constraints";

const GlobalStyle = createGlobalStyle`

/* CSS reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Global styles */
html {
  font-size: 62.5%; /* 1 rem = 10px */
}
body {
  font-family: 'League Spartan', sans-serif;
  font-weight: 300;
  font-size: 1.6rem; /* 16px */
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  overflow-x: hidden;

}
#root, #__next {
  isolation: isolate;
  height: 100%;
}

/* Typography */
h1 {

  font-size: clamp(2.4rem, 4vw, 4.8rem);
  
  }
}
h2 {

  font-size: clamp(2rem, 3.5vw, 4rem);
}
h3 {
  line-height: 82px;
    font-weight: 200;
  font-size: clamp(1.6rem, 3vw, 3.2rem);
}
h4 {
  font-size: clamp(1.4rem, 2.5vw, 2.4rem);
}
h5 {
  font-size: clamp(1.2rem, 2vw, 2rem);
}
h6 {
  font-size: clamp(1rem, 1.5vw, 1.6rem);
}
h1, h2, h3, h4,h5,h5{
  font-family: 'Spectral', serif;
  line-height: 82px;
    font-weight: 200;
    
    @media ${QUERIES.phoneAndSmaller}{
      line-height: 4rem;

    }
}
p, a, strong {
  font-size: clamp(1.6rem, 2vw, 2rem);
  overflow-wrap: break-word;
  color: #999999;
}
ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
  max-width:100%;
}

/* Accessibility and interactivity */
:focus {
  outline: none;
}
button, a {
  cursor: pointer;
  text-decoration: none;
}

`;

export default GlobalStyle;
