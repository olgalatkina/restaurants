/* eslint-disable react/jsx-key */
import { Tab } from '../tab/component'

export const Tabs = ({ restaurants, onTabClick }) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li>
          <Tab
            restaurant={restaurant}
            onClick={onTabClick}
          />
        </li>
      ))}
    </ul>
  )
}
