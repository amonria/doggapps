import React, { useState, useEffect, useCallback } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
	header: {
		margin: 0,
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	headerText: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		paddingRight: theme.spacing(4),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},


	media: {
		width: '100%',
		height: 'auto',
	},

	textvariations:{
		textAlign:'center'
	},

	dialogContent: {
		marginBottom: 0,
		padding: 0,
	},
}))

const DogDialogPreview = (props) => {
	const classes = useStyles()

	const { dog, handleClose, fullScreen } = props
	const [imageUrl, setImage] = useState('')
	const [hasError, setErrors] = useState(false)

	const getRandomImage = useCallback(() => {
		axios(`https://dog.ceo/api/breed/${dog.breedName}/images/random`)
			.then((response) => {
				const respMap = new Map(Object.entries(response.data))
				if (respMap.get('status') === 'success') {
					setImage(response.data.message)
				} else {
					setErrors(true)
				}
			})
			.catch(() => {
				setErrors(true)
			})
	}, [dog.breedName])

	const onClose = (force) => {
		handleClose()
	}

	useEffect(() => {
		getRandomImage()
	}, [getRandomImage])

	return (
		<Dialog
			open={dog !== undefined}
			fullWidth
			fullScreen={fullScreen}
			maxWidth="sm"
			scroll="body"
			onClose={onClose}
		>
			<DialogTitle disableTypography className={classes.header}>
				<Typography variant="h6" className={classes.headerText}>
					{dog.breedName}
				</Typography>
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers className={classes.dialogContent}>
				{hasError ? (
					<CircularProgress />
				) : (
					<img
						src={imageUrl}
						alt={dog.breedName}
						className={classes.media}
					></img>
				)}
				{
					<Typography variant="subtitle2" gutterBottom className={classes.textvariations}>
						{dog.variationNames.join(', ')}
					</Typography>
				}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="default">
					Close
				</Button>
				<Button
					color="primary"
					variant="contained"
					onClick={() => getRandomImage()}
				>
					Show another
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default DogDialogPreview
