import React from 'react'
import withStyles, { ThemeProvider } from 'react-jss'

import { Stepper } from './components/Stepper'
import { theme } from './theme'
import { styles } from './styles'

const STEPS = [
	{ number: 1, label: 'Supplier', visited: true, activated: true },
	{ number: 2, label: 'Basic Infomation', visited: false, activated: false },
	{ number: 3, label: 'Language', visited: false, activated: false },
	{ number: 4, label: 'Lorem ispsum', visited: false, activated: false },
	{ number: 5, label: 'Some dumb text', visited: false, activated: false },
	{ number: 6, label: 'Vertical Stepper', visited: false, activated: false },
]

const App = ({ classes }) => {
	return (
		<div className={classes.wrapper}>
			<Stepper source={STEPS} />
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
