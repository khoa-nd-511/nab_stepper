import React from 'react'
import withStyles from 'react-jss'

const styles = theme =>  ({
	step: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.distance.default,
		backgroundColor: theme.color.lightGrey,
	},
	stepNum: {
		...theme.snippets.centeringChildren,
		width: theme.size.medium,
		height: theme.size.medium,
		borderRadius: theme.shape.rounded,
		marginBottom: theme.distance.medium,
		fontSize: theme.font.number,
		color: theme.color.white,
		lineHeight: theme.lineHeight.number,
		backgroundColor: theme.color.primeColor
	}
})

export const step = ({ classes, label, number }) => {
	const { step, stepNum } = classes
	return (
		<div className={step}>
			<div className={stepNum}>{number}</div>
			<div>{label}</div>
		</div>
	)
}

export const Step = withStyles(styles)(step)