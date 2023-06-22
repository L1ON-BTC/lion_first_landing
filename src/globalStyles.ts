import { createGlobalStyle } from 'styled-components';

import backgroundDesktop from './assets/bg-desktop.webp';
import backgroundMobile from './assets/bg-mobile.webp';

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
		background-image: url(${backgroundDesktop});
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

		@media (max-width: 480px) {
			background-image: url(${backgroundMobile});
			background-position: top left;
		}
	}

	h3 {
		font-size: 1.25em;
		font-weight: 700;
	}

	button {
		border: none;
		background-color: var(--accent);
		color: var(--bg-primay);
		display: inline-block;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.75em;
		padding: 14px;
		cursor: pointer;
	}
`;

export default GlobalStyle;
