/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { Counter } from '../counter/component'

const initialValue = 0;
export const Dish = ({ name, price }) => {
  const [ count, setCount ] = useState(initialValue)

  return (
    <div>
      <p>{name}</p>
      <Counter value={count} onChange={setCount} />
      <p>{count * price}</p>
    </div>
  )
}
