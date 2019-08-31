import React from 'react'
import withStyles from 'react-jss'

const styles = theme =>  ({
	step: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.distance.default,
		cursor: 'pointer',
		'&:hover': {
			borderRadius: 4,
			backgroundColor: theme.color.stepBg,
		},
	},
	stepNum: {
		...theme.snippets.centeringChildren,
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
})

export const step = ({ classes, label, number, visited, activated, chooseStep }) => {
	const { step, stepNum,visitedStepNum, activatedStepNum } = classes

	let stepNumClasses = [stepNum]
	if (visited) {
		stepNumClasses.push(visitedStepNum)
	}
	if (activated) {
		stepNumClasses.push(activatedStepNum)
	}
	// if (number)
	return (
		<div className={step} onClick={() => chooseStep(number)}>
			<div className={stepNumClasses.join(' ')}>{number}</div>
			<div>{label}</div>
		</div>
	)
}

export const Step = withStyles(styles)(step)