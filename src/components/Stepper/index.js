import React from 'react'
import withStyles from 'react-jss'

import { Step } from '../Step'

const styles = theme => ({
	stepper: {
		...theme.snippets.centeringChildren,
		width: '100%'
	}
})

const renderSteps = steps =>
	steps.map((step, idx) => <Step key={idx} {...step} />)

export const stepper = ({ classes, steps }) => 
	<div className={classes.stepper}>
		{renderSteps(steps)}
	</div>



export const Stepper = withStyles(styles)(stepper)