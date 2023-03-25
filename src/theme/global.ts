import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --dark-900: #111517;
    --dark-700: #202c37;
    --dark-500: #2b3945;
    --light-900: #adb5bd;
    --light-700: #fafafa;
    --light-500: #ffffff;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--dark-900);
    color: var(--light-500);
    font-family: "Inter", sans-serif;
  }
  @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
  @media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
} 
`;