import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { Button, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import { headerStore } from '../../../store/portfolio'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import Root, { classes } from './styles'
import IMAGES from '../../../images'

const AboutMe = () => {
  const { aboutMe, links, nameBtns } = useSnapshot(headerStore)

  useEffect(() => {
    headerStore.setLinks()
  }, [])

  const _OnClickLinks = (name: string) => () => {
    // eslint-disable-next-line valtio/state-snapshot-rule
    const url = links.find(elem => elem.link === name ? elem.url : '')?.url
    window.open(url, '_blank')
  }

  return (
    <Root elevation={6}>
      <CardMedia
        alt='Live from space album cover'
        className={classes.imgCard}
        component='img'
        image={IMAGES[1].image} />
      <div className={classes.container}>
        <CardContent>
          <Typography variant='body2'>
            {aboutMe?.content}
          </Typography>
          <Typography variant='body2'>
            {aboutMe?.optSgt}
          </Typography>
          <List className={classes.listContainer}>
            {
              aboutMe?.highlights?.map(highlight => (
                <ListItem key={highlight.idH}>
                  <ListItemIcon>
                    <Brightness1RoundedIcon color='info' />
                  </ListItemIcon>
                  <ListItemText secondary={highlight.name} />
                </ListItem>
              ))
            }
          </List>

        </CardContent>
        <CardActions className={classes.containerBtn}>
          <Button
            className={classes.btnHire}
            onClick={_OnClickLinks('linkedin')}
            size='large'
            variant='contained'>{nameBtns?.name}</Button>
          <Button
            className={classes.btnResume}
            onClick={_OnClickLinks('cv')}
            size='large'
            variant='contained'>{nameBtns?.title}</Button>
        </CardActions>
      </div>
    </Root>
  )
}
export default AboutMe
