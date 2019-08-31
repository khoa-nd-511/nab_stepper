export const styles = theme =>  ({
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
