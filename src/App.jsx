import { Restaurants } from './components/restaurants/component'
import { Header } from './components/header/component'
import { Footer } from './components/footer/component'
import { restaurants } from '../constants/mock'

export const App = () => {
  return (
    <>
      <Header />
      <Restaurants restaurants={restaurants} />
      <Footer />
    </>
  )
}
