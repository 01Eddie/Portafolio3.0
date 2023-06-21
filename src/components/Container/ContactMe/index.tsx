import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'

import Root, { classes } from './styles'
import IMAGES from '../../../images'

const ContactMe = () => (
  <Root elevation={6}>
    <CardContent sx={{ pb: 0 }}>
      <Typography color='white' display={'flex'} variant='h2'>
        Get In Touch 📧
        <Typewriter
          options={{
            autoStart: true,
            loop     : true
          }} />
      </Typography>
    </CardContent>
    <div className={classes.bodyContain}>
      <CardContent className={classes.contentCard}>
        <Typography color='white' variant='h4'>
          Send Your Email Here!
        </Typography>
        <CardMedia
          alt='Live from space album cover'
          className={classes.imgCard}
          component='img'
          image={IMAGES[4].image}
          sx={{ opacity: 0.5 }} />
      </CardContent>
      <Card className={classes.cardForm}>
        <CardContent>
          <Typography variant='body1'>
            Name
          </Typography>
          <TextField
            fullWidth size='small' sx={{ mb: 2 }}
            variant='outlined' />
          <Typography variant='body1'>
            Email
          </Typography>
          <TextField
            fullWidth size='small' sx={{ mb: 2 }}
            variant='outlined' />
          <Typography variant='body1'>
            Message
          </Typography>
          <TextField
            fullWidth multiline rows={4}
            size='small' />
        </CardContent>
        <CardActions>
          <Button className={classes.btnSend} size='large' variant='contained'>Send</Button>
        </CardActions>
      </Card>
    </div>
  </Root>
)

export default ContactMe
