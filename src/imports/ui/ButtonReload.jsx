import React from 'react'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReloadIcon from '@material-ui/icons/Refresh'

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}))

export default function ButtonReload({ onReload }) {
	const classes = useStyles()

	return (
		<Button
			onClick={onReload}
			variant="contained"
			color="secondary"
			className={classes.button}
			startIcon={<ReloadIcon />}
		>
			Try connect
		</Button>
	)
}
