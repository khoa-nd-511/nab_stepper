import React from 'react'
import withStyles from 'react-jss'
import { styles } from './styles'

export const step = ({ classes, label, number, visited, activated, chooseStep, width, isFirstStep, isLastStep }) => {
	if (!width) return null
	const { step, stepNum, visitedStepNum, activatedStepNum, activatedStepLabel, stepLabel, leftProgress, rightProgress } = classes

	const stepNumClasses = [stepNum]
	const stepLabelClasses = [stepLabel]
	if (visited) {
		stepNumClasses.push(visitedStepNum)
	}
	if (activated) {
		stepNumClasses.push(activatedStepNum)
		stepLabelClasses.push(activatedStepLabel)
	}

	return (
		<div className={step} onClick={() => chooseStep(number)} style={{ width: width }}>
			<div style={{ position: 'relative' }}>
				{(activated || visited) && !isFirstStep && <div className={leftProgress} />}
				<div className={stepNumClasses.join(' ')}>{number}</div>
				{!activated && visited && !isLastStep && <div className={rightProgress} />}
			</div>
			<div className={stepLabelClasses.join(' ')}>{label}</div>
		</div>
	)
}

export const Step = withStyles(styles)(step)