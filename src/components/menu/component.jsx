import { Dish } from "../dish/component"
export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish {...dish} />
          </li>
        ))}
      </ul>
    </div>
  )
}
