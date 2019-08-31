import React, { useState } from 'react'
import withStyles from 'react-jss'

import { Step } from '../Step'

const styles = theme => ({
	stepper: {
		...theme.snippets.centeringChildren,
		width: '100%'
	}
})

const STEPS = [
	{ number: 1, label: 'Supplier', visited: true, activated: true },
	{ number: 2, label: 'Basic Infomation', visited: false, activated: false },
	{ number: 3, label: 'Language', visited: false, activated: false },
	{ number: 4, label: 'Lorem ispsum', visited: false, activated: false },
	{ number: 5, label: 'Some dumb text', visited: false, activated: false },
	{ number: 6, label: 'Vertical Stepper', visited: false, activated: false },
]

const StepperComp = ({ classes }) => {
	const [steps, setActiveStep] = useState(STEPS)

	const setActiveStepHandler = number => {
		console.log(number)
		const updatedSteps = steps.map(step => {
			if (number < step.number) return {...step, activated: false, visited: false}
			if (step.number === number) {
				return {...step, visited: true, activated: true}
			}
			return {...step, visited: true, activated: false}
		})
		setActiveStep(updatedSteps)
	}

	return (
		<div className={classes.stepper}>
			{steps.map((step, idx) => <Step key={idx} {...step} chooseStep={setActiveStepHandler} />)}
		</div>
	)
}

export const Stepper = withStyles(styles)(StepperComp)