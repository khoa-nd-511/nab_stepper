import React from 'react'
import withStyles, { ThemeProvider } from 'react-jss'

import { Stepper } from './components/Stepper'
import { theme } from './theme'

const styles = theme => ({
	wrapper: {
		marginTop: theme.distance.far,
		fontSize: theme.font.label,
		lineHeight: theme.lineHeight.label,
		fontFamily: theme.font.defaultFontFamily,
	},
	'@media (max-width: 768px)': {
		wrapper: {
			display: 'flex',
		},
	}
})

const App = ({ classes }) => {
	return (
		<div className={classes.wrapper}>
			<Stepper />
		</div>
	)
}

const StyledApp = withStyles(styles)(App)

const AppWithTheme = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledApp />
		</ThemeProvider>
	)
}

export default AppWithTheme
