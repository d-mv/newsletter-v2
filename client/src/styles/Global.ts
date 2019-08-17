import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import { black, background } from './tokens/colors';

WebFont.load({
  google: {
    families: ['Merriweather:300,300i,400,700', 'Open+Sans:300,400', 'IBM+Plex+Mono']
  }
});

const Global = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-family: Merriweather;
  }
  html {
  scroll-behavior: smooth;
  -moz-osx-font-smoothing: grayscale;
  color: ${black};
  background-color:${background};
  }
  body{
    margin:0;
  }
`;
export default Global;
