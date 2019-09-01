export const styles = theme => ({
	progressLineBefore: {
		...theme.snippets.progressLine,
		left: -theme.distance.default,
	},
	progressLineAfter: {
		...theme.snippets.progressLine,
		right: -theme.distance.default,
	},
	'@media (max-width: 768px)': {
		progressLineBefore: {
			...theme.snippets.progressLineMobile,
			top: -theme.distance.default,
		},
		progressLineAfter: {
			...theme.snippets.progressLineMobile,
			bottom: -theme.distance.default,
		},
	}
})