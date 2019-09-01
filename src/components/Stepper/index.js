import React, { useState, useRef, useEffect } from 'react'
import withStyles from 'react-jss'

import { Step } from '../Step'
import { styles } from './styles'

const StepperComp = ({ classes, source }) => {
	const [width, setWidth] = useState(0)
	const ref = useRef()
	const [steps, setActiveStep] = useState(source)

	const updateWidth = () => setWidth(ref.current.clientWidth / steps.length)

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