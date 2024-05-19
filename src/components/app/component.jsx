import { restaurants } from '../../../constants/mock'
import { Header } from '../header/component'
import { Footer } from '../footer/component'
import { Restaurant } from '../restaurant/component'
import { List } from '../list/component'
export const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Restaurants</h1>
        <List items={restaurants} ItemComponent={Restaurant} />
      </main>
      <Footer />
    </>
  )
}
