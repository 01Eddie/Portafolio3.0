import { Typography } from '@mui/material'
import Root, { classes } from './styles'

interface HeaderTitleProps {
  title?: string
  description?: string
  id: string
}

const HeaderTitle = ({ title, description, id }: HeaderTitleProps) => (
  <Root>
    <Typography id={id} variant='h3'>{title}</Typography>
    <Typography variant='body1'>{description}</Typography>
    <div className={classes.separatator}>
      <div className={classes.separatatorLine}></div>
      <div className={classes.squadre}><div className={classes.squadreColor}></div></div>
    </div>
  </Root>
)

export default HeaderTitle
