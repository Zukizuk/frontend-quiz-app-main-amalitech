import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Subject from "./pages/subject";
import Home from "./pages/home";
import {
  createGlobalStyle,
  ThemeProvider as StyledProvider,
} from "styled-components";
import React from "react";
import { useTheme } from "./context/ThemeProvider";

const lightTheme = {
  bg: "var(--light-grey)",
  itemBG: "var(--white)",
  fg: "var(--dark-navy)",
  bgImg: "light",
  textSecondary: "var(--grey-navy)",
  colors: {
    html: "#FFF1E9",
    css: "#E0FDEF",
    javascript: "#EBF0FF",
    accessibility: "#F6E7FF",
  },
};

const darkTheme = {
  bg: "var(--dark-navy)",
  itemBG: "var(--navy)",
  fg: "var(--white)",
  bgImg: "dark",
  textSecondary: "var(--light-bluish)",
  colors: {
    html: "#FFF1E9",
    css: "#E0FDEF",
    javascript: "#EBF0FF",
    accessibility: "#F6E7FF",
  },
};

function App() {
  const { mode } = useTheme();
  return (
    <StyledProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          {/* Routes go here */}
          <Route path="/" element={<Home />} />
          <Route path="/:subject" element={<Subject />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </StyledProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: 167, 41, 245;
    --red: 238, 84, 84;
    --dark-navy: 49, 62, 81;
    --navy: 59, 77, 102;
    --grey-navy: 98, 108, 127;
    --green: 38, 215, 130;
    --white: 255, 255, 255;
    --light-bluish: 171, 193, 225;
    --light-grey: 244, 246, 250;
  }
  
  html {
  scroll-behavior: smooth;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: #0000;
}
img {
  width: 100%;
  height: unset;
}
*,
::after,
::before {
  box-sizing: border-box;
  border-style: solid;
  border-width: 0;
}
*,
body,
h1,
h2,
h3,
hr,
iframe,
ol,
p,
ul {
  margin: 0;
}
a,
hr {
  color: inherit;
}
*,
[class*="sr-only"],
ol,
ul {
  padding: 0;
}
main {
  display: grid;
}
h1,
h2,
h3 {
  font-size: inherit;
  font-weight: inherit;
}
ol,
ul {
  list-style: none;
}
embed,
iframe,
img,
object,
svg {
  vertical-align: bottom;
}
button,
input,
optgroup,
select,
textarea {
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: 0 0;
  padding: 0;
  margin: 0;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit;
}
[type="button"]:disabled,
[type="reset"]:disabled,
[type="submit"]:disabled,
button:disabled {
  cursor: default;
}
:-moz-focusring {
  outline: auto;
}
select:disabled {
  opacity: inherit;
}
[contenteditable]:focus {
  outline: auto;
}
a,
h2,
h3 {
  font-weight: 600;
}
[type="button"],
[type="reset"],
[type="submit"],
button,
label[for] {
  cursor: pointer;
}
[class*="sr-only"] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

  body {
    font-family: "Rubik", sans-serif;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => `rgb(${props.theme.bg})`};
    color: ${(props) => `rgb(${props.theme.fg})`};
    background-image: ${(props) =>
      `url('/assets/images/pattern-background-mobile-${props.theme.bgImg}.svg')`};
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
      background-image: ${(props) =>
        `url('/assets/images/pattern-background-tablet-${props.theme.bgImg}.svg')`};
      background-size: auto;
      background-position: left top;
    }
    @media (min-width: 1024px) {
      background-image: ${(props) =>
        `url('/assets/images/pattern-background-desktop-${props.theme.bgImg}.svg')`};
    }
  }

  main {
    display: flex;
    flex-direction: column;
    padding-inline: 1.5rem;
    padding-top: 2rem;
    @media (min-width: 768px) {
      padding-inline: 4rem;
      padding-top: 0;
    }
    @media (min-width: 1024px) {
      padding-inline: 8.75rem;
    }
  }
`;
