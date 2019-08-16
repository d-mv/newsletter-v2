import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
// import { dark, white } from './tokens/color';
import { fontSans, fontSerif } from './tokens/typography';
import { black } from './tokens/colors';

WebFont.load({
  google: {
    families: ['Merriweather:300,300i,400,700', 'Open+Sans:300,400', 'IBM+Plex+Mono']
  }
});

const Global = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-family: 'Roboto Slab';

  }
  html {
  scroll-behavior: smooth;
  -moz-osx-font-smoothing: grayscale;
  color: ${black};
}
  body{
    margin:0;
  }

`;
export default Global;
