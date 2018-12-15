import styled from '@emotion/styled'

const Button = styled.button(props => ({
	backgroundColor: props.theme.background,
	color: props.theme.foreground,
	padding: '1.25em',
}))

export default Button
