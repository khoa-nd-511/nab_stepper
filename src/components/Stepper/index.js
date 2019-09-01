import React, { useState, useRef, useEffect } from 'react'
import withStyles from 'react-jss'

import { Step } from '../Step'
import { styles } from './styles'
const STEPS = [
	{ number: 1, label: 'Supplier', visited: true, activated: true },
	{ number: 2, label: 'Basic Infomation', visited: false, activated: false },
	{ number: 3, label: 'Language', visited: false, activated: false },
	{ number: 4, label: 'Lorem ispsum', visited: false, activated: false },
	{ number: 5, label: 'Some dumb text', visited: false, activated: false },
	{ number: 6, label: 'Vertical Stepper', visited: false, activated: false },
]

const StepperComp = ({ classes }) => {
	const [width, setWidth] = useState(0)
	const ref = useRef()
	const [steps, setActiveStep] = useState(STEPS)

	const updateWidth = () => setWidth(ref.current.clientWidth / STEPS.length)

	useEffect(() => {
		updateWidth()
	}, [])

	useEffect(() => {
		window.addEventListener('resize', updateWidth)

		return () => {
			window.removeEventListener('resize', updateWidth)
		}
	})

	const setActiveStepHandler = number => {
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
		<div className={classes.stepper} ref={ref}>
			{steps.map((step, idx) => (
				<Step
					key={idx}
					chooseStep={setActiveStepHandler}
					width={width}
					{...step}
					isLastStep={idx === steps.length - 1}
					isFirstStep={idx === 0}
				/>)
			)}
		</div>
	)
}

export const Stepper = withStyles(styles)(StepperComp)