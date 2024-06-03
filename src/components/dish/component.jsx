import { Counter } from '../counter/component'
import { useCount } from '../../hooks/use-count';

import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export const Dish = ({ name, price }) => {
  const { count, increment, decrement } = useCount()
  const user = useContext(UserContext)

  return (
    <div>
      <p>{name}</p>
      {!!user && (
        <>
          <Counter
            value={count}
            increment={increment}
            decrement={decrement}
          />
          <p>Price: {count * price}</p>
        </>
      )}
    </div>
  )
}
