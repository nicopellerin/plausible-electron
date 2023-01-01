import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
${normalize()}

:root {
  --primaryBaseHue: 305;
  --primaryButtonColor: hsl(var(--primaryBaseHue), 56%, 55%);
  --primaryColor: hsl(305, 56%, 55%);
  --primaryColorDark: hsl(305, 56%, 35%);
  --primaryColorLight: hsl(305, 56%, 75%);
  --primaryColorLighter: hsl(305, 56%, 85%);
  --primaryColorLighter2: hsl(305, 56%, 95%, 1);

  --secondaryColor: hsl(333, 65%, 62%);
  --secondaryColorDark: hsl(333, 65%, 42%);
  --secondaryColorLight: hsl(333, 65%, 82%);
  --secondaryColorLighter: hsl(333, 65%, 92%);

  --tertiaryColor: hsl(213, 66%, 66%);
  --textColor: var(--primaryColorLighter2);
  --headingColor: var(--primaryColorLight);

  --backgroundColor: #001;

  --borderColor: hsla(305, 56%, 85%, 0.15);

  --inputBackground: hsla(305, 56%, 35%, 0.08);
  --inputBorder: hsla(305, 56%, 35%, 0.3);
  --inputText: var(---textColor);

  --success: hsl(123, 65%, 42%);

  --toolsBorder: hsla(305, 26%, 20%, 0.35);
  --toolsBackground: hsla(305, 26%, 20%, 0.2);


  /* Fonts */
  --mainFont: "InterVariable", sans-serif;

  /* Spaces */
  --spacer-180: 18rem;
  --spacer-160: 16rem;
  --spacer-128: 12.8rem;
  --spacer-104: 10.4rem;
  --spacer-96: 9.6rem;
  --spacer-88: 8.8rem;
  --spacer-80: 8rem;
  --spacer-64: 6.4rem;
  --spacer-48: 4.8rem;
  --spacer-32: 3.2rem;
  --spacer-24: 2.4rem;
  --spacer-20: 2rem;
  --spacer-16: 1.6rem;
  --spacer-8: 0.8rem;
  --spacer-4: 0.4rem;

  --border-radius-2: 2px;
  --border-radius-4: 4px;
  --border-radius-8: 8px;
}


*, *:before, *:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  line-height: calc(1em + 0.725rem);
}

html {
  font-size: 62.5%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--mainFont);
  color: var(--textColor);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


h1, h2, h3, h4, h5, h6, p {
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
}
`;

export default GlobalStyles;
