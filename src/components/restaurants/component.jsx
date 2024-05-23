/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { Restaurant } from '../restaurant/component'
import { Tabs } from '../tabs/component'

export const Restaurants = ({ restaurants }) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(null)

  useEffect(() => {
    if (!restaurants.length) return
    setCurrentRestaurant(restaurants[0])
  }, [restaurants])

  if (!restaurants.length) {
    return (
      <main>
        <h1>Oops!</h1>
      </main>
    )
  }

  const onTabClick = (restaurant) => setCurrentRestaurant(restaurant)

  return (
    <main>
      <h1>Restaurants</h1>
      <Tabs restaurants={restaurants} onTabClick={onTabClick} />
      {currentRestaurant && (
        <Restaurant {...currentRestaurant} />
      )}
    </main>
  )
}
