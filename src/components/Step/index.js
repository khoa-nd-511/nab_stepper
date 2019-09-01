import React from 'react'
import withStyles from 'react-jss'

import { ProgressLine } from '../ProgressLine'
import { styles } from './styles'

export const StepComp = ({ classes, label, number, visited, activated, chooseStep, width, isFirstStep, isLastStep }) => {
	if (!width) return null
	const { step, stepNum, visitedStepNum, activatedStepNum, activatedStepLabel, stepLabel } = classes

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
				{!isFirstStep && <ProgressLine active={visited} before />}
				<div className={stepNumClasses.join(' ')}>{number}</div>
				{!isLastStep && <ProgressLine active={visited} current={activated} />}
			</div>
			<div className={stepLabelClasses.join(' ')}>{label}</div>
		</div>
	)
}

export const Step = withStyles(styles)(StepComp)