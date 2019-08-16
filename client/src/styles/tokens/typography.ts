import styled from 'styled-components';

export const fontSans = 'Open Sans';
export const fontSerif = 'Merriweather';
export const fontMono = 'IBM Plex Mono';
export const h1 = `normal 700 3rem ${fontSerif}`;
export const h2 = `normal 700 2.5rem ${fontSerif}`;
export const h3 = `normal 700 2.2rem ${fontSerif}`;
export const h4 = `normal 700 2rem ${fontSerif}`;
export const h5 = `italic 300 1.2rem ${fontSerif}`;
export const h6 = `normal 300 1.7rem ${fontSerif}`;
export const p = `normal 400 1.6rem ${fontSans}`;
export const code = `normal 400 1.5rem ${fontMono}`;
export const button = `normal 400 1.6rem ${fontSans}`;

export const H1 = styled.h1`
  font: ${h1};
`;
export const H2 = styled.h2`
  font: ${h2};
  letter-spacing: 0.05rem;
`;
export const H3 = styled.h3`
  font: ${h3};
  letter-spacing: 0.05rem;
`;
export const H4 = styled.h4`
  font: ${h4};
  letter-spacing: 0.05rem;
  margin: 1.2rem 0;
`;
export const H5 = styled.h5`
  font: ${h5};
  font-style: italic;
  letter-spacing: 0.05rem;
`;
export const H6 = styled.h6`
  font: ${h6};
  letter-spacing: 0.05rem;
`;
export const Code = styled.div`
  padding: 1rem;
  margin: 1rem 2rem;
  font: ${code};
  letter-spacing: 0.05rem;
  background-color: #d3d3d3;
`;
export const CodeInline = styled.span`
  padding: 0 0.4rem;
  font: ${code};
  background-color: #d3d3d3;
`;
export const P = styled.p`
  font: ${p};
`;
