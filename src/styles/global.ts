import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--base-font-color: #FFFFFF;
		--background-system: #292F33;
		--background-card: #6E7275;
		--background-active-card: #ED3237;
		--background-card-status-alert: #FB652E;
		--background-card-status-normal: #756E73;
		--background-card-status-cold: #3277ED;
	}

	* {
		font-family: 'Roboto', sans-serif;
		color: var(--base-font-color);
	}
	
	body {
		background-color: var(--background-system);
	}
`;