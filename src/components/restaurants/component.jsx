/* eslint-disable react/jsx-key */
import { Restaurant } from '../restaurant/component'

export const Restaurants = ({ restaurants }) => {
  return (
    <main>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li>
            <Restaurant {...restaurant} />
          </li>
        ))}
      </ul>
    </main>
  )
}
