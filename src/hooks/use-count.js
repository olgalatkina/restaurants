import {
  useState,
  useCallback
} from 'react'

import { CounterSettings } from '../../constants'

export const useCount = ({
  min = CounterSettings.MIN,
  max = CounterSettings.MAX,
  step = CounterSettings.STEP,
  initialValue = CounterSettings.INITIAL_VALUE,
} = {}) => {
  const [ count, setCount ] = useState(initialValue)

  const increment = useCallback(() => {
    setCount(prevCount =>
      prevCount === max ? prevCount : prevCount + step)
  }, [max, step])

  const decrement = useCallback(() => {
    setCount(prevCount =>
      prevCount === min ? prevCount : prevCount - step)
  }, [min, step])

  return { count, increment, decrement }
}
