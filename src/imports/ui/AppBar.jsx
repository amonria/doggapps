import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone'
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		whiteSpace: 'nowrap',
	},
	title: {
		flexGrow: 1,
		color: 'inherit',
		textDecoration: 'none',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	darkModeButton: {
		marginRight: theme.spacing(2),
	},
	
}))

export default function MenuAppBar({ darkMode, changeDarkMode }) {
	const classes = useStyles()

	const handleDarkModeChange = () => {
		changeDarkMode(!darkMode)
	}
	return (
		<div className={classes.root}>
			<AppBar position="static" >
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Breeds list
					</Typography>
					<IconButton
						className={classes.darkModeButton}
						color="inherit"
						edge="end"
						onClick={handleDarkModeChange}
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<Brightness2TwoToneIcon />
						) : (
							<WbSunnyTwoToneIcon />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}
