import { Card, styled } from '@mui/material'

const PREFIX = 'TestimonialCard'

export const classes = {
  containerImg : `${PREFIX}-containerImg`,
  containerText: `${PREFIX}-containerText`,
  img          : `${PREFIX}-img`
}

export default styled(Card, {
  name: PREFIX
})(({ theme: { spacing } }) => ({
  borderRadius: spacing(6.25, 6.25, 6.25, 0),
  maxWidth    : 200,
  padding     : spacing(3.5)
}))
