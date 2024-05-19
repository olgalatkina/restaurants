import { Dish } from "../dish/component"
import { List } from "../list/component"
import { Review } from "../review/component"

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <List items={menu} ItemComponent={Dish} />
      <h3>Отзывы</h3>
      <List items={reviews} ItemComponent={Review} />
    </div>
  )
}
