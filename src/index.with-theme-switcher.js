import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './with-theme-switcher/ThemeContext';
import theme from './with-theme-switcher/theme';
import App from './with-theme-switcher/App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
