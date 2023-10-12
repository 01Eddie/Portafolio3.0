import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { Link, Typography } from '@mui/material'
import { CallOutlined, PlaceOutlined, IntegrationInstructionsOutlined as DeveloperIcon } from '@mui/icons-material'

import { headerStore } from '../../../store/portfolio'

import Root, { classes } from './styles'

const FooterMe = () => {
  const { links, footer } = useSnapshot(headerStore)

  useEffect(() => {
    headerStore.setLinks()
  }, [])

  const _OnClickLinks = (name: string) => () => {
    // eslint-disable-next-line valtio/state-snapshot-rule
    const url = links.find(elem => elem.link === name ? elem.url : '')?.url
    window.open(url, '_blank')
  }

  return (
    <Root>
      <div className={classes.left}>
        <Typography className={classes.name}><DeveloperIcon className={classes.icon} fontSize='small' /> Eddie HG</Typography>
        <Typography className={classes.phoneNumber}><CallOutlined className={classes.icon} fontSize='small' />+51 936859517</Typography>
        <Typography className={classes.address}><PlaceOutlined className={classes.icon} fontSize='small' />Lima, Peru</Typography>
      </div>
      <div className={classes.right}>
        <Typography className={classes.social}>{footer?.knows}:</Typography>
        <Link className={classes.socialMedia} onClick={_OnClickLinks('medium')}><Typography>Medium</Typography></Link>
        <Link className={classes.socialMedia} onClick={_OnClickLinks('github')}><Typography>Github</Typography></Link>
        <Link className={classes.socialMedia} onClick={_OnClickLinks('linkedin')}><Typography>Linkedin</Typography></Link>
      </div>
    </Root>
  )}

export default FooterMe
