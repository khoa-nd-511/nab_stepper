export const styles = theme => ({
	wrapper: {
		marginTop: theme.distance.far,
		fontSize: theme.font.label,
		lineHeight: theme.lineHeight.label,
		fontFamily: theme.font.defaultFontFamily,
	},
	'@media (max-width: 768px)': {
		wrapper: {
			display: 'flex',
		},
	}
})
