/* eslint-disable react/jsx-key */
import { Counter } from '../counter/component'
export const Dish = ({ name }) => {
  return (
    <p>{name} <Counter /></p>
  )
}
