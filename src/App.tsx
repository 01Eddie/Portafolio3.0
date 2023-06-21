import { createTheme, ThemeProvider } from '@mui/material'
import Container from './components/Container'
import HeaderContainer from './components/HeaderContainer'
import Root, { classes } from './styles'

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF5823'
      },
      secondary: {
        main: '#191970'
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(',')
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Root className={classes.root}>
        <HeaderContainer />
        <Container />
      </Root>
    </ThemeProvider>
  )}

export default App
