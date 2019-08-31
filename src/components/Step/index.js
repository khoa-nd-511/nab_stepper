import React from 'react'
import withStyles from 'react-jss'

const styles = theme =>  ({
	step: {
		textAlign: 'center',
		padding: theme.distance.default,
		cursor: 'pointer',
		'&:hover': {
			borderRadius: 4,
			backgroundColor: theme.color.stepBg,
		},
	},
	stepNum: {
		...theme.snippets.centeringChildren,
		display: 'inline-flex',
		width: theme.size.medium,
		height: theme.size.medium,
		borderRadius: theme.shape.rounded,
		marginBottom: theme.distance.medium,
		fontSize: theme.font.number,
		lineHeight: theme.lineHeight.number,
		color: theme.color.primeColor,
		border: `2px solid ${theme.color.lightPrimeColor}`,
		transition: ['background', 'color'],
		transitionDuration: 200,
	},
	visitedStepNum: {
		color: theme.color.white,
		backgroundColor: theme.color.primeColor,
		boxShadow: 'none',
	},
	activatedStepNum: {
		boxShadow: `0 0 0 6px ${theme.color.lighterPrimeColor}`,
	},
	activatedStepLabel: {
		fontWeight: theme.fontWeight.active,
		fontSize: theme.font.activeLabel,
		lineHeight: theme.lineHeight.activeLabel,
	}
})

export const step = ({ classes, label, number, visited, activated, chooseStep, width }) => {
	if (!width) return null
	const { step, stepNum, visitedStepNum, activatedStepNum, activatedStepLabel } = classes

	let stepNumClasses = [stepNum]
	let stepLabelClasses = []
	if (visited) {
		stepNumClasses.push(visitedStepNum)
	}
	if (activated) {
		stepNumClasses.push(activatedStepNum)
		stepLabelClasses.push(activatedStepLabel)
	}
	// if (number)
	return (
		<div className={step} onClick={() => chooseStep(number)} style={{ width: width }}>
			<div className={stepNumClasses.join(' ')}>{number}</div>
			<div className={stepLabelClasses.join(' ')}>{label}</div>
		</div>
	)
}

export const Step = withStyles(styles)(step)