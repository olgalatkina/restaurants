import { useState } from 'react'

export const Counter = ({ min = 0, max = 5, step = 1 }) => {
  const [ count, setCount ] = useState(min)

  const increment = () =>
    setCount((prevState) => (prevState < max ? prevState + step : prevState))

  const decrement = () =>
    setCount((prevState) => (prevState > min ? prevState - step : prevState))

  return (
    <span>
      <button onClick={decrement} disabled={count === min}>-</button>
      {count}
      <button onClick={increment} disabled={count === max}>+</button>
    </span>
  )
}
