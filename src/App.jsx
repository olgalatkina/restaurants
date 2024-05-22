import { restaurants } from '../constants/mock'
import { Restaurants } from './components/restaurants/component'
import { Layout } from './components/layout/component'

export const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  )
}
