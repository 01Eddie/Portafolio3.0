import Header from './Header'
import Home from './Home'
import Root, { classes } from './styles'
import IMAGES from '../../images'

const HeaderContainer = () => (
  <Root>
    <Header />
    <Home />
    <div className={classes.divImg}>
      <img
        alt='background' src={IMAGES[2].image}
        width='100%' />
    </div>
  </Root>
)

export default HeaderContainer
