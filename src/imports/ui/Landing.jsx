import React, { useState, useEffect, useCallback } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'
import ButtonReload from './ButtonReload'
import Dog from '../models/Dog'
import DogsList from './DogsList'
import DogsContext from '../context/DogsContext'

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}))

const Landing = () => {
	const [hasError, setErrors] = useState(false)
	const [dogs, setDogs] = useState([])

	const getAllDogs = useCallback(() => {
		axios('https://dog.ceo/api/breeds/list/all')
			.then((response) => {
				const respMap = new Map(Object.entries(response.data))
				const dogsMap = new Map(Object.entries(response.data.message))
				if (respMap.get('status') === 'success') {
					let arDogs = []
					for (const key of dogsMap.keys()) {
						arDogs.push(new Dog(key, dogsMap.get(key)))
					}
					setDogs(arDogs)
				} else {
					setErrors(true)
				}
			})
			.catch((error) => {
				setErrors(true)
			})
	}, [])

	const handleReload = (event) => {
		getAllDogs()
	}

	const classes = useStyles()

	useEffect(() => {
		getAllDogs()
	}, [getAllDogs])

	return (
		<Container maxWidth={false} className={classes.root}>
			{hasError ? (
				<ButtonReload onReload={handleReload} />
			) : (
				<DogsContext.Provider value={dogs}>
					<DogsList></DogsList>
				</DogsContext.Provider>
			)}
		</Container>
	)
}

export default Landing
