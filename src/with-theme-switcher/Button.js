import React, { useContext } from 'react';
import styled from '@emotion/styled';

import buttonStyle from './Button.style.js';
import { ThemeContext } from './ThemeContext';

const Button = styled('button')(({theme, styles}) => {
	return { ...buttonStyle, ...theme.button };
});

export default (props) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Button {...props} theme={theme}>
			{props.children}
		</Button>
	)
}
