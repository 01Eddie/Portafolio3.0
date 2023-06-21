import { useSnapshot } from 'valtio'
import { Button, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

import { headerStore } from '../../../store/portfolio'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded'
import Root, { classes } from './styles'
import IMAGES from '../../../images'

const AboutMe = () => {
  const { aboutMe } = useSnapshot(headerStore)

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
          <Button className={classes.btnHire} size='large' variant='contained'>Hire Me</Button>
          <Button className={classes.btnResume} size='large' variant='contained'>Get Resume</Button>
        </CardActions>
      </div>
    </Root>
  )
}
export default AboutMe
