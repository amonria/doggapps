import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import Box from '@material-ui/core/Box'
import AppBar from './imports/ui/AppBar'
import Landing from './imports/ui/Landing'
import MainHeader from './imports/ui/Header'


export const App = () => {
	const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const storedDarkMode = localStorage.getItem('darkMode')
	const defaultDarkMode =
		storedDarkMode === null ? null : storedDarkMode === 'true'

	const [darkMode, setDarkMode] = useState(defaultDarkMode)
	const changeDarkMode = (dark) => {
		localStorage.setItem('darkMode', dark)
		setDarkMode(dark)
	}
	const paletteDarkMode = darkMode === null ? systemDarkMode : darkMode
	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: paletteDarkMode ? 'dark' : 'light',
					primary: {
						main: paletteDarkMode ? indigo['A200'] : indigo['A400'],
					},
					secondary: {
						main: paletteDarkMode ? pink['A400'] : pink['A400'],
					},
				},
			}),
		[paletteDarkMode]
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<AppBar
					darkMode={paletteDarkMode}
					changeDarkMode={changeDarkMode}
				/>
				<MainHeader/>

				<Box component="main" mt={4} mb={2}>
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</Box>
			</Router>
		</ThemeProvider>
	)
}
export default App
