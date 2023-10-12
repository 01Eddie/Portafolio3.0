import { Link, Typography } from '@mui/material'
import { useSnapshot } from 'valtio'
import { headerStore } from '../../../../store/portfolio'

const Projects = () => {
  const { resume } = useSnapshot(headerStore)

  return (
    <>
      {
        resume?.details && resume?.details[3].detail.map(({ idDD, name, named, time }) => (
          <div key={idDD} style={{ padding: 3 }}>
            <Typography component='div' gutterBottom variant='h5'>
              {name}
            </Typography>
            <Typography component='div' gutterBottom variant='body1'>Lenguaje: {named}</Typography>
            <Typography component='div' gutterBottom variant='body1'>Link: <Link href={time} target='_blank'>{time}</Link></Typography>
          </div>))
      }
    </>
  )}

export default Projects
