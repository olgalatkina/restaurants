import { Counter } from '../counter/component'
import { useCount } from '../../hooks/use-count';

export const Dish = ({ name, price }) => {
  const { count, increment, decrement } = useCount()

  return (
    <div>
      <p>{name}</p>
      <Counter
        value={count}
        increment={increment}
        decrement={decrement}
      />
      <p>Price: {count * price}</p>
    </div>
  )
}
