import styles from './styles.module.css'
const Star = ({ value, onClick, active, children }) => {
  return (
    <button
      type='button'
      value={value}
      onClick={() => onClick(value)}
      className={active ? styles.active : ''}
      aria-label={`rating ${value}`}
    >
      {children || value}
    </button>)
}

export const Rating = ({ maxValue = 5, onChange, rating }) => {
  return (
    <div>
      <div>Rating: </div>
      <div>
        {Array.from({ length: maxValue }).map((_, index) => {
          const value = index + 1;

          return (
            <Star
              key={index}
              value={value}
              onClick={onChange}
              active={rating === value}
            />
          )
        })}
      </div>
    </div>
  )
}
