import React, { useContext, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import DogsContext from '../context/DogsContext'
import DogDialogPreview from './DogDialogPreview'
import CardDog from './CardDog'

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
	addCompanyCardContent: {
		minHeight: '200px',
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
}))



const DogsList = () => {

    const [_selDog, selDog]=useState()
	const dogs = useContext(DogsContext)

    const classes = useStyles()
    const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'))


    const closeWorkplaceDialog = () => {
		selDog(undefined)
	}


    
    const handleonClickDog = (dog) => {
        selDog(dog);
    }

	return (
		<>
			{_selDog&&<DogDialogPreview dog={_selDog}
            handleClose={closeWorkplaceDialog}
            fullScreen={xs}></DogDialogPreview>}
			<Container maxWidth={false}>
				<Typography
					variant='h5'
					component='h2'
					className={classes.header}
				>
					Select dog
				</Typography>
				<Grid container spacing={4}>
					{dogs.map((dog) =>  <CardDog key={dog.breedName} dog={dog} onClickDog={handleonClickDog}></CardDog>
						
					)}
				</Grid>
			</Container>
		</>
	)
}

export default DogsList
