import { useSnapshot } from 'valtio'
import { Fab } from '@mui/material'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { headerStore } from '../../store/portfolio'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import HeaderTitle from './HeaderTitle'
import Resume from './Resume'
import Testimonial from './Testimonial'

import Root, { classes } from './styles'
import { Link } from 'react-scroll'

const About = () => {
  const { aboutMe, resume, testimonial } = useSnapshot(headerStore)

  return (
    <Root>
      <HeaderTitle
        description={aboutMe?.subtitle}
        id={String(aboutMe?.title)}
        title={aboutMe?.title} />
      <AboutMe />
      <HeaderTitle
        description={resume?.subtitle}
        id={String(resume?.title)}
        title={resume?.title} />
      <Resume />
      <HeaderTitle
        description={testimonial?.subtitle}
        id={String(testimonial?.title)}
        title={testimonial?.title} />
      <Testimonial />
      <HeaderTitle
        description='Lets Keep In Touch'
        id={'Contact me' ?? 'Contactame'}
        title={'Contact Me'} />
      <ContactMe />
      <Link
        className={classes.floatBtn}
        duration={500}
        offset={-70}
        smooth
        spy
        to='home'>
        <Fab color='primary' variant='extended'>
          <UpIcon />
        </Fab>
      </Link>

    </Root>
  )
}
export default About
