import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import Button from './Button'
import ThemeContext from './theme'

const Button2 = styled(Button)(props => ({
	backgroundColor: props.theme.foreground,
	color: props.theme.background,
}))

const buttonWithBorder = css`
	border: 1px solid;
`

const Button3 = styled(Button)`
	${buttonWithBorder}
`

const buttonWithBorderProps = props => css`
	border: ${props.border};
`

const Button4 = styled(Button)`
	${buttonWithBorderProps}
`

const Button5 = styled(Button)`
	${buttonWithBorderProps({
		border: "4px dashed red"
	})}
`

const Container = styled.div`
	 > * {
		margin: 1.25em
	}
`

class App extends React.Component {
	render() {
		let theme = this.context

		return (
			<Container>
				<Button theme={theme}>Normal</Button>
				<Button2 theme={theme}>Inverted</Button2>
				<Button3 theme={theme}>With border</Button3>
				<Button3>With border, without theme</Button3>
				<Button4 theme={theme} border="2px dotted">With styled border</Button4>
				<Button5 theme={theme}>With dynamically styled border</Button5>
			</Container>
		)
	}
}
App.contextType = ThemeContext;

export default App
