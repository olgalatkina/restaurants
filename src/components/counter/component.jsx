import { CounterSettings } from "../../../constants"

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button
        onClick={decrement}
        disabled={value === CounterSettings.MIN}
        aria-label='decrement'
      >
        -
      </button>
      {value}
      <button
        onClick={increment}
        disabled={value === CounterSettings.MAX}
        aria-label='increment'
      >
        +
      </button>
    </div>
  )
}
