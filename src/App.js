import React from 'react'
import withStyles, { ThemeProvider } from 'react-jss'

import { Stepper } from './components/Stepper'
import { theme } from './theme'
import { styles } from './styles'

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
