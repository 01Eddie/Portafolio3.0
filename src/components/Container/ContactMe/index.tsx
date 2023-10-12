import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Alert, Button, Card, CardActions, CardContent, CardMedia, SelectChangeEvent, Snackbar, TextField, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'

import IMAGES from '../../../images'
import { headerStore } from '../../../store/portfolio'
import { SendEmailType } from '../../../model/portfolioTypes'
import { NonFunctionProperties } from '../../../types'
import Root, { classes } from './styles'

const ContactMe = () => {
  const [ open, setOpen ] = useState(false)

  const { contact, fieldsSend: { mailField, message, nameField }, disabledBtn, isEmailInvalid } = useSnapshot(headerStore, { sync: true })

  const _handleChangeText = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const { name, value } = ev.target

    headerStore.setFieldsSend(name as keyof NonFunctionProperties<SendEmailType>, value)
  }

  const _BtnSend = () => {
    headerStore.postDataSend()
    headerStore.clearDataField()
    setOpen(true)
  }

  const _handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if(reason === 'clickaway')
      return

    setOpen(false)
  }

  return (
    <Root elevation={6}>
      <CardContent sx={{ pb: 0 }}>
        <Typography color='white' display={'flex'} variant='h2'>
          {contact?.name} 📧
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
            {contact?.content}
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
              {contact?.form?.name}
            </Typography>
            <TextField
              fullWidth
              name='nameField'
              onChange={_handleChangeText}
              size='small'
              sx={{ mb: 2 }}
              value={nameField}
              variant='outlined' />
            <Typography variant='body1'>
              {contact?.form?.email}
            </Typography>
            <TextField
              error={!isEmailInvalid}
              fullWidth
              helperText={!isEmailInvalid ? 'Invalid email address' : ''}
              name='mailField'
              onChange={_handleChangeText}
              size='small'
              sx={{ mb: 2 }}
              type='email'
              value={mailField}
              variant='outlined' />
            <Typography variant='body1'>
              {contact?.form?.message}
            </Typography>
            <TextField
              fullWidth
              multiline
              name='message'
              onChange={_handleChangeText}
              rows={4}
              size='small'
              value={message} />
          </CardContent>
          <CardActions>
            <Button
              className={classes.btnSend} disabled={!(isEmailInvalid && disabledBtn)} onClick={_BtnSend}
              size='large'
              variant='contained'>{contact?.form?.nameBtn}</Button>
          </CardActions>
        </Card>
        <Snackbar autoHideDuration={6000} onClose={_handleClose} open={open}>
          <Alert onClose={_handleClose} severity='success' sx={{ width: '100%' }}>
            Mensaje enviado!!
          </Alert>
        </Snackbar>
      </div>
    </Root>
  )}

export default ContactMe
