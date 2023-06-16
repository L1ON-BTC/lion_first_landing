import { createGlobalStyle } from 'styled-components';

import background from './bg.webp';

const GlobalStyle = createGlobalStyle`
	:root {
		--primay: #9089BF;
		--bg-primay: #161317;
		--accent: #FF5920;
	}

	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}	

	html, body {
		height: 100%;
	}

	body {
		background-image: url(${background}); 
		background-position: bottom center;
		background-size: contain; 
		background-color: var(--bg-primay);
		background-repeat: no-repeat;

		color: var(--primay);

		display: flex;
		justify-content: center;
		
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 0.05em;
		line-height: 1.45em;

		margin: 0;
		padding: 0;
	}

	h3 {
		font-size: 1.25em;
	}	
`;

export default GlobalStyle;
