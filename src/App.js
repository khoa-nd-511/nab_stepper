import React from 'react'
import withStyles, { ThemeProvider } from 'react-jss'

import { Stepper } from './components/Stepper'
import { theme } from './theme'

const STEPS = [
	{ number: 1, label: 'Supplier' },
	{ number: 2, label: 'Basic Infomation' },
	{ number: 3, label: 'Language' },
	{ number: 4, label: 'Lorem ispsum' },
	{ number: 5, label: 'Some dumb text' },
	{ number: 6, label: 'Vertical Stepper' },
]

const styles = theme => ({
	wrapper: {
		marginTop: theme.distance.far,
		fontSize: theme.font.label,
		lineHeight: theme.lineHeight.label,
		fontFamily: theme.font.defaultFontFamily
	}
})

const App = ({ classes }) => {
	return (
		<div className={classes.wrapper}>
			<Stepper steps={STEPS} />
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
