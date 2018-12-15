import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';

import { ThemeContext } from './ThemeContext';
import AppStyle from './App.style.js';

import Button from './Button';

const App = styled('div')(({theme, styles}) => {
	return { ...AppStyle, ...theme.app, ...styles  };
});

export default (props) => {
	const { theme, themeActive, toggleTheme } = useContext(ThemeContext);

	return (
		<App theme={theme}>
			<Button onClick={toggleTheme}>
				{themeActive ? 'Change background' : 'Original background'}
  			</Button>
		</App>
	)
}
