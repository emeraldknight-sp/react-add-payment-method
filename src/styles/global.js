import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body, select, input, button, textarea {
	font-family: var(--fontfamily);
}

:root {
  --white: #FFFFFF;
  
  --gray-900: #121214;
  --gray-800: #202024;
  --gray-600: #323238;
  --gray-400: #7C7C8A;
  --gray-200: #A9A9B2;
  --gray-100: #E1E1E6;

	--cyan-900: #2D57F2;
	--cyan-500: #42D3FF;
	--cyan-400: #436D99;

	--body-form: 12px;
	--body-button: 14px;
	
	--body-card: 24px;
	--caption-card: 10px;


	--fontfamily: "Inter", sans-serif;

  --background: var(--gray-900);
	--border: var(--gray-600)
}
`;
