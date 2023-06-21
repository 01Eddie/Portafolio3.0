import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { Button, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import Root, { classes } from './styles'

import IMAGES from '../../../images'
import { headerStore } from '../../../store/portfolio'

const Home = () => {
  const { headerContent } = useSnapshot(headerStore)

  useEffect(() => {
    headerStore.setPortfolio()
  }, [])

  // const headerContent = useMemo(() => portfolio.find(filter => filter.category.includes('headerContent')), [ portfolio ])

  return (

    <Root>
      <div className={classes.container}>
        <>
          <Typography color='white' variant='h3'>
            {headerContent?.name}
          </Typography>
          <div className={classes.contents}>
            <Typography className={classes.subtitle} color='white' variant='h2'>
              {/* {headerContent?.technology} */}
              <Typewriter
                options={{
                  autoStart: true,
                  loop     : true,
                  strings  : [
                    'React',
                    'React Native',
                    'NodeJS',
                    'Express'
                  ]
                }} />
            </Typography>
            <Typography color='white' variant='body1'>
              {headerContent?.knows}
            </Typography>
          </div>
        </>
        <div className={classes.containerBtn}>
          <Button className={classes.btnHire} size='large' variant='outlined'>Hire Me</Button>
          <Button className={classes.btnResume} size='large' variant='contained'>Get Resume</Button>
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
