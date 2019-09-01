import React from 'react'
import withStyles from 'react-jss'
import { styles } from './styles'

const ProgressLineComp = ({ classes, active, before, current, theme }) => {
	const { progressLineBefore, progressLineAfter } = classes
	const progressLineClasses = []
	before ? progressLineClasses.push(progressLineBefore) : progressLineClasses.push(progressLineAfter)
	const style = {}
	style.backgroundColor = active && !current ? theme.color.primeColor : theme.color.progressLine

	return <div className={progressLineClasses.join(' ')} style={{...style}} />
}

export const ProgressLine = withStyles(styles)(ProgressLineComp)