import { CounterSettings } from '../../../constants'
import { Button } from '../button/component'

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button
        onClick={decrement}
        disabled={value === CounterSettings.MIN}
        aria-label='decrement'
      >
        -
      </Button>
      {value}
      <Button
        onClick={increment}
        disabled={value === CounterSettings.MAX}
        aria-label='increment'
      >
        +
      </Button>
    </div>
  )
}
