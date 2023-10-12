import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { Button, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import Root, { classes } from './styles'

import IMAGES from '../../../images'
import { headerStore } from '../../../store/portfolio'

const Home = () => {
  const { headerContent, links, nameBtns } = useSnapshot(headerStore)

  useEffect(() => {
    headerStore.setPortfolio()
    headerStore.setLinks()
  }, [])

  const _OnClickLinks = (name: string) => () => {
    // eslint-disable-next-line valtio/state-snapshot-rule
    const url = links.find(elem => elem.link === name ? elem.url : '')?.url
    window.open(url, '_blank')
  }

  return (

    <Root>
      <div className={classes.container}>
        <>
          <Typography color='white' variant='h3'>
            {headerContent?.name}
          </Typography>
          <div className={classes.contents}>
            <Typography className={classes.subtitle} color='white' variant='h2'>
              <Typewriter
                options={{
                  autoStart: true,
                  loop     : true,
                  strings  : headerContent?.technology as string[]
                }} />
            </Typography>
            <Typography color='white' variant='body1'>
              {headerContent?.knows}
            </Typography>
          </div>
        </>
        <div className={classes.containerBtn}>
          <Button
            className={classes.btnHire}
            onClick={_OnClickLinks('linkedin')}
            size='large'
            variant='outlined'>{nameBtns?.name}</Button>
          <Button
            className={classes.btnResume}
            onClick={_OnClickLinks('cv')}
            size='large'
            variant='contained'>{nameBtns?.title}</Button>
        </div>
      </div>
      <div className={classes.divImg}>
        <img
          alt='Eddie HG' className={classes.logoImg}
          src={IMAGES[0].image} />
      </div>
    </Root>
  )}

export default Home
