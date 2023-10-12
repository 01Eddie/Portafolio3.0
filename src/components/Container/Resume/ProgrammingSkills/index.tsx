import { Typography } from '@mui/material'
import { useSnapshot } from 'valtio'
import { headerStore } from '../../../../store/portfolio'

const ProgrammingSkills = () => {
  const { resume } = useSnapshot(headerStore)

  return (
    <>
      {
        resume?.details && resume?.details[2].detail.map(({ idDD, name, named, time }) => (
          <div key={idDD} style={{ marginRight: 80, padding: 3 }}>
            <Typography component='div' gutterBottom variant='h5'>{name}</Typography>
            <Typography component='div' gutterBottom variant='body1'>{named}</Typography>
            <Typography component='div' gutterBottom variant='body1'>{time}</Typography>
          </div>
        ))
      }
    </>
  )}

export default ProgrammingSkills
