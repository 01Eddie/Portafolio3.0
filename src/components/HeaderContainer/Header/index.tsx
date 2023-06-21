import { SyntheticEvent, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu'
import { headerStore } from '../../../store/portfolio'
import Root, { classes } from './styles'

// type Anchor =  'left'

const Header = () => {
  const [ state, setState ] = useState(false)
  const { portfolio } = useSnapshot(headerStore)

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent | SyntheticEvent) => {
    if(event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift'))
      return

    setState(open)
  }

  useEffect(() => {
    headerStore.setPortfolio()
  }, [])

  const _ChangeLang = () => {
    headerStore.setChangeLang()
  }

  return (
    <Root id='home'>
      <IconButton
        aria-label='open drawer'
        className={classes.menuHmb}
        edge='start'
        onClick={toggleDrawer(true)} >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer
        anchor={'left'}
        onClose={toggleDrawer(false)}
        open={state}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width    : {
              sm: 250,
              xs: '100%'
            }
          }
        }}>
        <Typography sx={{ my: 2 }} variant='h6'>
          {portfolio[0]?.name}
        </Typography>
        <Divider />
        <List>
          {
            portfolio
              .filter(filter => filter.id !== 0 && filter.category.includes('options'))
              .map((option) => (
                <ListItem disablePadding key={option.id}>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={option.name} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Drawer>

      <div className={classes.title}>
        <Typography component='h2' variant='h1'>
          {portfolio[0]?.name}
        </Typography>
      </div>
      <Button onClick={_ChangeLang}>
        Change Language
      </Button>
      <div className={classes.options}>
        {
          portfolio.filter(filter => filter.id !== 0 && filter.category.includes('options'))
            .map(option => (
              <Link
                className={classes.link}
                duration={500}
                key={option.id}
                offset={-20}
                smooth spy to={option.name || 'Home'}>
                {option.name}
              </Link>
            ))}
      </div>
    </Root>
  )
}

export default Header
