import React from 'react'
import styled from '@emotion/styled'
import ThemeContext from './theme'

const Container = styled.div(
	props => ({
	    backgroundColor: props.theme.background,
		color: props.theme.foreground,
	  })
)

class App extends React.Component {
	render() {
		let theme = this.context;
		return <Container theme={theme}>Hello world!</Container>;
	}
}
App.contextType = ThemeContext;

export default App
