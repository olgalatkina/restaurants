import { Tab } from '../tab/component'

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <ul>
      {restaurants.map(({ name, id }, index) => (
        <li key={id}>
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
