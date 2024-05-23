export const Counter = ({ value, min = 0, max = 5, onChange }) => {
  return (
    <div>
      <button
        onClick={() => onChange(value - 1)}
        disabled={value === min}
      >
        -
      </button>
      {value}
      <button
        onClick={() => onChange(value + 1)}
        disabled={value === max}
      >
        +
      </button>
    </div>
  )
}
