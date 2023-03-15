import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.familyP};
    font-style: ${({ theme }) => theme.fonts.style};
    font-weight: ${({ theme }) => theme.fonts.weight.primary};
    color: ${({ theme }) => theme.colors.dark};
    letter-spacing: ${({ theme }) => theme.fonts.spacing};
    line-height: ${({ theme }) => theme.fonts.height};
    font-size: ${({ theme }) => theme.fonts.size};
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }

  main {
    flex: 1 0 auto;
  }

  footer {
    flex: 0 0 auto;
  }

  section {
    margin: auto;
  }

  img,
  svg {
    display: block;
  }

  img,
  video,
  canvas,
  figure {
    overflow: hidden;
  }

  svg,
  button {
    &:disabled {
      cursor: default;
    }
  }

  button {
    ${({ theme }) => theme.button}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }
`;
