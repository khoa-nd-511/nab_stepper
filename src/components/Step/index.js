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
		fontSize: theme.font.number,
		lineHeight: theme.lineHeight.number,
		color: theme.color.primeColor,
		border: `2px solid ${theme.color.lightPrimeColor}`,
		transition: [	'color'],
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
	stepLabel: {
		marginTop: theme.distance.medium,
	},
	activatedStepLabel: {
		fontWeight: theme.fontWeight.active,
		fontSize: theme.font.activeLabel,
		lineHeight: theme.lineHeight.activeLabel,
	},
	leftProgress: {
		...theme.snippets.progressLine,
		left: -(theme.distance.default),
	},
	rightProgress: {
		...theme.snippets.progressLine,
		right: -(theme.distance.default),
	},
	'@media (max-width: 768px)': {
		step: {
			display: 'flex',
			alignItems: 'center',
			textAlign: 'left',
			width: 'auto !important',
			padding: '16px 12px',
		},
		stepLabel: {
			marginTop: 0,
			marginLeft: theme.distance.medium,
		},
		leftProgress: {
			...theme.snippets.progressLineMobile,
			top: -(theme.distance.default),
		},
		rightProgress: {
			...theme.snippets.progressLineMobile,
			bottom: -(theme.distance.default),
		},
	}
})

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