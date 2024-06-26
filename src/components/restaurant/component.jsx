/* eslint-disable react/jsx-key */
import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  )
}
