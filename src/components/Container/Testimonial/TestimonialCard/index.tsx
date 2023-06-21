import { CardContent, CardMedia, Typography } from '@mui/material'
import Root from './styles'
import IMAGES from '../../../../images'

interface TestimonialCardProps {
  comment: string
  subtitle: string
  title: string
}

const TestimonialCard = ({ comment, subtitle,  title }: TestimonialCardProps) => (
  <Root>
    <CardMedia
      alt='green iguana'
      component='img'
      height='140'
      image={IMAGES[0].image} />
    <CardContent>
      <Typography color='text.secondary' variant='body2'>
        {comment}
      </Typography>
      <Typography variant='h3'>
        {subtitle}
      </Typography>
      <Typography variant='h4'>
        {title}
      </Typography>
    </CardContent>
    {/* <CardActions> */}
    {/* <Button size='small'>Share</Button>
      <Button size='small'>Learn More</Button> */}
    {/* </CardActions> */}
  </Root>
)

export default TestimonialCard
