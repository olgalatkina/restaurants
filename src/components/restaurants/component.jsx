import { useState } from 'react'
import { Restaurant } from '../restaurant/component'
import { RestaurantTabs } from '../restaurant-tabs/component'

export const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (!restaurants.length) {
    return (
      <main>
        <h1>Oops!</h1>
      </main>
    )
  }

  const activeRestaurant = restaurants[activeRestaurantIndex]

  return (
    <main>
      <h1>Restaurants</h1>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeTabIndex={activeRestaurantIndex}
      />
      <Restaurant {...activeRestaurant} />
    </main>
  )
}
