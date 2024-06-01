import { useState } from 'react'
import { Restaurant } from '../restaurant/component'
import { RestaurantTabs } from '../restaurant-tabs/component'
import { ScrollProgressBar } from '../scroll-progress-bar/component'

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
      <ScrollProgressBar />
      <h1>Restaurants</h1>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeTabIndex={activeRestaurantIndex}
      />
      <Restaurant {...activeRestaurant} />
      {Array.from({ length: 10 }).map((_, index) => (
        <Restaurant key={index} {...activeRestaurant} />
      ))}
    </main>
  )
}
