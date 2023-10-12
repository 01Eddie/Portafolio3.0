import { useSnapshot } from 'valtio'
import { Fab } from '@mui/material'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { headerStore } from '../../store/portfolio'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import HeaderTitle from './HeaderTitle'
import Resume from './Resume'
// import Testimonial from './Testimonial'
import FooterMe from './FooterMe'

import Root, { classes } from './styles'
import { Link } from 'react-scroll'

const About = () => {
  const { aboutMe, resume, contact, footer } = useSnapshot(headerStore)

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
      {/* <HeaderTitle
        description={testimonial?.subtitle}
        id={String(testimonial?.title)}
        title={testimonial?.title} /> */}
      {/* <Testimonial /> */}
      <HeaderTitle
        description={contact?.subtitle}
        id={String(contact?.title)}
        title={contact?.title} />
      <ContactMe />
      <HeaderTitle
        description={footer?.subtitle}
        id={String(footer?.title)}
        title={footer?.title} />
      <FooterMe />
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
