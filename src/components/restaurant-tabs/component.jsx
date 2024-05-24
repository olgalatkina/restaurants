/* eslint-disable react/jsx-key */
import { Tab } from '../tab/component'

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <ul>
      {restaurants.map(({ name }, index) => (
        <li>
          <Tab
            title={name}
            onClick={() => onTabClick(index)}
            isActive={index === activeTabIndex}
          />
        </li>
      ))}
    </ul>
  )
}
