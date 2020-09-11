import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone'
import CardContent from '@material-ui/core/CardContent'
import { CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	header: {
		marginBottom: theme.spacing(2),
	},

	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		textDecoration: 'none',
	},

	cardContent: {
		flexGrow: 1,
	},
	media: {
		height: 0,
		width: '50%',
		paddingTop: '56.25%',
		margin: 'auto',
		marginBottom: '20px',
	},
}))

const CardDog = ({ dog, onClickDog }) => {
	const classes = useStyles()

	return (
		<Grid item key={dog.breedName} xs={12} sm={6} md={4} lg={3} xl={2}>
			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
					<CardMedia
						className={classes.media}
						image="assets/dog-api-logo.svg"
						title="dog image logo"
					/>
					<Button
						onClick={() => onClickDog(dog)}
						variant="contained"
						color="primary"
						size="large"
						startIcon={<VisibilityTwoToneIcon />}
					>
						{dog.breedName}
					</Button>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default CardDog
